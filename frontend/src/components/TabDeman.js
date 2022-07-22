import React, { Fragment, useState } from "react";
import InputDemandeur from "./InputDemandeur";

const TabDeman =(props)=>{

    const [demandeurs, setDemandeur] = useState([]);
    const [IDDemand, setIDDemand] = useState("*");
    const [nom, setnom] = useState("");

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
       {" "}
      <table className="table table table-hover mt-5 text-center">
        <thead  className="table-dark">
          <tr>
            <th>Nom et Prénom</th>
            <th>CIN</th>
            <th>Adresse</th>
            <th>Adresse Designée</th>
            <th>Tel</th>
            <th>Fax</th>
          </tr>
        </thead>
        <tbody>
          {demandeurs.map(demandeur => (
            <tr key={demandeur.demandeur_id} onClick={()=> setIDDemand(demandeur.demandeur_id)}>
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
      <div>
        <button
            className="btn btn-danger"
            onClick={() => deletedemandeur(IDDemand)}>
            
                    Supprimer demandeur
        </button>
            <InputDemandeur /*demandeur={props.demandeur}  
        changedemandeur={props.changedemandeur}*/ dossier_id={props.dossier_id} changedem={(e)=>getdemandeur(e)}/>

                </div>
    </Fragment>
)
     
}

export default TabDeman;