import React, { useState } from "react";
import { Button } from "react-bootstrap";

const InputTypeDossier = () => {
  const [libelle, setLibelle] = useState("");

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = { libelle };
      await fetch("/type_dossiers/list", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      });

      window.location.reload();
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <>
      <Button className="mb-3" data-bs-toggle="modal" variant="dark"
        data-bs-target="#primeid0" onClick={() => {
          setLibelle("");
        }}>
        Ajouter
      </Button>
      <div className="modal fade" id="primeid0" data-bs-backdrop="static">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Ajout d'une prime</h4>
              <button type="button" className="btn-close" data-bs-dismiss="modal">
              </button>
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
              <Button variant="light" data-bs-dismiss="modal"
                onClick={onSubmitForm}>Valider</Button>
              <Button variant="dark" data-bs-dismiss="modal"
              >Fermer</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InputTypeDossier;