import React, { Fragment, useState } from "react";
import InputTache from "./InputTache";

const Tache =(props)=>{

    const [taches, settaches] = useState([]);
    const [tache, settache] = useState("*");
    const [tache_id, setIDtache] = useState(4);


    const gettache = async (id) => {
      if (id!==0){
      try {
        const response = await fetch(`/tache/listtotal/${id}`);
        const jsonData = await response.json();
        settaches(jsonData);
      } 
      catch (err) {
        console.error(err.message);
      }}
    };


    const deletetache = async id => {
      try {
 
        await fetch(`/tache/list/${id}`, {
          method: "DELETE"
        });
  
        settaches(taches.filter(tache => tache.tache_id !== id));
     
      } catch (err) {
        console.error(err.message);
      }
    };


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
              <td>{tache.tache}</td>
              <td>{tache.datec}</td>
              <td>{tache.dater}</td>
              <td>{tache.resolu}</td>
              <td>{tache.personnech}</td>
              <td>{tache.greffier}</td>
              <td>{tache.course}</td>
              <td>{tache.lieu}</td>
              <td>{tache.service}</td>
              <td>{tache.dateaud}</td>
              <td>{tache.dateech}</td>

            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <button
            className="btn btn-danger"
            onClick={() => deletetache(tache_id)}>
                    Supprimer tache
        </button>
            <InputTache
            changetach={(e)=>gettache(e)}
            dossier_id={props.idd}/>

                </div>
    </section>
)
     
}

export default Tache;