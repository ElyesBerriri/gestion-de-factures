import React, { Fragment, useState } from "react";
import Button from 'react-bootstrap/Button';

const EditDossier = ({dossier,id}) => {
  const [libelle, setLibelle] = useState(dossier.libelle);

  const updateLibelle = async e => {
    e.preventDefault();
    try {
      const body = { libelle };
       await fetch(
        `/dossiers/list/${id}`,
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
       <Button variant="light" data-bs-toggle="modal" id="clbtnm" className="mx-3 disabled"
data-bs-target={`#id${dossier.dossier_id}`}
onClick={() => setLibelle(dossier.libelle)}
>Modifier</Button>
 
<div className="modal fade" id={`id${dossier.dossier_id}`} data-bs-backdrop="static">
  <div className="modal-dialog modal-dialog-scrollable" >
          <div className="modal-content">

   
      <div className="modal-header">
        <h4 className="modal-title">Modification de dossier</h4>
        <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
      </div>

    
      <div className="modal-body">
      <div className="row">
      <div className="input-group mb-3">
      <span className="input-group-text text-secondary ">Libellé :</span>

              <input
                type="text"
                className="form-control"
                value={libelle}
                onChange={e => setLibelle(e.target.value)}
              />
            </div>
      </div>
      </div>

      
      <div className="modal-footer">
      <Button variant="light" id="valider" 
      onClick={e => updateLibelle(e)}
      >Valider</Button>
      <Button variant="dark" data-bs-dismiss="modal">Fermer</Button>
      </div>

    </div>
  </div>
</div>
{console.log(dossier)}
     </Fragment>
  );
};

export default EditDossier;