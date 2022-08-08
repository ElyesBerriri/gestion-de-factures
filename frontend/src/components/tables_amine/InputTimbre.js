import React, { Fragment, useState } from "react";

const InputTimbre = () => {
  const [libelle, setLibelle] = useState("");
  const [montant, setMontant] = useState("");

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = { libelle,montant };
      await fetch("/timbres/list", {
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
    <Fragment>
      <h1 className="title">Timbres</h1>
      <form className="d-flex mt-5" onSubmit={onSubmitForm}>
        <input
          type="text"
          className="form-control"
          value={libelle}
          onChange={e => setLibelle(e.target.value)}
        />

        <input
          type="number"
          className="form-control"
          value={montant}
          onChange={e => setMontant(e.target.value)}
        />
        <button className="btn btn-success">Ajouter</button>
      </form>
    </Fragment>
  );
};

export default InputTimbre;