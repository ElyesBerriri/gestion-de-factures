import React, { useState,useEffect } from "react";
import Search from "./Search";

const Collaborateur =(props)=>{
    const [collabs, setCollabs] = useState([]);
    const [query, setQuery] = useState("");
    const [collab, setCollab] = useState({});
     

    const getCollab = async (query) => {
        try {
          const response = await fetch(`/collaborateurs/list2/?q=${query}`);
          const jsonData = await response.json();
          setCollabs(jsonData);
        } catch (err) {
          console.error(err.message);
        }
      };

      const specificCollab = async (id) => {
        if(id!=0){
            try {
            props.changecollab_id(id);
            const response = await fetch(`/collaborateurs/list/${id}`);
            const jsonData = await response.json();
            setCollab(jsonData);
            props.changecollab(jsonData.raison);
            } catch (err) {
            console.error(err.message);
            }
        } else {
            props.changecollab_id(0);
            setCollab({});
            props.changecollab("!");
        }
      };
    
      
      useEffect(() => {
        getCollab(query);
      }, [query]);    
 
    return(
        <section className='container client' id="collaborateur">
         
         <h1 className='titlee' >Collaborateur</h1>
 
            <div className="rechercheajoutcreation">
            <Search setQuery={(e) => setQuery(e)} />

            <div className="mycontainercreation">
                <select className="myselectcreation"
                   value={props.collab_id} onChange={(e)=>{specificCollab(e.target.value)}}>
                    <option value='0' selected>Collaborateur</option>
                    {collabs.map(collab => (
                    <option key={collab.collab_id}  value={collab.collab_id}>{collab.nom}</option>
                ))}
                </select>
            </div>
            </div>

            <div className="formclient ">

           
                <div className="input-group mb-3">
                    <span className="input-group-text">Nom et Prénom : </span>
                    <input type="text" className="form-control" 
                    disabled placeholder={collab.nom} defaultValue={collab.nom} />
                </div>
          
            
           
                  <div className="input-group mb-4">
                    <span className="input-group-text">CIN :</span>
                    <input type="text" className="form-control" 
                    disabled placeholder={collab.cin} defaultValue={collab.cin} />
                  </div>
              

              
                  <div className="input-group mb-4">
                    <span className="input-group-text">Ville :</span>
                    <input type="text" className="form-control" 
                    disabled placeholder={collab.ville} defaultValue={collab.ville} />
                  </div>
            

              
                  <div className="input-group mb-4">
                    <span className="input-group-text">Rue :</span>
                    <input type="text" className="form-control" 
                    disabled placeholder={collab.rue} defaultValue={collab.rue} />
                  </div>
            
 
                  <div className="input-group mb-4">
                    <span className="input-group-text">Numéro :</span>
                    <input type="text" className="form-control" 
                    disabled placeholder={collab.num} defaultValue={collab.num} />
                  </div>
             

             
                  <div className="input-group mb-4">
                    <span className="input-group-text">Code Postale :</span>
                    <input type="text" className="form-control" 
                    disabled placeholder={collab.codepostale} defaultValue={collab.codepostale} />
                  </div>
            

             
                  <div className="input-group mb-4">
                    <span className="input-group-text">Activité Contribuale :</span>
                    <input type="text" className="form-control" 
                        disabled placeholder={collab.activite} defaultValue={collab.activite} />
                  </div>
               
              
               
                  <div className="input-group mb-4">
                    <span className="input-group-text">Téléphone :</span>
                    <input type="text" className="form-control" 
                        disabled placeholder={collab.tel} defaultValue={collab.tel} />
                  </div>
             


              <div className="input-group   mb-4">
                <span className="input-group-text">Mode Réglement :</span>
                <div className="mytext ">

                <input className="myradio ms-3 me-1" type="radio"  name="modeReg"
                            value="Mensuel"
                            onChange={e => {
                              if(e.target.checked)
                                props.changemode_r(e.target.value);
                          }} />
                          Mensuel
                 
                        <input className="myradio ms-3 me-1" type="radio"  name="modeReg"
                            value="Sur Dossier"
                            onChange={e => {
                              if(e.target.checked)
                                props.changemode_r(e.target.value);
                            }} />
                          Sur Dossier 
                       </div>
               </div>
             

            
                  <div className="input-group mb-4">
                    <span className="input-group-text">Part Collaborateur :</span>
                    <input type="number" className="form-control"
                      defaultValue={props.part_c}
                      onChange={e => {
                        if(e.target.value!="")
                          props.changepart_c(e.target.value);
                        else
                          props.changepart_c(0);
                      }} />
                  </div>
               
              <div className="input-group   mb-4">
                <span className="input-group-text">Type Réglement :</span>
                <div className="mytext ">

                <input className="myradio ms-3 me-1" type="radio" name="typeReg"
                            value="Pourcentage"
                            onChange={e => {
                              if(e.target.checked)
                                props.changetype_r(e.target.value);
                          }} />
                          Pourcentage
                 
                        <input className="myradio ms-3 me-1" type="radio" name="typeReg"
                            value="Forfait"
                            onChange={e => {
                              if(e.target.checked)
                                props.changetype_r(e.target.value);
                            }} />
                          Forfait 
                       </div>
               </div>

                
               
      </div>
    </section>
    )
};

export default Collaborateur;


