import React, { Fragment, useState } from "react";
import InputDemandeur from "./InputDemandeur";
import Button from 'react-bootstrap/Button';

const TabDeman =(props)=>{

    const [demandeurs, setDemandeur] = useState([]);
    const [IDDemand, setIDDemand] = useState("*");
    const [nom, setnom] = useState("");
    const [row, setRow] = useState("");

    const getdemandeur = async (id) => {
      if (id!==0){
      try {
        const response = await fetch(`/demandeurs/listtotal/${id}`);
        const jsonData = await response.json();
        setDemandeur(jsonData);
      } 
      catch (err) {
        console.error(err.message);
      }}
    };

    const deletedemandeur = async id => {
      setRow("");
      document.getElementById("clbtnrr").className="btn btn-dark disabled";
       try {
 
        await fetch(`/demandeurs/list/${id}`, {
          method: "DELETE"
        });
  
        setDemandeur(demandeurs.filter(demandeur => demandeur.demandeur_id !== id));
       /* {        console.log(nom);

          const rep=props.demandeur.replace(`${nom}`,"");
        props.changedemandeur(rep);}
        console.log(props.demandeur);*/
      } catch (err) {
        console.error(err.message);
      }
    };
 

return (
    <Fragment>
            <h1 className='titlee' >Liste des Demandeurs</h1>
            <InputDemandeur /*demandeur={props.demandeur}  
        changedemandeur={props.changedemandeur}*/ dossier_id={props.dossier_id} changedem={(e)=>getdemandeur(e)}/>

       <div className="table-responsive mytable-56dossier ">
        <table className="table table-hover text-center">
          <thead className="table-secondary text-secondary mytableheader">
          <tr>
            <th scope="col">Nom et Prénom</th>
            <th scope="col">CIN</th>
            <th scope="col">Adresse</th>
            <th scope="col">Adresse Designée</th>
            <th scope="col">Tel</th>
            <th scope="col">Fax</th>
          </tr>
        </thead>

        <tbody>
          {demandeurs.map(demandeur => (
            <tr key={demandeur.demandeur_id} id={`demandeur${demandeur.demandeur_id}`} onClick={()=>{ setIDDemand(demandeur.demandeur_id); 
              
              let e = document.getElementById(`demandeur${demandeur.demandeur_id}`);
                  if (e.className !== "table-secondary") {
                    if (row !== "") document.getElementById(row).className = "";
                    e.className = "table-secondary";
                    setRow(`demandeur${demandeur.demandeur_id}`);
                    document.getElementById("clbtnrr").className="btn btn-dark";
                    }}}
                  >
              <td>{demandeur.nom}</td>  
              <td>{demandeur.CIN}</td>     
              <td>{demandeur.adresse}</td>     
              <td>{demandeur.adresse_d}</td>     
              <td>{demandeur.tel}</td>     
              <td>{demandeur.fax}</td>     
            </tr>
          ))}
        </tbody>
      </table>
      </div>

      <div className="modifsupp">
      <Button variant="dark" id="clbtnrr" className="disabled"  onClick={() => deletedemandeur(IDDemand)}>
      Supprimer
        </Button>
 </div>
      
    </Fragment>
)
     
}

export default TabDeman;