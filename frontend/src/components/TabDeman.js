import React, { Fragment, useState } from "react";
import InputDemandeur from "./InputDemandeur";

const TabDeman =()=>{

    const [demandeur, setDemandeur] = useState([]);
    const [IDDemand, setIDDemand] = useState([]);

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
          {demandeur.map(demandeur => (
            <tr key={demandeur.demandeur_id}>
              <td onClick={()=> setIDDemand(demandeur.demandeur_id)}>{demandeur.nom}</td>
              
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <button
            className="btn btn-danger">
                    Supprimer demandeur
        </button>
            <InputDemandeur/>

                </div>
    </Fragment>
)
     
}

export default TabDeman;