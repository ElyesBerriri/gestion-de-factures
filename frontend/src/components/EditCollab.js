import React, { Fragment, useState } from "react";

const EditCollab = ({collab}) => {
    const [nom,setnom] = useState(collab.nom);
    const [cin,setcin]  = useState(collab.cin);
    const [ville,setville]  = useState(collab.ville);
    const [ rue,setrue]  = useState(collab.rue);
    const [num,setnum]  = useState(collab.num);
    const [codepostale,setcodepostale]  = useState(collab.codepostale);
    const [activite,setactivite]  = useState(collab.activite);
    const [tel,settel]  = useState(collab.tel);
    const [fax,setfax]  = useState(collab.fax);
    const [email,setemail]  = useState(collab.email);
    const [matricule,setmatricule]  = useState(collab.matricule);
    const [methodepaiment,setmethodepaiment]  = useState(collab.methodepaiment);
    const [montant,setmontant]  = useState(collab.montant);
    const [nombre_dossier,setnombre_dossier]  = useState(collab.nombre_dossier);


  const updateCollab = async e => {
    e.preventDefault();
    try {
        const body = { nom,cin,ville,rue,num,codepostale,activite,tel,fax,email,matricule,methodepaiment,montant,nombre_dossier} ;
       await fetch(
        `/collaborateurs/list/${collab.collab_id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body)
        }
      );

      window.location.reload();
    } catch (err) {
      console.error(err.message);
    }
  };


  return (
    <Fragment>
      
<button type="button" class="btn btn-primary" data-bs-toggle="modal" 
data-bs-target={`#id${collab.collab_id}`}>
  Modifier
</button>

 
<div class="modal"
onClick={() => setnom(collab.nom)}
 id={`id${collab.collab_id}`}>
  <div class="modal-dialog">
    <div class="modal-content">

   
      <div class="modal-header">
        <h4 class="modal-title">Modification de dossier</h4>
        <button type="button" class="btn-close" data-bs-dismiss="modal"
          onClick={() =>setnom(collab.nom)}
        ></button>
      </div>

    
      <div class="modal-body">
              <input
                type="text"
                className="form-control"
                value={nom}
                onChange={e => setnom(e.target.value)}
              />
               <input
                type="number"
                className="form-control"
                value={cin }
                onChange={e => setcin(e.target.value)}
              />
               <input
                type="text"
                className="form-control"
                value={ville}
                onChange={e => setville(e.target.value)}
              />
               <input
                type="text"
                className="form-control"
                value={rue}
                onChange={e => setrue(e.target.value)}
              />    
               <input
                type="number"
                className="form-control"
                value={num}
                onChange={e => setnum(e.target.value)}
              />
               <input
                type="number"
                className="form-control"
                value={codepostale}
                onChange={e => setcodepostale(e.target.value)}
              />
               <input
                type="text"
                className="form-control"
                value={activite}
                onChange={e => setactivite(e.target.value)}
              />
               <input
                type="number"
                className="form-control"
                value={tel}
                onChange={e => settel(e.target.value)}
              />    
               <input
                type="number"
                className="form-control"
                value={fax}
                onChange={e => setfax(e.target.value)}
              />
               <input
                type="text"
                className="form-control"
                value={email}
                onChange={e => setemail(e.target.value)}
              />
               <input
                type="number"
                className="form-control"
                value={matricule}
                onChange={e => setmatricule(e.target.value)}
              />
               <input
                type="text"
                className="form-control"
                value={methodepaiment}
                onChange={e => setmethodepaiment(e.target.value)}
              />
               <input
                type="number"
                className="form-control"
                value={montant}
                onChange={e => setmontant(e.target.value)}
              />
               <input
                type="number"
                className="form-control"
                value={nombre_dossier}
                onChange={e => setnombre_dossier(e.target.value)}
              />

            </div>

      
      <div class="modal-footer">
      <button type="button" class="btn btn-primary" data-bs-dismiss="modal"
      onClick={e => updateCollab(e)}
      >Valider</button>
        <button type="button" class="btn btn-danger" data-bs-dismiss="modal"
        onClick={() => setnom(collab.nom)}
        >Fermer</button>
      </div>

    </div>
  </div>
</div>

    </Fragment>
  );
};

export default EditCollab;