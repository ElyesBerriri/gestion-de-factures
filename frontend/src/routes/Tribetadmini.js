import React, { Fragment } from "react";
import ListTrib from "../components/ListTrib";
import InputTrib from "../components/InputTrib";

function TribetAdmini() {
    return (
      <Fragment>
      <div className="container">
      <InputTrib />
        <ListTrib/>
      </div>
    </Fragment>
    );
  }
  
  export default TribetAdmini;