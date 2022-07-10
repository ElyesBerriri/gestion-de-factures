import React, { useState } from "react";

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
      <h1 className="text-center mt-5">Liste des primes</h1>
      <form className="d-flex mt-5" onSubmit={onSubmitForm}>
        <input
          type="text"
          className="form-control"
          placeholder="libellé"
          value={libelle}
          onChange={e => setLibelle(e.target.value)} />
        <input
          type="number"
          className="form-control"
          placeholder="montant"
          value={montant}
          onChange={e => setMontant(e.target.value)} />
        <div class="form-check m-2">
          <input className="form-check-input" type="checkbox" id="dissociable"
          onChange={e => setDissociable(e.target.checked)} />
          <label class="form-check-label" for="dissociable">
            Dissociable
          </label>
        </div>
        <div class="form-check m-2">
          <input className="form-check-input" type="checkbox" id="impot"
          onChange={e => setImpot(e.target.checked)} />
          <label class="form-check-label" for="impot">
            Impot
          </label>
        </div>
        <div class="form-check m-2">
          <input className="form-check-input" type="checkbox" id="mensuel"
          onChange={e => setMensuel(e.target.checked) } />
          <label class="form-check-label" for="mensuel">
            Mensuel
          </label>
        </div>
        <button className="btn btn-success">Ajouter</button>
      </form>
    </>
  );
};

export default InputPrime;