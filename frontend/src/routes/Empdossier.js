import React, { Fragment } from "react";
import InputDossier from "../components/InputDossier";
import ListDossier from "../components/ListDossier";

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