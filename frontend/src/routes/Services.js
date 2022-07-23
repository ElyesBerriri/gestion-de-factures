import React, { Fragment, useEffect, useState } from "react";
import EditServices from "../components/EditServices";
import InputService from "../components/InputService";

const ListServices = () => {
  const [service, setservice] = useState([]);
  const [query, setQuery] = useState("");

  const deleteservice = async id => {
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
        
        <h1 className="mt-5" >Liste des Administrations</h1>


      {" "}
         <input
          className="search"
          placeholder="Recherche .."
          onChange={(e) => setQuery(e.target.value.toLowerCase())}
        />

      <table className="table table table-hover mt-5 text-center">
        <thead  className="table-dark">
          <tr>
            <th>Tribunal</th>
            <th>Nom</th>
            <th>Lundi</th>
            <th>Mardi</th>
            <th>Mercredi</th>
            <th>Jeudi</th>
            <th>Vendredi</th>
            <th>Samedi</th>
            <th>Modifier</th>
            <th>Supprimer</th>
          </tr>
        </thead>
        <tbody>
          {service.map(service => (
            <tr key={service.service_id}>
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
              <td>
                <EditServices service={service} />
              </td>
              <td>
              <button
                  className="btn btn-danger"
                  onClick={() => deleteservice(service.service_id)}
                >
                  Supprimer
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
            <div className="container">
            <h5 style={{'backgroundColor': '#ffa500'
    }}>Jours des Courses</h5>
    <h5 style={{'backgroundColor': '#89CFF0'
    }}>Jours d'Audience</h5>
            </div>
            
            <InputService   />
    </Fragment>
  );
};

export default ListServices;