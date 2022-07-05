import React, { Fragment, useEffect, useState } from "react";


const ListDossier = () => {
  const [dossiers, setDossiers] = useState([]);


  const deletedossier = async id => {
    try {
      const deletedossier = await fetch(`/dossiers/list/${id}`, {
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
      <table class="table mt-5 text-center">
        <thead>
          <tr>
            <th>Description</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {dossiers.map(dossier => (
            <tr key={dossier.dossier_id}>
              <td>{dossier.libelle}</td>
              <td>
                edit            
              </td>
              <td>
              <button
                  className="btn btn-danger"
                  onClick={() => deletedossier(dossier.dossier_id)}
                >
                  Delete
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