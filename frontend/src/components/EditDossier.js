import React, { Fragment, useState } from "react";

const EditDossier = ({dossier}) => {
  const [libelle, setLibelle] = useState(dossier.libelle);

  const updateLibelle = async e => {
    e.preventDefault();
    try {
      const body = { libelle };
       await fetch(
        `/dossiers/list/${dossier.dossier_id}`,
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
data-bs-target={`#id${dossier.dossier_id}`}>
  Modifier
</button>

 
<div class="modal"
onClick={() => setLibelle(dossier.libelle)}
 id={`id${dossier.dossier_id}`}>
  <div class="modal-dialog">
    <div class="modal-content">

   
      <div class="modal-header">
        <h4 class="modal-title">Modification de dossier</h4>
        <button type="button" class="btn-close" data-bs-dismiss="modal"
          onClick={() => setLibelle(dossier.libelle)}
        ></button>
      </div>

    
      <div class="modal-body">
              <input
                type="text"
                className="form-control"
                value={libelle}
                onChange={e => setLibelle(e.target.value)}
              />
            </div>

      
      <div class="modal-footer">
      <button type="button" class="btn btn-primary" data-bs-dismiss="modal"
      onClick={e => updateLibelle(e)}
      >Valider</button>
        <button type="button" class="btn btn-danger" data-bs-dismiss="modal"
        onClick={() => setLibelle(dossier.libelle)}
        >Fermer</button>
      </div>

    </div>
  </div>
</div>

    </Fragment>
  );
};

export default EditDossier;