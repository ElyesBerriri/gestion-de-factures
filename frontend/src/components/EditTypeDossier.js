import React, { useState } from "react";
import { Button } from "react-bootstrap";

const EditTypeDossier = ({ type }) => {
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
      <Button data-bs-toggle="modal" variant="light" className="mb-3 mx-3"
        data-bs-target={`#id${type.type_id}`} onClick={() => setLibelle(type.libelle)}>
        Modifier
      </Button>

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
                <div className="input-group mb-3">
                  <span className="input-group-text">Libellé :</span>
                  <input type="text" className="form-control"
                    placeholder="libellé"
                    value={libelle}
                    onChange={e => setLibelle(e.target.value)} />
                </div>
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