import React, { Fragment, useState } from "react";

const EditCollab = ({collab}) => {
    const [nom,setnom] = useState("" );
    const [cin,setcin]  = useState();
    const [ville,setville]  = useState("");
    const [ rue,setrue]  = useState("");
    const [num,setnum]  = useState();
    const [codepostale,setcodepostale]  = useState();
    const [activite,setactivite]  = useState("");
    const [tel,settel]  = useState();
    const [fax,setfax]  = useState();
    const [email,setemail]  = useState("");
    const [matricule,setmatricule]  = useState("");
    const [methodepaiment,setmethodepaiment]  = useState("");
    const [montant,setmontant]  = useState( );
    const [nombre_dossier,setnombre_dossier]  = useState( );


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
                onChange={e => setnom(collab.nom)}
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