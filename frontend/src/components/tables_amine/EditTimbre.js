import React, { useState } from "react";
import { Button } from "react-bootstrap";

const EditTimbre = ({ timbre }) => {
  console.log(timbre);
  const [libelle, setLibelle] = useState(timbre.libelle);
  const [montant, setMontant] = useState(timbre.montant);

  const updateTimbre = async e => {
    e.preventDefault();
    try {
      const body = { libelle, montant };
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
      <Button variant="light" id="tme" className="mb-3 mx-3 disabled" data-bs-toggle="modal"
        data-bs-target={`#id${timbre.tim_id}`} onClick={() => {
          setLibelle(timbre.libelle);
          setMontant(timbre.montant);
        }}>
        Modifier
      </Button>

      <div className="modal" id={`id${timbre.tim_id}`} data-bs-backdrop="static">
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
              
            <div className="row">
      <div className="input-group mb-3">
      <span className="input-group-text ">Libellé :</span>

              <input
                type="text"
                className="form-control"
                value={libelle}
                onChange={e => setLibelle(e.target.value)} />
            </div>
      </div>
               
      <div className="row">
      <div className="input-group mb-3">
      <span className="input-group-text ">Montant :</span>

              <input
                type="number"
                className="form-control"
                value={montant}
                onChange={e => setMontant(e.target.value)} />
      </div>
               
            </div>

            <div className="modal-footer">
      <Button variant="light" id="valider" 
    onClick={e => updateTimbre(e)}
      >Valider</Button>
      <Button variant="dark" data-bs-dismiss="modal">Fermer</Button>
      </div>

          </div>  
          </div>
        </div>
      </div>
    </>
  );
};

export default EditTimbre;