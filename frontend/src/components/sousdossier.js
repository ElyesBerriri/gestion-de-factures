import React, { Fragment, useState,useEffect } from "react";


const Sousdossier =(props)=>{
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
        <section id="sousdossier">
 <div className="container mt-5">
        <label class="col-sm-2 col-form-label col-form-label-sm">Code dossier</label>
            <input
            className="search "
            placeholder="Recherche .."
            value={query}
            onChange={(e) => setQuery(e.target.value.toLowerCase())}
            />

            <select name="select_box" class="form-select" id="select_box" value={props.client_id} onChange={(e)=>{specificClient(e.target.value)}}>
                <option value='0' selected></option>
                {clients.map(client => (
                        <option key={client.client_id}  value={client.client_id}>{client.raison} {client.code_client}</option>
                ))}
            </select>

            <div className="row">
                  <div className="input-group mb-3">
                    <span class="input-group-text">Mission :</span>
                    <input type="text" className="form-control" 
                    disabled="true"
                        placeholder={client.raison}
                        defaultValue={client.raison}
                         />
                  </div>
              </div>
            
              <div className="row">
                  <div className="input-group mb-3">
                    <span class="input-group-text">Emplacement :</span>
                    <input type="text" className="form-control" 
                    disabled="true"
                        placeholder={client.matricule}
                        defaultValue={client.matricule}
                         />
                  </div>
              </div>

              <div className="row">
                  <div className="input-group mb-3">
                    <span class="input-group-text">Numéro affaire :</span>
                    <input type="text" className="form-control" 
                        disabled="true"
                        placeholder={client.tel}
                        defaultValue={client.tel}
                         />
                  </div>
              </div>
              <div className="row">
                  <div className="input-group mb-3">
                    <span class="input-group-text">Observation :</span>
                    <input type="text" className="form-control" 
                        placeholder={client.activite}
                        disabled="true"
                        defaultValue={client.activite}
                         />
                  </div>
              </div>
              
              </div>



     </section>
    )

};

export default Sousdossier;


