import React, { useState,useEffect } from "react";

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
            props.changecollab(jsonData.raison)
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
        <section id="collaborateur">
        <div className="container mt-5">
        <label class="col-sm-2 col-form-label col-form-label-sm">Nom et Prenom</label>
            <input
            className="search"
            placeholder="Recherche .."
            value={query}
            onChange={(e) => setQuery(e.target.value.toLowerCase())} />

            <select name="select_box" class="form-select" id="select_box" value={props.collab_id} onChange={(e)=>{specificCollab(e.target.value)}}>
                <option value='0' selected></option>
                {collabs.map(collab => (
                    <option key={collab.collab_id}  value={collab.collab_id}>{collab.nom}</option>
                ))}
            </select>

            <div className="row">
                <div className="input-group mb-3">
                    <span class="input-group-text">Nom et Prenom : </span>
                    <input type="text" className="form-control" 
                    disabled placeholder={collab.nom} defaultValue={collab.nom} />
                </div>
            </div>
            
              <div className="row">
                  <div className="input-group mb-3">
                    <span class="input-group-text">CIN :</span>
                    <input type="text" className="form-control" 
                    disabled placeholder={collab.cin} defaultValue={collab.cin} />
                  </div>
             </div>

             <div className="row">
                  <div className="input-group mb-3">
                    <span class="input-group-text">Ville :</span>
                    <input type="text" className="form-control" 
                    disabled placeholder={collab.ville} defaultValue={collab.ville} />
                  </div>
             </div>

             <div className="row">
                  <div className="input-group mb-3">
                    <span class="input-group-text">Rue :</span>
                    <input type="text" className="form-control" 
                    disabled placeholder={collab.rue} defaultValue={collab.rue} />
                  </div>
             </div>

             <div className="row">
                  <div className="input-group mb-3">
                    <span class="input-group-text">Numéro :</span>
                    <input type="text" className="form-control" 
                    disabled placeholder={collab.num} defaultValue={collab.num} />
                  </div>
             </div>

             <div className="row">
                  <div className="input-group mb-3">
                    <span class="input-group-text">Code Postale :</span>
                    <input type="text" className="form-control" 
                    disabled placeholder={collab.codepostale} defaultValue={collab.codepostale} />
                  </div>
             </div>

             <div className="row">
                  <div className="input-group mb-3">
                    <span class="input-group-text">Activité Contribuale :</span>
                    <input type="text" className="form-control" 
                        disabled placeholder={collab.activite} defaultValue={collab.activite} />
                  </div>
              </div>
              
              <div className="row">
                  <div className="input-group mb-3">
                    <span class="input-group-text">Tel :</span>
                    <input type="text" className="form-control" 
                        disabled placeholder={collab.tel} defaultValue={collab.tel} />
                  </div>
              </div>
      </div>
    </section>
    )
};

export default Collaborateur;


