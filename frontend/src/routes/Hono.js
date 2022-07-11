import React, { Fragment } from "react";
import InputHono from "../components/tables_amine/InputHono";
import ListHono from "../components/tables_amine/ListHono";

function Hono() {
  return (
    <Fragment>
      <div className="container">
        <InputHono />
        <ListHono/>
      </div>
    </Fragment>
  );
}

export default Hono;