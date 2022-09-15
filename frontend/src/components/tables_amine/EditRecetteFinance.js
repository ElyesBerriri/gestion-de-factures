import React, { useState } from "react";
import { Button } from "react-bootstrap";

const EditRecetteFinance = ({ recette }) => {
  const [libelle, setLibelle] = useState(recette.libelle);
  const [montant, setMontant] = useState(recette.montant);

  const updateRecette = async e => {
    e.preventDefault();
    try {
      const body = { libelle, montant };
      await fetch(
        `/recettefinance/list/${recette.rf_id}`,
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
      <Button variant="light" id="recfe" className="mb-3 mx-3 disabled" data-bs-toggle="modal"
        data-bs-target={`#id${recette.rf_id}`} onClick={() => {
          setLibelle(recette.libelle);
          setMontant(recette.montant);
        }}>
        Modifier
      </Button>

      <div className="modal fade" id={`id${recette.rf_id}`} data-bs-backdrop="static">
        <div className="modal-dialog modal-dialog-scrollable" >
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Modification d'une recette</h4>
              <button type="button" className="btn-close" data-bs-dismiss="modal"
                onClick={() => {
                  setLibelle(recette.libelle);
                  setMontant(recette.montant);
                }}>
              </button>
            </div>

            <div className="modal-body">
              <div className="row">
                <div className="input-group mb-3">
                  <span className="input-group-text ">Libellé :</span>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Libellé"
                    defaultValue={libelle}
                    onChange={e => setLibelle(e.target.value||"-")} />
                </div>
              </div>

              <div className="row">
                <div className="input-group mb-3">
                  <span className="input-group-text ">Montant :</span>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Montant"
                    defaultValue={montant}
                    onChange={e => setMontant(e.target.value||0)} />
                </div>
              </div>
            </div>

            <div className="modal-footer">
              <Button variant="light" id="valider" data-bs-dismiss="modal"
                onClick={e => updateRecette(e)}
              >Valider</Button>
              <Button variant="dark" data-bs-dismiss="modal">Fermer</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditRecetteFinance;