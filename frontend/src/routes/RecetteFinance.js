import React, { Fragment } from "react";
import InputRecetteFinance from "../components/tables_amine/InputRecetteFinance";
import ListRecetteFinance from "../components/tables_amine/ListRecetteFinance";

function RecetteFinance() {
  return (
    <Fragment>
      <div className="container">
        <InputRecetteFinance />
        <ListRecetteFinance/>
      </div>
    </Fragment>
  );
}

export default RecetteFinance;