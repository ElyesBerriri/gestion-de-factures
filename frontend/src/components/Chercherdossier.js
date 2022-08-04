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

<div className="modal fade" id="exampleModall" data-bs-backdrop="static">
        <div className="modal-dialog modal-dialog-scrollable" >
          <div className="modal-content">



      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">  Chercher un dossier</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>


      <div className="modal-body">
   
      <div className="rechercheajoutsousdossier">
            <Search setQuery={(e) => setQuery(e)} /> 
     
        
            <div className="mycontainercreation">
              
                <select className="myselectcreation"
                    onChange={e =>{setQueryy(e.target.value);}  
                     } >
                    <option  >Filter</option>
                    <option value="code">code</option> 
                    <option value="client">client</option>
                     <option value="mission">mission</option> 
                     <option value="adversaire" >adversaire</option>
                      <option value="numaff" >numaff</option>
                </select>
            </div>
            </div>
            </div>
    

              <div className="table-responsive m-3 mytable-50 ">
        <table className="table table-hover text-center">
          <thead className="table-secondary text-secondary mytableheader">
          <tr>
            <th scope="col">Code_dossier</th>
            <th scope="col">Nom_client</th>
            <th scope="col">Mission</th>
            <th scope="col">Adversaire</th>
            <th scope="col">Numéro_affaire</th>
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

    </Fragment>
  );
};

export default ChercherDossier;