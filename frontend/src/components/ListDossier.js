import React, { Fragment, useEffect, useState } from "react";
import EditDossier from "./EditDossier";

const ListDossier = () => {
  const [dossiers, setDossiers] = useState([]);


  const deletedossier = async id => {
    try {
      await fetch(`/dossiers/list/${id}`, {
        method: "DELETE"
      });

      setDossiers(dossiers.filter(dossier => dossier.dossier_id !== id));
    } catch (err) {
      console.error(err.message);
    }
  };

  const getDossiers = async () => {
    try {
      const response = await fetch("/dossiers/list");
      const jsonData = await response.json();
      
      setDossiers(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getDossiers();
  }, []);


  return (
    <Fragment>
      {" "}
      <table class="table table table-hover mt-5 text-center">
        <thead  class="table-dark">
          <tr>
            <th>Libelle</th>
            <th>Modifier</th>
            <th>Supprimer</th>
          </tr>
        </thead>
        <tbody>
          {dossiers.map(dossier => (
            <tr key={dossier.dossier_id}>
              <td>{dossier.libelle}</td>
              <td>
                <EditDossier dossier={dossier} />
              </td>
              <td>
              <button
                  className="btn btn-danger"
                  onClick={() => deletedossier(dossier.dossier_id)}
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

export default ListDossier;