import React, { Fragment, useState,useEffect } from "react";

const ChercherDossier = (props) => {
    const [query, setQuery] = useState("");
    const [queryy, setQueryy] = useState("");
    const [dossiers, setDossiers] = useState([]);
    const [dossier_id, setDossier_id] = useState(0);


  const getDossiers = async (query,queryy) => {
    if(queryy!==""){
      try {
        const response = await fetch(`/dossierss/list/recherche/?q=${query}&p=${queryy}`);
        const jsonData = await response.json();
        setDossiers(jsonData);
       } catch (err) {
        console.error(err.message);
      }
    } else {
      try {
        const response = await fetch(`/dossierss/list/recherche`);
        const jsonData = await response.json();
        setDossiers(jsonData);
       } catch (err) {
        console.error(err.message);
      }
    }
  };

  const specificDossier = async (id) => {
    if(id!=0){
      try {
        const response = await fetch(`/dossierss/list/recherche/${id}`);
        const jsonData = await response.json();
        props.changerdossier(jsonData);
        } catch (err) {
        console.error(err.message);
        }
    }
} 

  useEffect(() => {
    getDossiers(query,queryy);
  }, [query,queryy]);

  return (

    <Fragment>
        
        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModall">
  Chercher un dossier
</button>

<div className="modal fade" id="exampleModall" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">  Chercher un dossier</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>


      <div className="modal-body">
 
      <div className="container mt-5">
        <label className="col-sm-2 col-form-label col-form-label-sm">Code</label>
            <input
            className="search "
            placeholder="Recherche .."
            value={query}
            onChange={(e) => setQuery(e.target.value.toLowerCase())}
            />

<div className="row mb-3">
                  <label className="col-form-label">Filter :</label>
                  <div className="form-check">
                      <label className="form-check-label" >
                          <input className="form-check-input" type="radio" name="filtrer"
                           value="code" 
                           onChange={e => {
                            if(e.target.checked) setQueryy(e.target.value);
                           }} />
                          Code dossier
                      </label>
                  </div>
                  <div className="form-check">
                      <label className="form-check-label">
                          <input className="form-check-input" type="radio" name="filtrer"
                           value="client" 
                           onChange={e => {
                            if(e.target.checked) setQueryy(e.target.value);
                           }} />
                          Nom client
                      </label>
                  </div>
                  <div className="form-check">
                      <label className="form-check-label">
                          <input className="form-check-input" type="radio" name="filtrer"
                          value="mission" 
                          onChange={e => {
                            if(e.target.checked) setQueryy(e.target.value);
                          }} />
                          Mission
                      </label>
                  </div>
                  <div className="form-check">
                      <label className="form-check-label">
                          <input className="form-check-input" type="radio" name="filtrer"
                          value="adversaire" 
                          onChange={e => {
                            if(e.target.checked) setQueryy(e.target.value);
                          }} />
                          Adversaire
                      </label>
                  </div>
                  <div className="form-check">
                      <label className="form-check-label">
                          <input className="form-check-input" type="radio" name="filtrer"
                          value="numaff" 
                          onChange={e => {
                            if(e.target.checked) setQueryy(e.target.value);
                          }} />
                            Numéro affaire
                          </label>
                  </div>
              </div>

              {" "}
      <table className="table table table-hover mt-5 text-center">
        <thead  className="table-dark">
          <tr>
            <th>Code dossier</th>
            <th>Nom client</th>
            <th>Mission</th>
            <th>Adversaire</th>
            <th>Numéro affaire</th>
          </tr>
        </thead>
        <tbody>
          {dossiers.map(dossier => (
            <tr key={dossier.dossier_id} onClick={()=> setDossier_id(dossier.dossier_id)}>
              <td>{dossier.code}</td>
              <td>{dossier.client}</td>
              <td>{dossier.mission}</td>
              <td>{dossier.adversaire}</td>
              <td>{dossier.numaff}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
      </div>
 
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Fermer</button>
        <button type="button" className="btn btn-primary" onClick={()=>specificDossier(dossier_id)}>Choisir</button>
      </div>
    </div>
  </div>
</div>
    </Fragment>
  );
};

export default ChercherDossier;