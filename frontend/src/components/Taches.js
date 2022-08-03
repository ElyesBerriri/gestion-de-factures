import React, { Fragment, useState } from "react";
import InputTache from "./InputTache";
import Button from 'react-bootstrap/Button';

const Tache =(props)=>{

    const [taches, settaches] = useState([]);
    const [tache, settache] = useState("*");
    const [tache_id, setIDtache] = useState(4);
    const [row, setRow] = useState("");


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
      setRow("");
      document.getElementById("clbtnrrr").className="btn btn-dark disabled";
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
    <section className='container client' id='tache'>
      <h1 className='titlee' >Liste des Tâches</h1>
      <InputTache
            changetach={(e)=>gettache(e)}
            dossier_id={props.idd}/>

      <div className="table-responsive m-3 mytable-56 ">
        <table className="table table-hover text-center">
          <thead className="table-secondary text-secondary mytableheader">
          <tr>
            <th scope="col">Tâche</th>
            <th scope="col">Data Critique</th>
            <th scope="col">Date Rappel</th>
            <th scope="col">Résolu</th>
            <th scope="col">Personne chargé</th>
            <th scope="col">Greffier</th>
            <th scope="col">Course</th>
            <th scope="col">Lieu</th>
            <th scope="col">Service</th>
            <th scope="col">Date d'audience</th>
            <th scope="col">Date d'écheance</th>
          </tr>
        </thead>

        <tbody>
          {taches.map(tache => (
            <tr key={tache.tache_id} id={`tache${tache.tache_id}`} onClick={()=> {setIDtache(tache.tache_id);
              let e = document.getElementById(`tache${tache.tache_id}`);
              if (e.className !== "table-secondary") {
                if (row !== "") document.getElementById(row).className = "";
                e.className = "table-secondary";
                setRow(`tache${tache.tache_id}`);
                document.getElementById("clbtnrrr").className="btn btn-dark";

                 }}}>
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
      </div>

      <div className="modifsupp">
     <Button variant="dark" id="clbtnrrr" className="disabled"  onClick={() => deletetache(tache_id)}>
     Supprimer
       </Button>
</div>

      
            
             
    </section>
)
     
}

export default Tache;