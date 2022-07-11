import React, { Fragment } from "react";
import InputGreffier from "../components/tables_amine/InputGreffier";
import ListGreffier from "../components/tables_amine/ListGreffier";

function Greffier() {
  return (
    <Fragment>
      <div className="container">
        <InputGreffier />
        <ListGreffier/>
      </div>
    </Fragment>
  );
}

export default Greffier;