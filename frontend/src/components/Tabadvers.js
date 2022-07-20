import React, { Fragment, useState,useEffect } from "react";
 import InputAdversaire from "./InputAdversaire";

const TabAdvers =(props)=>{

    const [adversaire, setadversaire] = useState([]);
     const [nom, setnom] = useState("");
    const [registre, setregistre] = useState("");
    const [adresse, setadresse] = useState("");
    const [adresse_d, setadresse_d] = useState("");
    const [avocat, setavocat] = useState("");
    const [adresse_a, setadresse_a] = useState("");
    const [idadversaire, setIDadversaire] = useState("");

    const getadversaire = async (id) => {
      if (id!==0){
      try {
        const response = await fetch(`/adversaire/listtotal/${id}`);
        const jsonData = await response.json();
        setadversaire(jsonData);
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
        {        console.log(nom);

          const rep=props.adversaire.replace(`${nom}`,"");
        props.changeadversaire(rep);}
        console.log(props.adversaire);
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
            <tr key={adversaire.adversaire_id} onClick={()=> {setIDadversaire(adversaire.adversaire_id);setnom(adversaire.nom)}}>
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


        <InputAdversaire adversaire={props.adversaire} changeadv={(e)=>getadversaire(e)}
        changeadversaire={props.changeadversaire} dossier_id={props.dossier_id} />

                </div>
 {console.log(props.adversaire)}
    </Fragment>
)
     
}

export default TabAdvers;