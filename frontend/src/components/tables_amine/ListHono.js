import React, { Fragment, useEffect, useState } from "react";
import EditHono from "./EditHono";

const ListHono = () => {
  const [hono, sethono] = useState([]);


  const deletehono = async id => {
    try {
      await fetch(`/honoraires/list/${id}`, {
        method: "DELETE"
      });

      sethono(hono.filter(ho => ho.gr_id !== id));
    } catch (err) {
      console.error(err.message);
    }
  };

  const gethono = async () => {
    try {
      const response = await fetch("/honoraires/list/");
      const jsonData = await response.json();
      
      sethono(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    gethono();
  }, []);


  return (
    <Fragment>
      {" "}
      <table className="table table table-hover mt-5 text-center">
        <thead  className="table-dark">
          <tr>
            <th>Libelle en arabe</th>
            <th>Libelle en français</th>
            <th>Montant</th>
            <th>Modifier</th>
            <th>Supprimer</th>
          </tr>
        </thead>
        <tbody>
          {hono.map(ho => (
            <tr key={ho.gr_id}>
              <td>{ho.lib_arab}</td>
              <td>{ho.lib_fr}</td>
              <td>{ho.montant}</td>
              <td>
                <EditHono ho={ho} />
              </td>
              <td>
              <button
                  className="btn btn-danger"
                  onClick={() => deletehono(ho.gr_id)}
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

export default ListHono;