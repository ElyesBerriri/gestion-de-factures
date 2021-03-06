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
      <button type="button" className="btn btn-primary" data-bs-toggle="modal" 
      data-bs-target={`#id${type.type_id}`} onClick={() => setLibelle(type.libelle)}>
        Modifier
      </button>

      <div className="modal fade" data-bs-backdrop="static"
        id={`id${type.type_id}`}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Modification du type de dossier</h4>
              <button type="button" className="btn-close" data-bs-dismiss="modal" />
            </div>
            <div className="modal-body">
              <div className="row">
                <label className="col-form-label">
                  Libellé
                  <input
                    type="text"
                    className="form-control"
                    placeholder="libellé"
                    value={libelle}
                    onChange={e => setLibelle(e.target.value)} />
                </label>
              </div>
            </div>

            <div className="modal-footer">
              <button type="button" className="btn btn-primary" data-bs-dismiss="modal"
              onClick={e => updateLibelle(e)}>Valider</button>
              <button type="button" className="btn btn-danger" data-bs-dismiss="modal"
              >Fermer</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditTypeDossier;