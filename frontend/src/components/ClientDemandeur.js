import React, { Fragment, useState,useEffect } from "react";
import TabDeman from "./TabDeman";
import Search from "./Search";

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
        
        <section className="container client" id="client">

            
            <div className="rechercheajoutcreation">
            <Search setQuery={(e) => setQuery(e)} />

            <div className="mycontainercreation">
                <select className="myselectcreation"
                   value={props.client_id} onChange={(e)=>{specificClient(e.target.value)}}>
                    <option></option>
                    {clients.map(client => (
                        <option key={client.client_id}  value={client.client_id}>{client.raison} {client.code_client}</option>
                ))}
                </select>
            </div>
            </div>

            <div className="formclient">
                  <div className="input-group mb-4 ">
                    <span className="input-group-text">Raison :</span>
                    <input type="text" className="form-control" 
                    disabled={true}
                        placeholder={client.raison}
                        defaultValue={client.raison}
                         />
                  </div>
              
            
                   <div className="input-group  mb-4">
                    <span className="input-group-text">Matricule/CIN :</span>
                    <input type="text" className="form-control" 
                    disabled={true}
                    placeholder={client.matricule}
                        defaultValue={client.matricule}
                         />
                  </div>
 
                   <div className="input-group  mb-4">
                    <span className="input-group-text">Téléphone :</span>
                    <input type="text" className="form-control" 
                        disabled={true}
                        placeholder={client.tel}
                        defaultValue={client.tel}
                         />
               </div>

       
          

                   <div className="input-group  mb-4">
                    <span className="input-group-text">Activité :</span>
                    <input type="text" className="form-control" 
                        placeholder={client.activite}
                        disabled={true}
                        defaultValue={client.activite}
                         />
               </div>
              

              
                 <div className="input-group   mb-4">
                <span className="input-group-text">Situation Fiscale :</span>
                <div className="mytext    ">
                       
                        <input scope="col" className="myradio ms-1 me-1" type="radio" name={`situationfiscale${client.client_id}`}
                          id={`situation1fiscale${client.client_id}`} value="Non Assujetie" checked={client.situation_fiscale=="Non Assujetie"}
                           />
                          Non Assujetie

                          <input className="myradio ms-1 me-1" type="radio" name={`situationfiscale${client.client_id}`}
                          id={`situation2fiscale${client.client_id}`} value="Assujetie" checked={client.situation_fiscale=="Assujetie"}
                           />
                          Assujetie

                          <input className="myradio ms-1 me-1" type="radio" name={`situationfiscale${client.client_id}`}
                          id={`situation3fiscale${client.client_id}`} value="Exonoré" checked={client.situation_fiscale=="Exonoré"}
                           />
                          Exonoré
                       </div>
                </div>
 

                
                 <div className="input-group   mb-4">
                <span className="input-group-text">Type Client :</span>
                <div className="mytext ">

                <input className="myradio ms-3 me-1" type="radio" name={`typeclient${client.client_id}`}
                          id={`type1client${client.client_id}`} checked={client.type_client=="Personne Physique"}
                             />
                          Personne Physique
                 
                        <input className="myradio ms-3 me-1" type="radio" name={`typeclient${client.client_id}`}
                          id={`type2client${client.client_id}`} checked={client.type_client=="Personne Morale"}
                           />
                          Personne Morale
                       </div>
           
  
               </div>
               </div>

      <TabDeman
demandeur={props.demandeur} dossier_id={props.idd}             
changedemandeur={props.changedemandeur} />


    </section>


    )

};

export default ClientDemandeur;


