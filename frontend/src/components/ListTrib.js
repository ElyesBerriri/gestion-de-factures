import React, { Fragment, useEffect, useState } from "react";
import EditTrib from "./EditTrib";

const ListTrib = () => {
  const [trib, settrib] = useState([]);


  const deletetrib = async id => {
    try {
      await fetch(`/tribunaux/list/${id}`, {
        method: "DELETE"
      });

      settrib(trib.filter(trib => trib.trib_id !== id));
    } catch (err) {
      console.error(err.message);
    }
  };

  const gettrib = async () => {
    try {
      const response = await fetch("/tribunaux/list");
      const jsonData = await response.json();
      
      settrib(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    gettrib();
  }, []);


  return (
    <Fragment>
      {" "}
      <table className="table table table-hover mt-5 text-center">
        <thead  className="table-dark">
          <tr>
            <th>Tribunaux</th>
            <th>Modifier</th>
            <th>Supprimer</th>
          </tr>
        </thead>
        <tbody>
          {trib.map(trib => (

            <tr key={trib.trib_id}>
             <td>{trib.lieux}</td>
              <td>
              <EditTrib trib={trib} />
              </td>

              <td>
              <button
                  className="btn btn-danger"
                  onClick={() => deletetrib(trib.trib_id)}
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

export default ListTrib;