import React, { useState ,useEffect} from "react";
import { Link } from "react-router-dom";
import EditClient from "./EditClient";

const ListClient = () => {
    const [clients, setClients] = useState([]);
    const [query, setQuery] = useState("");
    const [row,setRow] = useState("");
    const [doc,setDoc] = useState({
      "collaborateur":"",
      "code_client":"",
      "raison":"",
      "situation_fiscale":"",
      "type_client":"",
      "matricule":"",
      "ville":"",
      "rue":"",
      "num":0,
      "code_postale":0,
      "adresse":"",
      "activite":"",
      "tel":"",
      "fax":"",
      "email":""
    });

    const deleteClient = async id => {
      setRow("");
      setDoc({});
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

    return(
      <>
        {" "}
          <input
            className="search "
            placeholder="Recherche .."
            onChange={(e) => setQuery(e.target.value.toLowerCase())} />
          <Link to={"/InputClient"} >
            <button className="btn btn-success">Ajouter un client</button>
          </Link>
          <EditClient client={doc} />
          <button
                    className="btn btn-danger"
                    onClick={() => {(row!=="") ? deleteClient(doc.client_id): alert("Tu dois choisir un client");}}>
                      Supprimer
          </button>
          <div className="table-responsive m-3" style={{height:'70vh'}}>
          <table className="table table-hover text-center">
            <thead  className="table-secondary text-secondary table-header" style={{position: 'sticky',top: '0'}}>
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
                <tr key={client.client_id} id={`client${client.client_id}`} onClick={()=>{
                  let e = document.getElementById(`client${client.client_id}`);
                  if(e.className !== "table-primary"){
                      if(row!=="") document.getElementById(row).className = "";
                      e.className = "table-primary";
                      setRow(`client${client.client_id}`);
                      setDoc(client);
                  }
              }}>
                  <td data-label="id">{client.client_id}</td>
                  <td data-label="Collaborateur">{client.collaborateur}</td>
                  <td data-label="Code Client">{client.code_client}</td>
                  <td data-label="Raison">{client.raison}</td>
                  <td data-label="Situation Fiscale">{client.situation_fiscale}</td>
                  <td data-label="Type Client">{client.type_client}</td>
                  <td data-label="Matricule">{client.matricule}</td>
                  <td data-label="Ville">{client.ville}</td>
                  <td data-label="Rue">{client.rue}</td>
                  <td data-label="Num">{client.num}</td>
                  <td data-label="Code Postale">{client.code_postale}</td>
                  <td data-label="Adresse">{client.adresse}</td>
                  <td data-label="Activité">{client.activite}</td>
                  <td data-label="Téléphone">{client.tel}</td>
                  <td data-label="Fax">{client.fax}</td>
                  <td data-label="Email">{client.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
          </div> 
      </>
    ) 
};

export default ListClient;