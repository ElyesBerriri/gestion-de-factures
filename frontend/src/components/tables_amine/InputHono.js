import React, { Fragment, useState } from "react";

const InputHono = () => {
  const [lib_arab, setLib_arab] = useState("");
  const [lib_fr, setLib_fr] = useState("");
  const [montant, setMontant] = useState();

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = { lib_arab,lib_fr,montant };
      await fetch("/honoraires/list/", {
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
      <h1 className="text-center mt-5">Honoraires en extra</h1>
      <form className="d-flex mt-5"  >
        <input
          type="text"
          className="form-control"
          value={lib_arab}
          onChange={e => setLib_arab(e.target.value)}
        />

<input
          type="text"
          className="form-control"
          value={lib_fr}
          onChange={e => setLib_fr(e.target.value)}
        />

        <input
          type="number"
          className="form-control"
          value={montant}
          onChange={e => setMontant(e.target.value)}
        />
        <button className="btn btn-success" onClick={onSubmitForm}>Ajouter</button>
      </form>
    </Fragment>
  );
};

export default InputHono;