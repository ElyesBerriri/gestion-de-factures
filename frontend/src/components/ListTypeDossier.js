import React, { useEffect, useState } from "react";
import EditTypeDossier from "./EditTypeDossier";

const ListTypeDossier = () => {
  const [types, setTypes] = useState([]);

  const deletetype = async id => {
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
      <table className="table table table-hover mt-5 text-center">
        <thead  className="table-dark">
          <tr>
            <th>Libellé</th>
            <th>Modifier</th>
            <th>Supprimer</th>
          </tr>
        </thead>
        <tbody>
          {types.map(type => (
            <tr key={type.type_id}>
              <td>{type.libelle}</td>
              <td>
                <EditTypeDossier type={type} />
              </td>
              <td>
              <button
                className="btn btn-danger"
                onClick={() => deletetype(type.type_id)}>
                  Supprimer
              </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default ListTypeDossier;