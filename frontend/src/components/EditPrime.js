import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Checkbox from "./Checkbox";

const EditPrime = ({ prime }) => {
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
      <Button type="button" className="mb-3 mx-3 disabled" id="lpbtne" data-bs-toggle="modal"
        data-bs-target={`#primeid${prime.id}`} variant="light"
        onClick={() => {
          setLibelle(prime.libelle);
          setMontant(prime.montant);
          setDissociable(prime.dissociable);
          setImpot(prime.impot);
          setMensuel(prime.mensuel);
        }}>
        Modifier
      </Button>
      <div className="modal fade" id={`primeid${prime.id}`} data-bs-backdrop="static">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Modification d'une prime</h4>
              <button type="button" className="btn-close" data-bs-dismiss="modal">
              </button>
            </div>
            <div className="modal-body">
              <div className="row">
                <div className="input-group mb-3">
                  <span className="input-group-text">Libellé :</span>
                  <input type="text" className="form-control"
                    placeholder="Libellé"
                    defaultValue={libelle}
                    onChange={e => setLibelle(e.target.value||"-")} />
                </div>
              </div>
              <div className="row">
                <div className="input-group">
                  <span className="input-group-text">Montant :</span>
                  <input type="number" className="form-control"
                    placeholder="Montant"
                    defaultValue={montant}
                    onChange={e => setMontant(e.target.value||0)} />
                </div>
              </div>
              <div className="form-check mt-3">
                <label className="form-check-label">
                Dissociable
                  <Checkbox 
                    checked={dissociable}
                    onChange={e => {
                      setDissociable(e.target.checked);
                      e.target.checked = dissociable;
                    }} />
                </label>
              </div>
              <div className="form-check">
                <label className="form-check-label">
                  Impot
                  <Checkbox checked={impot}
                    onChange={e => {
                      setImpot(e.target.checked);
                      e.target.checked = impot;
                    }} />
                </label>
              </div>
              <div className="form-check">
                <label className="form-check-label">
                  Mensuel
                  <Checkbox checked={mensuel}
                    onChange={e => {
                      setMensuel(e.target.checked);
                      e.target.checked = mensuel;
                    }} />
                </label>
              </div>
            </div>
            <div className="modal-footer">
              <Button variant="light" data-bs-dismiss="modal"
                onClick={e => updatePrime(e)}>Valider</Button>
              <Button variant="dark" data-bs-dismiss="modal"
              >Fermer</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditPrime;