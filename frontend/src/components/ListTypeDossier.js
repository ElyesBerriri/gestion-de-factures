import React, { useEffect, useState } from "react";
import EditTypeDossier from "./EditTypeDossier";
import InputTypeDossier from "./InputTypeDossier";
import { Button } from "react-bootstrap";

const ListTypeDossier = () => {
  const [types, setTypes] = useState([]);
  const [row, setRow] = useState("");
  const [doc, setDoc] = useState({});

  const deletetype = async id => {
    setRow("");
    setDoc({});
    try {
      await fetch(`/type_dossiers/list/${id}`, {
        method: "DELETE"
      });

      setTypes(types.filter(type => type.type_id !== id));
    } catch (err) {
      console.error(err.message);
    }
  };

  const getTypes = async () => {
    try {
      const response = await fetch("/type_dossiers/list");
      const jsonData = await response.json();

      setTypes(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getTypes();
  }, []);

  return (
    <>
      {" "}
      <div className="table-responsive m-3 mytable mytable-68">
        <table className="table table-hover text-center">
          <thead className="table-secondary text-secondary mytableheader">
            <tr>
              <th>Libellé</th>
            </tr>
          </thead>
          <tbody>
            {types.map(type => (
              <tr key={type.type_id} id={`ty${type.type_id}`} onClick={() => {
                let e = document.getElementById(`ty${type.type_id}`);
                if (e.className !== "table-secondary") {
                  if (row !== "") document.getElementById(row).className = "";
                  e.className = "table-secondary";
                  setRow(`ty${type.type_id}`);
                  setDoc(type);
                }
              }}>
                <td data-label="Libellé">{type.libelle}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <InputTypeDossier />
      <EditTypeDossier type={doc} />
      <Button
        variant="dark" className="mb-3"
        onClick={() => deletetype(doc.type_id)}>
        Supprimer
      </Button>
    </>
  );
};

export default ListTypeDossier;