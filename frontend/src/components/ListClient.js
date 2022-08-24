import React, { useState, useEffect } from "react";
import EditClient from "./EditClient";
import Button from 'react-bootstrap/Button';
import Search from "./Search";
import InputClient from "./InputClient";

const ListClient = () => {

  const [clients, setClients] = useState([]);
  const [query, setQuery] = useState("");
  const [row, setRow] = useState("");
  const [doc, setDoc] = useState({
    "collaborateur": "",
    "code_client": "",
    "raison": "",
    "situation_fiscale": "",
    "type_client": "",
    "matricule": "",
    "ville": "",
    "rue": "",
    "num": 0,
    "code_postale": 0,
    "adresse": "",
    "activite": "",
    "tel": "",
    "fax": "",
    "email": ""
  });

  const deleteClient = async id => {
    setRow("");
    setDoc({});
    document.getElementById("clbtnm").className = "btn btn-light mx-3 disabled";
    document.getElementById("clbtnr").className = "btn btn-dark disabled";
    try {
      await fetch(`/clients/list/${id}`, {
        method: "DELETE"
      });
      setClients(clients.filter(client => client.client_id !== id));
    } catch (err) {
      console.error(err.message);
    }
  };

  const getClient = async () => {
    try {
      const response = await fetch(`/clients/list/?q=${query}`);
      const jsonData = await response.json();
      setClients(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getClient();
  }, [query]);

  return (
    <>
      <div className="rechercheajout">
        <InputClient />
        <Search setQuery={(e) => setQuery(e)} />
      </div>

      <div className="table-responsive m-3 mytable mytable-56">
        <table className="table table-hover text-center">
          <thead className="table-secondary text-secondary mytableheader">
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Collaborateur</th>
              <th scope="col" className="text-nowrap">Code Client</th>
              <th scope="col">Raison</th>
              <th scope="col" className="text-nowrap">Situation Fiscale</th>
              <th scope="col" className="text-nowrap">Type Client</th>
              <th scope="col">Matricule</th>
              <th scope="col">Ville</th>
              <th scope="col">Rue </th>
              <th scope="col">Num</th>
              <th scope="col" className="text-nowrap">Code Postale</th>
              <th scope="col">Adresse</th>
              <th scope="col">Activité</th>
              <th scope="col">Téléphone</th>
              <th scope="col">Fax</th>
              <th scope="col">Email</th>
            </tr>
          </thead>
          <tbody>
            {clients.map(client => (
              <tr key={client.client_id} id={`client${client.client_id}`} onClick={() => {
                let e = document.getElementById(`client${client.client_id}`);
                if (e.className !== "table-secondary") {
                  if (row !== "") document.getElementById(row).className = "";
                  e.className = "table-secondary";
                  setRow(`client${client.client_id}`);
                  setDoc(client);
                  document.getElementById("clbtnm").className = "btn btn-light mx-3";
                  document.getElementById("clbtnr").className = "btn btn-dark";
                }
              }}>
                <td data-label="id">{client.client_id}</td>
                <td data-label="Collaborateur" className="text-nowrap">{client.collaborateur}</td>
                <td data-label="Code Client" className="text-nowrap">{client.code_client}</td>
                <td data-label="Raison" className="text-nowrap">{client.raison}</td>
                <td data-label="Situation Fiscale" className="text-nowrap">{client.situation_fiscale}</td>
                <td data-label="Type Client" className="text-nowrap">{client.type_client}</td>
                <td data-label="Matricule" className="text-nowrap">{client.matricule}</td>
                <td data-label="Ville" className="text-nowrap">{client.ville}</td>
                <td data-label="Rue" className="text-nowrap">{client.rue}</td>
                <td data-label="Num" className="text-nowrap">{client.num}</td>
                <td data-label="Code Postale" className="text-nowrap">{client.code_postale}</td>
                <td data-label="Adresse" className="text-nowrap">{client.adresse}</td>
                <td data-label="Activité" className="text-nowrap">{client.activite}</td>
                <td data-label="Téléphone" className="text-nowrap">{client.tel}</td>
                <td data-label="Fax" className="text-nowrap">{client.fax}</td>
                <td data-label="Email" className="text-nowrap">{client.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="modifsupp">
        <EditClient client={doc} />
        <Button variant="dark" id="clbtnr" className="disabled"
          onClick={() => deleteClient(doc.client_id)}>
          Supprimer
        </Button>
      </div>
    </>
  )
};

export default ListClient;