import React, { Fragment, useEffect, useState } from "react";
import EditServices from "../components/EditServices";
import InputService from "../components/InputService";
import Button from 'react-bootstrap/Button';
import Search from "../components/Search";

const ListServices = () => {
  const [service, setservice] = useState([]);
  const [query, setQuery] = useState("");
  const [row, setRow] = useState("");
  const [servicee, setservicee] = useState({});
  const [id,setID]=useState("");

  const deleteservice = async id => {
    setRow("");
      document.getElementById("clbtnm").className="btn btn-light mx-3 disabled";
      document.getElementById("clbtnr").className="btn btn-dark disabled";
    try {
      await fetch(`/services/list/${id}`, {
        method: "DELETE"
      });

      setservice(service.filter(service => service.service_id !== id));
    } catch (err) {
      console.error(err.message);
    }
  };

  const getservice = async ()=> {
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
    <Fragment >
        
        <h1  className='title' >Liste des Administrations</h1>

        <div className="rechercheajout">
          <InputService   />
          <Search setQuery={(e) => setQuery(e.target.value.toLowerCase())} />
      </div>
 

      
      <div className="table-responsive m-3 mytable mytable-56">
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
            <tr key={service.service_id} id={`collab${service.service_id}`} onClick={()=>{ setID(service.service_id); 
              setservicee(service);
              let e = document.getElementById(`collab${service.service_id}`);
                  if (e.className !== "table-secondary") {
                    if (row !== "") document.getElementById(row).className = "";
                    e.className = "table-secondary";
                    setRow(`collab${service.service_id}`);
                    document.getElementById("clbtnr").className="btn btn-dark";
                    document.getElementById("clbtnm").className="btn btn-light mx-3";
                   }}}>
              <td >{service.tribunal}</td>
              <td>{service.nom}</td>
              <td style={
                service.lundi=="Course"?
                {'backgroundColor': '#ffa500'}
                :
                {'backgroundColor': '#89CFF0'}
            }>{service.lundi}</td>
              <td
              style={
                service.mardi=="Course"?
                {'backgroundColor': '#ffa500'}
                :
                {'backgroundColor': '#89CFF0'}
            }>{service.mardi}</td>
              <td
              style={
                service.mercredi=="Course"?
                {'backgroundColor': '#ffa500'}
                :
                {'backgroundColor': '#89CFF0'}
            }>{service.mercredi}</td>
              <td
              style={
                service.jeudi=="Course"?
                {'backgroundColor': '#ffa500'}
                :
                {'backgroundColor': '#89CFF0'}
            }>{service.jeudi}</td>
              <td
              style={
                service.vendredi=="Course"?
                {'backgroundColor': '#ffa500'}
                :
                {'backgroundColor': '#89CFF0'}
            }>{service.vendredi}</td>
              <td
              style={
                service.samedi=="Course"?
                {'backgroundColor': '#ffa500'}
                :
                {'backgroundColor': '#89CFF0'}
            }>{service.samedi}</td>
             
            </tr>
          ))}
        </tbody>
      </table>
      </div>

      <div className="modifsupp">
        <EditServices service={servicee}  />
      <Button variant="dark" id="clbtnr" className="disabled" onClick={() => deleteservice(id)}>
      Supprimer
        </Button>
        </div>

            <div className="container">
            <h5 style={{'backgroundColor': '#ffa500'
    }}>Jours des Courses</h5>
    <h5 style={{'backgroundColor': '#89CFF0'
    }}>Jours d'Audience</h5>
            </div>
            
     </Fragment>
  );
};

export default ListServices;