import React, { useEffect, useState } from "react";
import EditServices from "../components/EditServices";
import InputService from "../components/InputService";
import Button from 'react-bootstrap/Button';
import Search from "../components/Search";

const ListServices = () => {
  const [service, setservice] = useState([]);
  const [query, setQuery] = useState("");
  const [row, setRow] = useState("");
  const [id, setID] = useState("");
  const [servicee, setservicee] = useState({
    "tribunal": "",
    "nom": "",
    "lundi": "",
    "mardi": "",
    "mercredi": "",
    "jeudi": "",
    "vendredi": "",
    "samedi": ""
  });

  const deleteservice = async id => {
    setRow("");
    setservicee({
      "tribunal": "",
      "nom": "",
      "lundi": "",
      "mardi": "",
      "mercredi": "",
      "jeudi": "",
      "vendredi": "",
      "samedi": ""
    });
    document.getElementById("clbtnm").className = "btn btn-light mx-3 disabled";
    document.getElementById("clbtnr").className = "btn btn-dark disabled";
    try {
      await fetch(`/services/list/${id}`, {
        method: "DELETE"
      });
      setservice(service.filter(service => service.service_id !== id));
    } catch (err) {
      console.error(err.message);
    }
  };

  const getservice = async () => {
    try {
      const response = await fetch(`/services/list/?q=${query}`);
      const jsonData = await response.json();
      setservice(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getservice();
  }, [query]);

  return (
    <>
      <h1 className='title' >Liste des Administrations</h1>
      <div className="rechercheajout">
        <InputService />
        <Search setQuery={(e) => setQuery(e.target.value.toLowerCase())} />
      </div>
      <div className="table-responsive mytable-56service">
        <table className="table table-hover text-center">
          <thead className="table-secondary text-secondary mytableheader">
            <tr>
              <th scope="col"> Tribunal</th>
              <th scope="col">Nom</th>
              <th scope="col">Lundi</th>
              <th scope="col"> Mardi</th>
              <th scope="col">Mercredi</th>
              <th scope="col">Jeudi</th>
              <th scope="col">Vendredi</th>
              <th scope="col">Samedi</th>
            </tr>
          </thead>

          <tbody>
            {service.map(service => (
              <tr key={service.service_id} id={`service${service.service_id}`} onClick={() => {
                setID(service.service_id);
                setservicee(service);
                let e = document.getElementById(`service${service.service_id}`);
                if (e.className !== "table-secondary") {
                  if (row !== "") document.getElementById(row).className = "";
                  e.className = "table-secondary";
                  setRow(`service${service.service_id}`);
                  document.getElementById("clbtnr").className = "btn btn-dark";
                  document.getElementById("clbtnm").className = "btn btn-light mx-3";
                }
              }}>
                <td >{service.tribunal}</td>
                <td>{service.nom}</td>
                <td className="back" style={
                  service.lundi == "Course" ?
                    { 'backgroundColor': '#868e96' } :
                    service.lundi == "Audience" ?
                      { 'backgroundColor': '#02c3cc' } : { 'backgroundColor': '	#FFFFFF' }
                }>{service.lundi}</td>
                <td
                  style={
                    service.mardi == "Course" ?
                      { 'backgroundColor': '#868e96' }
                      :
                      service.mardi == "Audience" ?
                        { 'backgroundColor': '#02c3cc' } : { 'backgroundColor': '	#FFFFFF' }
                  }>{service.mardi}</td>
                <td
                  style={
                    service.mercredi == "Course" ?
                      { 'backgroundColor': "#868e96" }
                      :
                      service.mercredi == "Audience" ?
                        { 'backgroundColor': '#02c3cc' } : { 'backgroundColor': '	#FFFFFF' }
                  }>{service.mercredi}</td>
                <td
                  style={
                    service.jeudi == "Course" ?
                      { 'backgroundColor': '#868e96' }
                      :
                      service.jeudi == "Audience" ?
                        { 'backgroundColor': '#02c3cc' } : { 'backgroundColor': '	#FFFFFF' }
                  }>{service.jeudi}</td>
                <td
                  style={
                    service.vendredi == "Course" ?
                      { 'backgroundColor': '#868e96' }
                      :
                      service.vendredi == "Audience" ?
                        { 'backgroundColor': '#02c3cc' } : { 'backgroundColor': '	#FFFFFF' }}
                >{service.vendredi}</td>
                <td
                  style={
                    service.samedi == "Course" ?
                      { 'backgroundColor': '#868e96' }
                      :
                      service.samedi == "Audience" ?
                        { 'backgroundColor': '#02c3cc' } : { 'backgroundColor': '	#FFFFFF' }}>{service.samedi}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="modifsupp">
        <EditServices service={servicee} />
        <Button variant="dark" id="clbtnr" className="disabled" onClick={() => deleteservice(id)}>
          Supprimer
        </Button>
      </div>

      <div className="courseaudience">
        <h5 className="course" style={{
          'backgroundColor': '#868e96'
        }}>Jour de Course</h5>
        <h5 className="audience" style={{
          'backgroundColor': '#02c3cc'
        }}>Jour d'Audience</h5>
      </div>
    </>
  );
};

export default ListServices;