import React, { Fragment, useEffect, useState } from "react";
import EditTimbre from "./EditTimbre";
import InputTimbre from "./InputTimbre";
import { Button } from "react-bootstrap";

const ListTimbre = () => {
  const [timbre, settimbre] = useState([]);
  const [user, setUser] = useState({ "libelle": "", "montant": "" });
  const [row, setRow] = useState("");

  const deletetimbre = async id => {
    setRow("");
    setUser({});
    document.getElementById("tme").className = "btn btn-light mx-3 mb-3 disabled";
    document.getElementById("tmd").className = "btn btn-dark mb-3 disabled";
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
      <InputTimbre />
      <div className="table-responsive mytable-56recette">
        <table className="table table-hover text-center">
          <thead className="table-secondary text-secondary mytableheader">
            <tr>
              <th>Libellé</th>
              <th>Montant</th>
            </tr>
          </thead>
          <tbody>
            {timbre.map(tm => (
              <tr key={tm.tim_id} id={`tm${tm.tim_id}`} onClick={() => {
                let e = document.getElementById(`tm${tm.tim_id}`);
                if (e.className !== "table-secondary") {
                  if (row !== "") document.getElementById(row).className = "";
                  e.className = "table-secondary";
                  setRow(`tm${tm.tim_id}`);
                  setUser(tm);
                  document.getElementById("tme").className = "btn btn-light mx-3 mb-3";
                  document.getElementById("tmd").className = "btn btn-dark mb-3";
                }
              }}>
                <td data-label="Libellé">{tm.libelle}</td>
                <td data-label="Montant">{tm.montant}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <EditTimbre timbre={user} />
      <Button
        className="mb-3 disabled" variant="dark" id="tmd"
        onClick={() => deletetimbre(user.tim_id)}
      >
        Supprimer
      </Button>
    </Fragment>
  );
};

export default ListTimbre;