import React, { useState } from "react";

const EditPrime = ({prime}) => {
  const [libelle, setLibelle] = useState(prime.libelle);
  const [montant, setMontant] = useState(prime.montant);
  const [dissociable, setDissociable] = useState(prime.dissociable);
  const [impot, setImpot] = useState(prime.impot);
  const [mensuel, setMensuel] = useState(prime.mensuel);

  const updatePrime = async e => {
    e.preventDefault();
    try {
      const body = { libelle, montant, dissociable, impot, mensuel };
       await fetch(
        `/primes/list/${prime.id}`,
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
      data-bs-target={`#id${prime.id}`}
      onClick={() => {
        setLibelle(prime.libelle);
        setMontant(prime.montant);
        setDissociable(prime.dissociable);
        setImpot(prime.impot);
        setMensuel(prime.mensuel);
      }}>
        Modifier
      </button>
      <div className="modal fade" id={`id${prime.id}`} data-bs-backdrop="static">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Modification d'une prime</h4>
              <button type="button" className="btn-close" data-bs-dismiss="modal">
              </button>
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
              <div className="row">
                <label className="col-form-label">
                  Montant
                  <input
                    type="number"
                    className="form-control"
                    placeholder="montant"
                    value={montant}
                    onChange={e => setMontant(e.target.value)} />
                </label>
              </div>
              <div className="form-check mt-3">
                <label className="form-check-label">
                  <input className="form-check-input" type="checkbox"
                    checked = {dissociable}
                    onChange={e => {
                      setDissociable(e.target.checked);
                      e.target.checked = dissociable;
                    }} />
                    Dissociable
                </label>
              </div>
              <div className="form-check">
                <label className="form-check-label">
                  <input className="form-check-input" type="checkbox"
                    checked = {impot}
                    onChange={e => {
                      setImpot(e.target.checked);
                      e.target.checked = impot;
                    }} />
                  Impot
                </label>
              </div>
              <div className="form-check">
                <label className="form-check-label">
                  <input className="form-check-input" type="checkbox"
                    checked = {mensuel}
                    onChange={e => {
                      setMensuel(e.target.checked);
                      e.target.checked = mensuel;
                    }} />
                    Mensuel
                </label>
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-primary" data-bs-dismiss="modal"
              onClick={e => updatePrime(e)}>Valider</button>
              <button type="button" className="btn btn-danger" data-bs-dismiss="modal"
              >Fermer</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditPrime;