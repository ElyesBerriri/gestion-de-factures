import React from "react";
import InputUtilisateur from "../components/InputUtilisateur";
import ListUtilisateur from "../components/ListUtilisateur";

function Utilisateurs() {
  return (
    <div className="container">
      <InputUtilisateur />
      <ListUtilisateur />
    </div>
  );
}

export default Utilisateurs;