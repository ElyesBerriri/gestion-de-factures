import React, { useState } from "react";
import { Button } from "react-bootstrap";

const EditRecetteFinance = ({recette}) => {
  const [libelle, setLibelle] = useState(recette.libelle);
  const [montant, setMontant] = useState(recette.montant);

  const updateRecette = async e => {
    e.preventDefault();
    try {
      const body = { libelle, montant};
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
      <div className="modal" id={`id${recette.rf_id}`}>
        <div className="modal-dialog">
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
              <input
                type="text"
                className="form-control"
                placeholder="libelle"
                value={libelle}
                onChange={e => setLibelle(e.target.value)} />
                
              <input
                type="number"
                className="form-control"
                placeholder="montant"
                value={montant}
                onChange={e => setMontant(e.target.value)} />
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-primary" data-bs-dismiss="modal"
              onClick={e => updateRecette(e)}>Valider</button>
              <button type="button" className="btn btn-danger" data-bs-dismiss="modal"
              onClick={() => {
                setLibelle(recette.libelle);
                setMontant(recette.montant);
              }}>Fermer</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditRecetteFinance;