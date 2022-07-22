import React, { useState } from "react";

const EditTimbre = ({timbre}) => {
  console.log(timbre);
  const [libelle, setLibelle] = useState(timbre.libelle);
  const [montant, setMontant] = useState(timbre.montant);

  const updateTimbre = async e => {
    e.preventDefault();
    try {
      const body = { libelle, montant};
       await fetch(
        `/timbres/list/${timbre.tim_id}`,
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
      data-bs-target={`#id${timbre.tim_id}`}>
        Modifier
      </button>
      <div className="modal" id={`id${timbre.tim_id}`}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Modification d'un timbre</h4>
              <button type="button" className="btn-close" data-bs-dismiss="modal"
                onClick={() => {
                  setLibelle(timbre.libelle);
                  setMontant(timbre.montant);
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
              onClick={e => updateTimbre(e)}>Valider</button>
              <button type="button" className="btn btn-danger" data-bs-dismiss="modal"
              onClick={() => {
                setLibelle(timbre.libelle);
                setMontant(timbre.montant);
              }}>Fermer</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditTimbre;