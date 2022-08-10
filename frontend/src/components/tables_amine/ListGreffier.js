import React, { useEffect, useState } from "react";
import EditGreffier from "./EditGreffier";
import InputGreffier from "./InputGreffier";
import { Button } from "react-bootstrap";

const ListGreffier = () => {
  const [gref, setgref] = useState([]);
  const [user, setUser] = useState({
    "nom":"",
    "prenom":"",
    "date_nais":"",
    "adresse":"",
    "etat_civile":"",
    "nombre_e":"",
    "type_payement":"",
    "base":"",
    "cin":"",
    "tel":"",
    "categorie":"",
    "echelon":"",
    "crss":"",
    "contrat":"",
    "sexe":"",
    "date_emb":"",
    "actif":"",
    "unk1":"",
    "unk2":""
  });
  const [row, setRow] = useState("");

  const deletegreffier = async id => {
    setRow("");
    setUser({});
    document.getElementById("grefe").className = "btn btn-light mx-3 mb-3 disabled";
    document.getElementById("grefd").className = "btn btn-dark mb-3 disabled";
    try {
      await fetch(`/greffier/list/${id}`, {
        method: "DELETE"
      });
      setgref(gref.filter(gr => gr.gref_id !== id));
    } catch (err) {
      console.error(err.message);
    }
  };

  const getgreffier = async () => {
    try {
      const response = await fetch("/greffier/list");
      const jsonData = await response.json();
      setgref(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getgreffier();
  }, []);

  return (
    <>
      <InputGreffier />
      <div className="table-responsive m-3 mytable mytable-68">
        <table className="table table-hover text-center">
          <thead className="table-secondary text-secondary mytableheader">
            <tr>
              <th>Nom</th>
              <th>Prénom</th>
              <th className="text-nowrap">Date de naissance</th>
              <th>Adresse</th>
              <th className="text-nowrap">Etat civil</th>
              <th className="text-nowrap">Nombre_e</th>
              <th className="text-nowrap">Type de paiement</th>
              <th>Base</th>
              <th>Cin</th>
              <th>Téléphone</th>
              <th>Catégorie</th>
              <th>Echelon</th>
              <th>Crss</th>
              <th>Contrat</th>
              <th>Sexe</th>
              <th className="text-nowrap">Date_emb</th>
              <th>Actif</th>
              <th className="text-nowrap">Unk1</th>
              <th className="text-nowrap">Unk2</th>
            </tr>
          </thead>
          <tbody>
            {gref.map(gr => (
              <tr key={`gr${gr.gref_id}`} id={`gr${gr.gref_id}`} onClick={() => {
                let e = document.getElementById(`gr${gr.gref_id}`);
                if (e.className !== "table-secondary") {
                  if (row !== "") document.getElementById(row).className = "";
                  e.className = "table-secondary";
                  setRow(`gr${gr.gref_id}`);
                  setUser(gr);
                  document.getElementById("grefe").className = "btn btn-light mx-3 mb-3";
                  document.getElementById("grefd").className = "btn btn-dark mb-3";
                }
              }}>
                <td data-label="Nom">{gr.nom}</td>
                <td data-label="Prénom">{gr.prenom}</td>
                <td data-label="Date de naissance">{gr.date_nais}</td>
                <td data-label="Adresse">{gr.adresse}</td>
                <td data-label="Etat civil">{gr.etat_civile}</td>
                <td data-label="Nombre_e">{gr.nombre_e}</td>
                <td data-label="Type de paiement">{gr.type_payement}</td>
                <td data-label="Base">{gr.base}</td>
                <td data-label="Cin">{gr.cin}</td>
                <td data-label="Téléphone">{gr.tel}</td>
                <td data-label="Catégorie">{gr.categorie}</td>
                <td data-label="Echelon">{gr.echelon}</td>
                <td data-label="Crss">{gr.crss}</td>
                <td data-label="Contrat">{gr.contrat}</td>
                <td data-label="Sexe">{gr.sexe}</td>
                <td data-label="Date_emb">{gr.date_emb}</td>
                <td data-label="Actif">{gr.actif}</td>
                <td data-label="Unk1">{gr.unk1}</td>
                <td data-label="Unk2">{gr.unk2}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="modifsupp">
        <EditGreffier gref={user} />
        <Button
          className="mb-3 disabled" variant="dark" id="grefd"
          onClick={() => deletegreffier(user.gref_id)}>
          Supprimer
        </Button>
      </div>
    </>
  );
};

export default ListGreffier;