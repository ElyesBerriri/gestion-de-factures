import React, { Fragment, useState,useEffect } from "react";
 import InputAdversaire from "./InputAdversaire";

const TabAdvers =(props)=>{

    const [adversaire, setadversaire] = useState([]);
    const [adv, setadv] = useState("--");
    const [nom, setnom] = useState("");
    const [registre, setregistre] = useState("");
    const [adresse, setadresse] = useState("");
    const [adresse_d, setadresse_d] = useState("");
    const [avocat, setavocat] = useState("");
    const [adresse_a, setadresse_a] = useState("");
    const [idadversaire, setIDadversaire] = useState("");

    const getadversaire = async (id,a) => {
      if (id!==0){
      try {
        const response = await fetch(`/adversaire/listtotal/${id}`);
        const jsonData = await response.json();
        setadversaire(jsonData);
        setadv(a);
        props.changeadversaires(jsonData);
      } 
      catch (err) {
        console.error(err.message);
      }}
    };

    const deleteadversaire = async id => {
      try {
        await fetch(`/adversaire/list/${id}`, {
          method: "DELETE"
        });
        setadversaire(adversaire.filter(adversaire => adversaire.adversaire_id !== id));
        props.changeadversaires(adversaire.filter(adversaire => adversaire.adversaire_id !== id));
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
            <th>ID dossier</th>
            <th>Nom et Prénom</th>
            <th>Registre</th>
            <th>Adresse</th>
            <th>Adresse designée</th>
            <th>Avocat</th>
            <th>Adresse Avocat</th>
          </tr>
        </thead>
        <tbody>
          {adversaire.map(adversaire => (
            <tr key={adversaire.adversaire_id} onClick={()=> setIDadversaire(adversaire.adversaire_id)}>
              <td>{adversaire.dossier_id}</td>
              <td>{adversaire.nom}</td>
              <td>{adversaire.registre}</td>
              <td>{adversaire.adresse}</td>
              <td>{adversaire.adresse_d}</td>
              <td>{adversaire.avocat}</td>
              <td>{adversaire.adresse_a}</td>
            </tr>
           ))}
        </tbody>
      </table>
      <div>
        <button
            className="btn btn-danger"
            onClick={() => deleteadversaire(idadversaire)}>
                    Supprimer adversaire  
        </button>


        <InputAdversaire changeadv={(e,a)=>getadversaire(e,a)}
         dossier_id={props.dossier_id} />

                </div>
 

    </Fragment>
)
     
}

export default TabAdvers;