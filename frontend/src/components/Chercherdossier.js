import React, { Fragment, useState,useEffect } from "react";

const ChercherDossier = (props) => {
    const [query, setQuery] = useState("");
    const [queryy, setQueryy] = useState("");
    const [dossiers, setDossiers] = useState([]);
    const [dossier_id, setDossier_id] = useState(0);


  const getDossiers = async (query,queryy) => {
    try {
      const response = await fetch(`/dossierss/list/recherche/?q=${query}&${queryy}`);
      const jsonData = await response.json();
      setDossiers(jsonData);
     } catch (err) {
      console.error(err.message);
    }
  };

  const specificDossier = async (id) => {
    try {
    const response = await fetch(`/dossierss/list/${id}`);
    const jsonData = await response.json();
    props.changerdossier(jsonData);
    } catch (err) {
    console.error(err.message);
    }
} 

  useEffect(() => {
    getDossiers(query,queryy);
  }, [query,queryy]);

  return (

    <Fragment>
        
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModall">
  Chercher un dossier
</button>

<div class="modal fade" id="exampleModall" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">  Chercher un dossier</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>


      <div class="modal-body">
 
      <div className="container mt-5">
        <label class="col-sm-2 col-form-label col-form-label-sm">Code</label>
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
                           />
                          Code dossier
                      </label>
                  </div>
                  <div className="form-check">
                      <label className="form-check-label">
                          <input className="form-check-input" type="radio" name="filtrer"
                           value="client" 
                           />
                          Nom client
                      </label>
                  </div>
                  <div className="form-check">
                      <label className="form-check-label">
                          <input className="form-check-input" type="radio" name="filtrer"
                          value="mission" 
                           />
                          Mission
                      </label>
                  </div>
                  <div className="form-check">
                      <label className="form-check-label">
                          <input className="form-check-input" type="radio" name="filtrer"
                          value="adversaire" 
                           />
                          Adversaire
                      </label>
                  </div>
                  <div className="form-check">
                      <label className="form-check-label">
                          <input className="form-check-input" type="radio" name="filtrer"
                          value="numaff" 
                           />
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
              <td>{dossier.dossier_id}</td>
              <td>{dossier.nom}</td>
              <td>{dossier.mission}</td>
              <td>{dossier.adversaire}</td>
              <td>{dossier.numaff}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
      </div>
 
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fermer</button>
        <button type="button" class="btn btn-primary" onClick={specificDossier(dossier_id)}>Choisir</button>
      </div>
    </div>
  </div>
</div>
    </Fragment>
  );
};

export default ChercherDossier;