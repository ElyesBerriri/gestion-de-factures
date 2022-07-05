import React, { Fragment } from "react";
import InputDossier from "./InputDossier";
import ListDossier from "./ListDossier";

function Empdossier() {
  return (
    <Fragment>
      <div className="container">
        <InputDossier />
        <ListDossier/>
      </div>
    </Fragment>
  );
}

export default Empdossier;