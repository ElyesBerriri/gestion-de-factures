 import React, { Fragment, useState } from "react";

const InputClient = () => {
  const [description, setDescription] = useState("");

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = { description };
      await fetch("/Clients/list", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      
      window.location.reload();
    } catch (err) {
      console.error(err.message);
    }
  };
  return (
    <Fragment>
      <form onSubmit={onSubmitForm}>
        <input
          type="text"
          placeholder="Client Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button>Ajouter</button>
      </form>
    </Fragment>
  );
};

export default InputClient;
