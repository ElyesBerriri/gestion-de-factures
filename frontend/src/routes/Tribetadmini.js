import React, { Fragment } from "react";
import ListTrib from "../components/ListTrib";
import InputTrib from "../components/InputTrib";
import ListServices from "../components/Services";

function TribetAdmini() {
    return (
      <Fragment>
      <div className="container">
      <InputTrib />
        <ListTrib/>
        <ListServices/>
      </div>
    </Fragment>
    );
  }
  
  export default TribetAdmini;