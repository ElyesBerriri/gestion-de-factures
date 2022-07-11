import React, { Fragment, useEffect, useState } from "react";
import EditRecetteFinance from "./EditRecetteFinance";

const ListRecetteFinance = () => {
  const [recette, setrecette] = useState([]);


  const deleterecette = async id => {
    try {
      await fetch(`/recettefinance/list/${id}`, {
        method: "DELETE"
      });

      setrecette(recette.filter(rec => rec.rf_id !== id));
    } catch (err) {
      console.error(err.message);
    }
  };

  const getrecette = async () => {
    try {
      const response = await fetch("/recettefinance/list");
      const jsonData = await response.json();
      
      setrecette(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getrecette();
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
          {recette.map(rec => (
            <tr key={rec.rf_id}>
              <td>{rec.libelle}</td>
              <td>{rec.montant}</td>
              <td>
                <EditRecetteFinance recette={rec} />
              </td>
              <td>
              <button
                  className="btn btn-danger"
                  onClick={() => deleterecette(rec.rf_id)}
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

export default ListRecetteFinance;