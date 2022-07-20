import React, { Fragment, useState,useEffect } from "react";
import TabDeman from "./TabDeman";

const ClientDemandeur =(props)=>{
    const [clients, setClients] = useState([]);
    const [query, setQuery] = useState("");
    const [client, setClient] = useState({});
     

    const getClient = async (query) => {
        try {
          const response = await fetch(`/clients/list/creation/?q=${query}`);
          const jsonData = await response.json();
          setClients(jsonData);
          console.log(clients);
        } catch (err) {
          console.error(err.message);
        }
      };

      const specificClient = async (id) => {
        if(id!=0){
            try {
            props.changeclient_id(id);
            const response = await fetch(`/clients/list/${id}`);
            const jsonData = await response.json();
            setClient(jsonData);
            props.changeclient(jsonData.raison)
            } catch (err) {
            console.error(err.message);
            }
        } else {
            props.changeclient_id(0);
            setClient({});
            props.changeclient("!");
        }
      };
    
      
      useEffect(() => {
        getClient(query);
      }, [query]);    
 
    return(
        <section id="client">
        <div className="container mt-5">
        <label className="col-sm-2 col-form-label col-form-label-sm">Code</label>
            <input
            className="search "
            placeholder="Recherche .."
            value={query}
            onChange={(e) => setQuery(e.target.value.toLowerCase())}
            />

            <select name="select_box" className="form-select" id="select_box"  value={props.client_id} onChange={(e)=>{specificClient(e.target.value)}}>
                <option ></option>
                {clients.map(client => (
                        <option key={client.client_id}  value={client.client_id}>{client.raison} {client.code_client}</option>
                ))}
            </select>

            <div className="row">
                  <div className="input-group mb-3">
                    <span className="input-group-text">Raison :</span>
                    <input type="text" className="form-control" 
                    disabled={true}
                        placeholder={client.raison}
                        defaultValue={client.raison}
                         />
                  </div>
              </div>
            
              <div className="row">
                  <div className="input-group mb-3">
                    <span className="input-group-text">Matricule/CIN :</span>
                    <input type="text" className="form-control" 
                    disabled={true}
                    placeholder={client.matricule}
                        defaultValue={client.matricule}
                         />
                  </div>
              </div>

              <div className="row">
                  <div className="input-group mb-3">
                    <span className="input-group-text">Téléphone :</span>
                    <input type="text" className="form-control" 
                        disabled={true}
                        placeholder={client.tel}
                        defaultValue={client.tel}
                         />
                  </div>
              </div>
              <div className="row">
                  <div className="input-group mb-3">
                    <span className="input-group-text">Activité :</span>
                    <input type="text" className="form-control" 
                        placeholder={client.activite}
                        disabled={true}
                        defaultValue={client.activite}
                         />
                  </div>
              </div>
              
              <div className="row mb-3">
                  <label className="col-form-label">Situation Fiscale</label>
                  <div className="form-check">
                      <label className="form-check-label" >
                          <input className="form-check-input" type="radio" name={`situationfiscale${client.client_id}`}
                          id={`situation1fiscale${client.client_id}`} value="Non Assujetie" checked={client.situation_fiscale=="Non Assujetie"}
                           />
                          Non Assujetie
                      </label>
                  </div>
                  <div className="form-check">
                      <label className="form-check-label">
                          <input className="form-check-input" type="radio" name={`situationfiscale${client.client_id}`}
                          id={`situation2fiscale${client.client_id}`} value="Assujetie" checked={client.situation_fiscale=="Assujetie"}
                           />
                          Assujetie
                      </label>
                  </div>
                  <div className="form-check">
                      <label className="form-check-label">
                          <input className="form-check-input" type="radio" name={`situationfiscale${client.client_id}`}
                          id={`situation3fiscale${client.client_id}`} value="Exonoré" checked={client.situation_fiscale=="Exonoré"}
                           />
                          Exonoré
                      </label>
                  </div>
              </div>

              <div className="row mb-3">
                  <label className="col-form-label">Type Client</label>
                  <div className="form-check">
                      <label className="form-check-label">
                          <input className="form-check-input" type="radio" name={`typeclient${client.client_id}`}
                          id={`type1client${client.client_id}`} checked={client.type_client=="Personne Physique"}
                             />
                          Personne Physique
                      </label>
                  </div>
                  <div className="form-check">
                      <label className="form-check-label">
                          <input className="form-check-input" type="radio" name={`typeclient${client.client_id}`}
                          id={`type2client${client.client_id}`} checked={client.type_client=="Personne Morale"}
                           />
                          Personne Morale
                      </label>
                  </div>
              </div>
      </div>


<TabDeman/>
    </section>
    )

};

export default ClientDemandeur;


