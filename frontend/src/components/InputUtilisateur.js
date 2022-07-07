import React, { useState } from "react";

const InputUtilisateur = () => {
  const [login, setLogin] = useState("");
  const [pwd, setPwd] = useState("");
  const [domaine, setDomaine] = useState("");

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = { login, pwd, domaine };
      await fetch("/utilisateurs/list", {
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
      <h1 className="text-center mt-5">Liste des utilisateurs</h1>
      <form className="d-flex mt-5" onSubmit={onSubmitForm}>
        <input
          type="text"
          className="form-control"
          placeholder="login"
          value={login}
          onChange={e => setLogin(e.target.value)}
        />
        <input
          type="text"
          className="form-control"
          placeholder="pwd"
          value={pwd}
          onChange={e => setPwd(e.target.value)}
        />
        <input
          type="text"
          className="form-control"
          placeholder="domaine"
          value={domaine}
          onChange={e => setDomaine(e.target.value)}
        />
        <button className="btn btn-success">Ajouter</button>
      </form>
    </>
  );
};

export default InputUtilisateur;