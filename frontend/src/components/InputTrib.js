import React, { Fragment, useState } from "react";

const InputTrib = () => {
  const [lieux, setlieux] = useState("");

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = { lieux };
      await fetch("/tribunaux/list", {
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
      <form className="d-flex mt-5" onSubmit={onSubmitForm}>
        <input
          type="text"
          className="form-control"
          value={lieux}
          onChange={e => setlieux(e.target.value)}
        />
        <button className="btn btn-success">Ajouter</button>
      </form>
    </Fragment>
  );
};

export default InputTrib;