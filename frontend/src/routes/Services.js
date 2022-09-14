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
      const response = await fetch(`/services/listt/?q=${query}`);
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
        <Search setQuery={(e) => setQuery(e)} />
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
                <td data-label="Tribunal">{service.tribunal}</td>
                <td data-label="Nom">{service.nom}</td>
                <td data-label="Lundi" className="back">
                  <p className={(service.lundi == 'Course') ? "t1" :
                  service.lundi == 'Audience' ? "t2": "t3"}>{service.lundi}</p></td>
                <td data-label="Mardi">
                  <p className={(service.mardi == 'Course') ? "t1" :
                  service.mardi == 'Audience' ? "t2": "t3"}>{service.mardi}</p></td>
                <td data-label="Mercredi">
                  <p className={(service.mercredi == 'Course') ? "t1" :
                  service.mercredi == 'Audience' ? "t2": "t3"}>{service.mercredi}</p></td>
                <td data-label="Jeudi">
                  <p className={(service.jeudi == 'Course') ? "t1" :
                  service.jeudi == 'Audience' ? "t2": "t3"}>{service.jeudi}</p></td>
                <td data-label="Vendredi">
                  <p className={(service.vendredi == 'Course') ? "t1" :
                  service.vendredi == 'Audience' ? "t2": "t3"}>{service.vendredi}</p></td>
                <td data-label="Samedi">
                  <p className={(service.samedi == 'Course') ? "t1" :
                  service.samedi == 'Audience' ? "t2": "t3"}>{service.samedi}</p></td>
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
          'backgroundColor': '#BBA14A'
        }}>Jour d'Audience</h5>
      </div>
    </>
  );
};

export default ListServices;