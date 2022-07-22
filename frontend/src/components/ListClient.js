import React, { useState ,useEffect} from "react";
import { Link } from "react-router-dom";
import EditClient from "./EditClient";

const ListClient = () => {
    const [clients, setClients] = useState([]);
    const [query, setQuery] = useState("");

    const deleteClient = async id => {
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
          <table className="table table-hover mt-2 text-center">
            <thead  className="table-dark">
              <tr className="bg-primary">
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
                <th scope="col">Modifier</th>
                <th scope="col">Supprimer</th>     
              </tr>
            </thead>
            <tbody>
              {clients.map(client => (
                <tr key={client.client_id}>
                  <td>{client.client_id}</td>
                  <td>{client.collaborateur}</td>
                  <td>{client.code_client}</td>
                  <td>{client.raison}</td>
                  <td>{client.situation_fiscale}</td>
                  <td>{client.type_client}</td>
                  <td>{client.matricule}</td>
                  <td>{client.ville}</td>
                  <td>{client.rue}</td>
                  <td>{client.num}</td>
                  <td>{client.code_postale}</td>
                  <td>{client.adresse}</td>
                  <td>{client.activite}</td>
                  <td>{client.tel}</td>
                  <td>{client.fax}</td>
                  <td>{client.email}</td>
                  <td>
                    <EditClient client={client} />
                  </td>
                  <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => deleteClient(client.client_id)}>
                      Supprimer
                  </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table> 
      </>
    ) 
};

export default ListClient;