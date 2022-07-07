import React, { useState } from "react";

const InputTypeDossier = () => {
  const [libelle, setLibelle] = useState("");

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = { libelle };
      await fetch("/type_dossiers/list", {
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
      <h1 className="text-center mt-5">Liste des types de dossiers</h1>
      <form className="d-flex mt-5" onSubmit={onSubmitForm}>
        <input
          type="text"
          className="form-control"
          value={libelle}
          onChange={e => setLibelle(e.target.value)}
        />
        <button className="btn btn-success">Ajouter</button>
      </form>
    </>
  );
};

export default InputTypeDossier;