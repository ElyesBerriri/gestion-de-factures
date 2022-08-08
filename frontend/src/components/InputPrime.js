import React, { useState } from "react";
import { Button } from "react-bootstrap";

const InputPrime = () => {
  const [libelle, setLibelle] = useState("");
  const [montant, setMontant] = useState("");
  const [dissociable, setDissociable] = useState(false);
  const [impot, setImpot] = useState(false);
  const [mensuel, setMensuel] = useState(false);

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = { libelle, montant, dissociable, impot, mensuel };
      await fetch("/primes/list", {
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
          setMontant("");
          setDissociable(false);
          setImpot(false);
          setMensuel(false);
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
              <div className="row">
                <div className="input-group">
                  <span className="input-group-text">Montant :</span>
                  <input type="number" className="form-control"
                    placeholder="montant"
                    value={montant}
                    onChange={e => setMontant(e.target.value)} />
                </div>
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
                    checked = {mensuel} onChange={e => {
                      setMensuel(e.target.checked);
                      e.target.checked = mensuel;
                    }} />
                    Mensuel
                </label>
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

export default InputPrime;