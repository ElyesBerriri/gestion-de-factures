import React, { Fragment, useEffect, useState } from "react";
import EditGreffier from "./EditGreffier";

const ListGreffier = () => {
  const [gref, setgref] = useState([]);


  const deletegreffier = async id => {
    try {
      await fetch(`/greffier/list/${id}`, {
        method: "DELETE"
      });

      setgref(gref.filter(gr => gr.gref_id !== id));
    } catch (err) {
      console.error(err.message);
    }
  };

  const getgreffier = async () => {
    try {
      const response = await fetch("/greffier/list");
      const jsonData = await response.json();
      
      setgref(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getgreffier();
  }, []);


  return (
    <Fragment>
      {" "}
      <table className="table table table-hover mt-5 text-center">
        <thead  className="table-dark">
          <tr>
            <th>Nom</th>
            <th>Prenom</th>
            <th>Date de naissance</th>
            <th>Adresse</th>
            <th>Etat civile</th>
            <th>Nombre_e</th>
            <th>Type de payement</th>
            <th>Base</th>
            <th>Cin</th>
            <th>Téléphone</th>
            <th>Categorie</th>
            <th>Echelon</th>
            <th>Crss</th>
            <th>Contrat</th>
            <th>Sexe</th>
            <th>Date_emb</th>
            <th>Actif</th>
            <th>Unk1</th>
            <th>Unk2</th>
            <th>Modifier</th>
            <th>Supprimer</th>
          </tr>
        </thead>
        <tbody>
          {gref.map(gr => (
            <tr key={gr.gref_id}>

            <td>{gr.nom}</td>
            <td>{gr.prenom}</td>
            <td>{gr.date_nais}</td>
            <td>{gr.adresse}</td>
            <td>{gr.etat_civile}</td>
            <td>{gr.nombre_e}</td>
            <td>{gr.type_payement}</td>
            <td>{gr.base}</td>
            <td>{gr.cin}</td>
            <td>{gr.Tel}</td>
            <td>{gr.categorie}</td>
            <td>{gr.echelon}</td>
            <td>{gr.crss}</td>
            <td>{gr.contrat}</td>
            <td>{gr.sexe}</td>
            <td>{gr.date_emb}</td>
            <td>{gr.actif}</td>
            <td>{gr.unk1}</td>
            <td>{gr.unk2}</td>
            <td>Modifier</td>
            <td>Supprimer</td>
              <td>
                <EditGreffier gref={gr} />
              </td>
              <td>
              <button
                  className="btn btn-danger"
                  onClick={() => deletegreffier(gr.gref_id)}
                >
                  Supprimer
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
  );
};

export default ListGreffier;