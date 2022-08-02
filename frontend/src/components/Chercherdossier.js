import React, { Fragment, useState,useEffect } from "react";
import Button from 'react-bootstrap/Button';
import { GoPlus } from "react-icons/go";
import Search from "./Search";
 

const ChercherDossier = (props) => {
    const [query, setQuery] = useState("");
    const [queryy, setQueryy] = useState("");
    const [dossiers, setDossiers] = useState([]);
    const [dossier_id, setDossier_id] = useState(0);
    const [row, setRow] = useState("");


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
        const response = await fetch(`/dossierss/list/recherche/one/?q=${id}`);
        const jsonData = await response.json();

        props.changerdossier(jsonData[0]);
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
        <div className="rechercheajout">
   
      <button type="button" className="ajouter ajouterr" data-bs-toggle="modal" data-bs-target="#exampleModall">
      <GoPlus color="#00adb5" fontSize="1.5em" />
</button>
</div>


<div className="modal fade" id="exampleModall" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">  Chercher un dossier</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>


      <div className="modal-body">
   
      <div className="rechercheajoutdossier">
            <Search setQuery={(e) => setQuery(e)} /></div>
     
        
 
            <div className="input-group mb-4">
                <span className="input-group-text">Filter :</span>
                <div className="mytext ">

                <input className="myradio ms-3 me-1" type="radio"name="filtrer"
                           value="code" 
                           onChange={e => {
                            if(e.target.checked) setQueryy(e.target.value);
                           }} />
                          Code dossier
                 
                        <input className="myradio ms-3 me-1" type="radio" name="filtrer"
                           value="client" 
                           onChange={e => {
                            if(e.target.checked) setQueryy(e.target.value);
                           }} />
                          Nom client

                          <input className="myradio ms-3 me-1" type="radio" name="filtrer"
                          value="mission" 
                          onChange={e => {
                            if(e.target.checked) setQueryy(e.target.value);
                          }} />
                          Mission

                          <input className="myradio ms-3 me-1" type="radio" name="filtrer"
                          value="adversaire" 
                          onChange={e => {
                            if(e.target.checked) setQueryy(e.target.value);
                          }} />
                          Adversaire

                          <input className="myradio ms-3 me-1" type="radio" name="filtrer"
                          value="numaff" 
                          onChange={e => {
                            if(e.target.checked) setQueryy(e.target.value);
                          }} />
                            Numéro affaire
                       </div>
           
    
                       </div>    


              <div className="table-responsive mytable-50 ">
        <table className="table table-hover text-center">
          <thead className="table-secondary text-secondary mytableheader">
          <tr>
            <th scope="col">Code dossier</th>
            <th scope="col">Nom client</th>
            <th scope="col">Mission</th>
            <th scope="col">Adversaire</th>
            <th scope="col">Numéro affaire</th>
          </tr>
        </thead>
        <tbody>
          {dossiers.map(dossier => (
            <tr key={dossier.dossier_id}  id={`dossier${dossier.dossier_id}`} onClick={()=> {setDossier_id(dossier.dossier_id);
              let e = document.getElementById(`dossier${dossier.dossier_id}`);
              if (e.className !== "table-secondary") {
                if (row !== "") document.getElementById(row).className = "";
                e.className = "table-secondary";
                setRow(`dossier${dossier.dossier_id}`);
          
                 }}}  >
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
 
      <div className="modal-footer">
      <Button variant="light" data-bs-dismiss="modal" id="valider"  
      onClick={()=>specificDossier(dossier_id)}>Valider</Button>
      <Button variant="dark" data-bs-dismiss="modal" >Fermer</Button>
       
      </div>

      </div>
    </div>
  </div>
</div>
    </Fragment>
  );
};

export default ChercherDossier;