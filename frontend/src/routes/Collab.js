 import ListCollab from "../components/ListCollab";
 import React, {useState,useEffect} from "react";

function Collab() {

    return (
      <>
          <h1 className='title' >Liste des Collaborateurs</h1>
          <ListCollab/>
      </>
    );
  }
  
  export default Collab;