import React, { Fragment } from "react";
import InputTimbre from "../components/tables_amine/InputTimbre";
import ListTimbre from "../components/tables_amine/ListTimbre";

function Timbre() {
  return (
    <Fragment>
      <div className="container">
        <InputTimbre />
        <ListTimbre/>
      </div>
    </Fragment>
  );
}

export default Timbre;