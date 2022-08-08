import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import EditRecetteFinance from "./EditRecetteFinance";
import InputRecetteFinance from "./InputRecetteFinance";

const ListRecetteFinance = () => {
  const [recette, setrecette] = useState([]);
  const [user, setUser] = useState({ "libelle": "", "montant": "" });
  const [row, setRow] = useState("");

  const deleterecette = async id => {
    setRow("");
    setUser({});
    document.getElementById("recfe").className = "btn btn-light mx-3 mb-3 disabled";
    document.getElementById("recfd").className = "btn btn-dark mb-3 disabled";
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
    <>
      <InputRecetteFinance />
      <div className="table-responsive   mytable-56recette">
        <table className="table table-hover text-center">
          <thead className="table-secondary text-secondary mytableheader">
            <tr>
              <th>Libellé</th>
              <th>Montant</th>
            </tr>
          </thead>
          <tbody>
            {recette.map(rec => (
              <tr key={rec.rf_id} id={`rec${rec.rf_id}`} onClick={() => {
                let e = document.getElementById(`rec${rec.rf_id}`);
                if (e.className !== "table-secondary") {
                  if (row !== "") document.getElementById(row).className = "";
                  e.className = "table-secondary";
                  setRow(`rec${rec.rf_id}`);
                  setUser(rec);
                  document.getElementById("recfe").className = "btn btn-light mx-3 mb-3";
                  document.getElementById("recfd").className = "btn btn-dark mb-3";
                }
              }}>
                <td data-label="Libellé">{rec.libelle}</td>
                <td data-label="Montant">{rec.montant}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <EditRecetteFinance recette={user} />
      <Button
        className="mb-3 disabled" variant="dark" id="recfd"
        onClick={() => deleterecette(user.rf_id)}>
        Supprimer
      </Button>
    </>
  );
};

export default ListRecetteFinance;