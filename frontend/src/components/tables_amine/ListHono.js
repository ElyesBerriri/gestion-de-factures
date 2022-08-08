import React, { Fragment, useEffect, useState } from "react";
import EditHono from "./EditHono";
import InputHono from "./InputHono";
import { Button } from "react-bootstrap";

const ListHono = () => {
  const [hono, sethono] = useState([]);
  const [user, setUser] = useState({ "lib_arb": "", "lib_fr": "", "montant": "" });
  const [row, setRow] = useState("");

  const deletehono = async id => {
    setRow("");
    setUser({});
    document.getElementById("honoe").className = "btn btn-light mx-3 mb-3 disabled";
    document.getElementById("honod").className = "btn btn-dark mb-3 disabled";
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
      <InputHono />
      <div className="table-responsive  mytable-56recette">
        <table className="table table-hover text-center">
          <thead className="table-secondary text-secondary mytableheader">
            <tr>
              <th className="text-nowrap">Libellé Arabe</th>
              <th className="text-nowrap">Libellé Français</th>
              <th>Montant</th>
            </tr>
          </thead>
          <tbody>
            {hono.map(ho => (
              <tr key={ho.gr_id} id={`ho${ho.gr_id}`} onClick={() => {
                let e = document.getElementById(`ho${ho.gr_id}`);
                if (e.className !== "table-secondary") {
                  if (row !== "") document.getElementById(row).className = "";
                  e.className = "table-secondary";
                  setRow(`ho${ho.gr_id}`);
                  setUser(ho);
                  document.getElementById("honoe").className = "btn btn-light mx-3 mb-3";
                  document.getElementById("honod").className = "btn btn-dark mb-3";
                }
              }}>
                <td data-label="Libellé en arabe">{ho.lib_arab}</td>
                <td data-label="Libellé en français">{ho.lib_fr}</td>
                <td data-label="Montant">{ho.montant}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <EditHono hono={user} />
      <Button
        className="mb-3 disabled" variant="dark" id="honod"
        onClick={() => deletehono(user.gr_id)}
      >
        Supprimer
      </Button>
    </Fragment>
  );
};

export default ListHono;