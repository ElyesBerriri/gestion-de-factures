import React, { useState } from "react";

const EditRecetteFinance = ({recette}) => {
  const [libelle, setLibelle] = useState(recette.libelle);
  const [montant, setMontant] = useState(recette.montant);

  const updateRecette = async e => {
    e.preventDefault();
    try {
      const body = { libelle, montant};
       await fetch(
        `/recettefinance/list/${recette.id}`,
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
      data-bs-target={`#id${recette.id}`}>
        Modifier
      </button>
      <div class="modal" id={`id${recette.id}`}>
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title">Modification d'une recette</h4>
              <button type="button" class="btn-close" data-bs-dismiss="modal"
                onClick={() => {
                  setLibelle(recette.libelle);
                  setMontant(recette.montant);
                }}>
              </button>
            </div>
            <div class="modal-body">
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
            <div class="modal-footer">
              <button type="button" class="btn btn-primary" data-bs-dismiss="modal"
              onClick={e => updateRecette(e)}>Valider</button>
              <button type="button" class="btn btn-danger" data-bs-dismiss="modal"
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