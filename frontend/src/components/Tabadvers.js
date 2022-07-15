import React, { Fragment, useState } from "react";
 import InputAdversaire from "./InputAdversaire";

const TabAdvers =()=>{

    const [adversaire, setAdversaire] = useState([]);
    const [IDadversaire, setIDadversaire] = useState("");

return (
    <Fragment>
       {" "}
      <table className="table table table-hover mt-5 text-center">
        <thead  className="table-dark">
          <tr>
            <th>Nom et Prénom</th>
            <th>Registre</th>
            <th>Adresse</th>
            <th>Avocat</th>
            <th>Adresse Avocat</th>
          </tr>
        </thead>
        <tbody>
          {adversaire.map(adversaire => (
            <tr key={adversaire.adversaire_id}>
              <td onClick={()=> setIDadversaire(adversaire.adversaire_id)}>{adversaire.nom}</td>
              
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <button
            className="btn btn-danger">
                    Supprimer adversaire
        </button>

        <InputAdversaire/>

                </div>
    </Fragment>
)
     
}

export default TabAdvers;