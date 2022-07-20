import React, { Fragment, useState } from "react";
import InputTache from "./InputTache";

const Tache =()=>{

    const [taches, settaches] = useState([]);
    const [tache, settache] = useState("");
    const [datec, setdatec] = useState("");
    const [dater, setdater] = useState("");
    const [resolu, setresolu] = useState("");
    const [personnech, setpersonnech] = useState("");
    const [greffier, setgreffier] = useState("");
    const [course, setcourse] = useState("");
    const [lieu, setlieu] = useState("");
    const [service, setservice] = useState("");
    const [dateaud, setdateaud] = useState("");
    const [dateech, setdateech] = useState("");
    const [id, setIDtache] = useState("");

return (
    <section id='tache'>
       {" "}
      <table className="table table table-hover mt-5 text-center">
        <thead  className="table-dark">
          <tr>
            <th>Tache</th>
            <th>Data_Critique</th>
            <th>Date_Rappel</th>
            <th>Résolu</th>
            <th>Personne_chargé</th>
            <th>Greffier</th>
            <th>Course</th>
            <th>Lieu</th>
            <th>Service</th>
            <th>Date_d'audience</th>
            <th>Date_d'echeance</th>


          </tr>
        </thead>
        <tbody>
          {taches.map(tache => (
            <tr key={tache.tache_id} onClick={()=> setIDtache(tache.tache_id)}>
              <td>{tache.nom}</td>
              
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <button
            className="btn btn-danger">
                    Supprimer tache
        </button>
            <InputTache/>

                </div>
    </section>
)
     
}

export default Tache;