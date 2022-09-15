import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { GoPlus } from "react-icons/go";
import Checkboxe from "./Checkboxe";

const InputPrime = () => {
  const [libelle, setLibelle] = useState("-");
  const [montant, setMontant] = useState(0);
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
      <div className="mx-5">
        <button data-bs-toggle="modal" data-bs-target="#primeid0" className="ajouter ajoutprime"
          onClick={() => {
            setLibelle("-");
            setMontant(0);
            setDissociable(false);
            setImpot(false);
            setMensuel(false);
          }} ><GoPlus color="#BBA14A" fontSize="1.5em" />
        </button>
      </div>
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
                    placeholder="Libellé"
                     onChange={e => setLibelle(e.target.value||"-")} />
                </div>
              </div>
              <div className="row">
                <div className="input-group">
                  <span className="input-group-text">Montant :</span>
                  <input type="number" className="form-control"
                    placeholder="Montant"
                     onChange={e => setMontant(e.target.value||0)} />
                </div>
              </div>
              <div className="form-check mt-3">
                <label className="form-check-label">
                Dissociable
                  <Checkboxe checked={dissociable}
                    onChange={e => {
                      setDissociable(e.target.checked);
                      e.target.checked = dissociable;
                    }} />
                </label>
              </div>
              <div className="form-check">
                <label className="form-check-label">                  
                Impot
                  <Checkboxe checked={impot}
                    onChange={e => {
                      setImpot(e.target.checked);
                      e.target.checked = impot;
                    }} />
                </label>
              </div>
              <div className="form-check">
                <label className="form-check-label">                 
                 Mensuel
                  <Checkboxe checked={mensuel} onChange={e => {
                      setMensuel(e.target.checked);
                      e.target.checked = mensuel;
                    }} />
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