import React, { Fragment, useState,useEffect } from "react";
 import InputAdversaire from "./InputAdversaire";
 import Button from 'react-bootstrap/Button';

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
    const [row, setRow] = useState("");

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
      setRow("");
      document.getElementById("clbtnr").className="btn btn-dark disabled";
      try {
 
        await fetch(`/adversaire/list/${id}`, {
          method: "DELETE"
        });
        setadversaire(adversaire.filter(adversaire => adversaire.adversaire_id !== id));
        /*{        console.log(nom);

          const rep=props.adversaire.replace(`${nom}`,"");
        props.changeadversaire(rep);}
        console.log(props.adversaire);*/
        props.changeadversaires(adversaire.filter(adversaire => adversaire.adversaire_id !== id));
      } catch (err) {
        console.error(err.message);
      }
    };
 


return (
    <Fragment className="section2">
            <h1 className='titlee' >Liste des Adversaires</h1>
            <InputAdversaire changeadv={(e,a)=>getadversaire(e,a)}
         dossier_id={props.dossier_id} />

      <div className="table-responsive m-3 mytable  mytable-56creation ">
        <table className="table table-hover text-center">
          <thead className="table-secondary text-secondary mytableheader">
          <tr>
            <th scope="col">ID dossier</th>
            <th scope="col">Nom et Prénom</th>
            <th scope="col">Registre</th>
            <th scope="col">Adresse</th>
            <th scope="col">Adresse designée</th>
            <th scope="col">Avocat</th>
            <th scope="col">Adresse Avocat</th>
          </tr>
        </thead>
        <tbody>
          {adversaire.map(adversaire => (
            <tr key={adversaire.adversaire_id} id={`adversaire${adversaire.adversaire_id}`} onClick={()=> {setIDadversaire(adversaire.adversaire_id);
              setnom(adversaire.nom);

              let e = document.getElementById(`adversaire${adversaire.adversaire_id}`);
              if (e.className !== "table-secondary") {
                if (row !== "") document.getElementById(row).className = "";
                e.className = "table-secondary";
                setRow(`adversaire${adversaire.adversaire_id}`);
                document.getElementById("clbtnr").className="btn btn-dark";

                 }}}>
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
      </div>

  
        <div className="modifsupp">
     <Button variant="dark" id="clbtnr" className="disabled"  onClick={() => deleteadversaire(idadversaire)}>
     Supprimer
       </Button>
</div>

                
    </Fragment>
)
     
}

export default TabAdvers;