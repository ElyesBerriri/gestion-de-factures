import React, { Fragment, useEffect, useState } from "react";
import EditTimbre from "./EditTimbre";

const ListTimbre = () => {
  const [timbre, settimbre] = useState([]);


  const deletetimbre = async id => {
    try {
      await fetch(`/timbres/list/${id}`, {
        method: "DELETE"
      });

      settimbre(timbre.filter(tm => tm.tim_id !== id));
    } catch (err) {
      console.error(err.message);
    }
  };

  const gettimbre = async () => {
    try {
      const response = await fetch("/timbres/list");
      const jsonData = await response.json();
      
      settimbre(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    gettimbre();
  }, []);


  return (
    <Fragment>
      {" "}
      <table className="table table table-hover mt-5 text-center">
        <thead  className="table-dark">
          <tr>
            <th>Libelle</th>
            <th>Montant</th>
            <th>Modifier</th>
            <th>Supprimer</th>
          </tr>
        </thead>
        <tbody>
          {timbre.map(tm => (
            <tr key={tm.tim_id}>
              <td>{tm.libelle}</td>
              <td>{tm.montant}</td>
              <td>
                <EditTimbre tm={tm} />
              </td>
              <td>
              <button
                  className="btn btn-danger"
                  onClick={() => deletetimbre(tm.tim_id)}
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

export default ListTimbre;