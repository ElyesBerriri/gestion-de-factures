import React, { useState } from "react";

const EditTypeDossier = ({type}) => {
  const [libelle, setLibelle] = useState(type.libelle);

  const updateLibelle = async e => {
    e.preventDefault();
    try {
      const body = { libelle };
       await fetch(
        `/type_dossiers/list/${type.type_id}`,
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
    <>
      <button type="button" class="btn btn-primary" data-bs-toggle="modal" 
      data-bs-target={`#id${type.type_id}`}>
        Modifier
      </button>

      <div class="modal" onClick={() => setLibelle(type.libelle)}
      id={`id${type.type_id}`}>
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title">Modification du type de dossier</h4>
              <button type="button" class="btn-close" data-bs-dismiss="modal"
                onClick={() => setLibelle(type.libelle)}>
              </button>
            </div>
            <div class="modal-body">
            <input
              type="text"
              className="form-control"
              placeholder="libellé"
              value={libelle}
              onChange={e => setLibelle(e.target.value)} />
            </div>

            <div class="modal-footer">
              <button type="button" class="btn btn-primary" data-bs-dismiss="modal"
              onClick={e => updateLibelle(e)}>Valider</button>
              <button type="button" class="btn btn-danger" data-bs-dismiss="modal"
              onClick={() => setLibelle(type.libelle)}>Fermer</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditTypeDossier;