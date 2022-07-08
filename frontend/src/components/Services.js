import React, { Fragment, useEffect, useState } from "react";
import EditServices from "./EditServices";

const ListServices = ({lieux}) => {
  const [service, setservice] = useState([]);


  const deleteservice = async id => {
    try {
      await fetch(`/Services/list/${id}`, {
        method: "DELETE"
      });

      setservice(service.filter(service => service.service_id !== id));
    } catch (err) {
      console.error(err.message);
    }
  };

  const getservice = async (lieux) => {
    try {
      const response = await fetch(`/Services/list/${lieux}`);
      const jsonData = await response.json();
      
      setservice(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

 


  return (
    <Fragment>
      {" "}
      <table className="table table table-hover mt-5 text-center">
        <thead  className="table-dark">
          <tr>
            <th>Nom</th>
            <th>Lundi</th>
            <th>Mardi</th>
            <th>Mercredi</th>
            <th>Jeudi</th>
            <th>Vendredi</th>
            <th>Samedi</th>
          </tr>
        </thead>
        <tbody>
          {service.map(service => (
            <tr key={service.service_id}>
              <td>{service.nom}</td>
              <td>{service.lundi}</td>
              <td>{service.mardi}</td>
              <td>{service.mercredi}</td>
              <td>{service.jeudi}</td>
              <td>{service.vendredi}</td>
              <td>{service.samedi}</td>
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
    </Fragment>
  );
};

export default ListServices;