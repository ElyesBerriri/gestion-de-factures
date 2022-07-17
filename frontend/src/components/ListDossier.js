import React, { Fragment, useEffect, useState } from "react";
import EditDossier from "./EditDossier";

const ListDossier = () => {
  const [dossiers, setDossiers] = useState([]);
const [id,setID]=useState("");

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
      <table className="table table table-hover mt-5 text-center">
        <thead  className="table-dark">
          <tr>
            <th>Libellé</th>
            <th>Modifier</th>
          </tr>
        </thead>
        <tbody>
          {dossiers.map(dossier => (
            <tr key={dossier.dossier_id}>
              <td onClick={()=> setID(dossier.dossier_id)}>{dossier.libelle}</td>
              <td>
                <EditDossier dossier={dossier} />
              </td>
              
            </tr>
          ))}
        </tbody>
      </table>
      <button
                  className="btn btn-danger"
                  onClick={() => deletedossier(id)}
                >
                  Supprimer
                </button>
    </Fragment>
  );
};

export default ListDossier;