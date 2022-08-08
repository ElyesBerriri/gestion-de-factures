import React, { useEffect, useState } from "react";
import EditDossier from "./EditDossier";
import Button from 'react-bootstrap/Button';

const ListDossier = () => {
  const [dossiers, setDossiers] = useState([]);
  const [id, setID] = useState("");
  const [dossier, setDossier] = useState({});
  const [row, setRow] = useState("");

  const deletedossier = async id => {
    setRow("");
    document.getElementById("clbtnr").className = "btn btn-dark disabled";
    document.getElementById("clbtnm").className = "btn btn-light mx-3 disabled";
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
    <>
      <div className="table-responsive mytable-56dossier">
        <table className="table table-hover text-center">
          <thead className="table-secondary text-secondary mytableheader">
            <tr>
              <th scope="col">Libellé</th>
            </tr>
          </thead>
          <tbody>
            {dossiers.map(dossier => (
              <tr key={dossier.dossier_id} id={`dossier${dossier.dossier_id}`} onClick={() => {
                setID(dossier.dossier_id);
                setDossier(dossier);
                let e = document.getElementById(`dossier${dossier.dossier_id}`);
                if (e.className !== "table-secondary") {
                  if (row !== "") document.getElementById(row).className = "";
                  e.className = "table-secondary";
                  setRow(`dossier${dossier.dossier_id}`);
                  document.getElementById("clbtnr").className = "btn btn-dark";
                  document.getElementById("clbtnm").className = "btn btn-light mx-3";
                }
              }}>
                <td data-label="Libellé">{dossier.libelle}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="modifsupp">
        <EditDossier dossier={dossier} id={id} />
        <Button variant="dark" id="clbtnr" className="disabled" onClick={() => deletedossier(id)}>
          Supprimer
        </Button>
      </div>
    </>
  );
};

export default ListDossier;