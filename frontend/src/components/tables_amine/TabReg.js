import React, { useState } from "react";
import InputReg from "./InputReg";
import Button from 'react-bootstrap/Button';

const TabReg = (props) => {

  const [reglement, setReglement] = useState([]);
  const [reg, setReg] = useState("-");
  const [montant, setMontant] = useState("-");
  const [typee, setTypee] = useState("-");
  const [bare, setBare] = useState("-");
  const [num_operation, setNumOp] = useState("-");
  const [banque, setBanque] = useState("-");
  const [porteur, setPorteur] = useState("-");
  const [dossier_id, setidd] = useState(10);
  const [echeance, setEcheance] = useState("-");
  const [idreg, setIdReg] = useState("-");
  const [row, setRow] = useState("-");

  const getreglement = async (id, a) => {
    if (id !== 0) {
      try {
        const response = await fetch(`/reglement/listtotal/${id}`);
        const jsonData = await response.json();
        setReglement(jsonData);
        setReg(a);
        props.changereglements(jsonData);
      }
      catch (err) {
        console.error(err.message);
      }
    }
  };

  const deletereglement = async id => {
    setRow("");
    document.getElementById("clbtnrrrr").className = "btn btn-dark disabled";
    try {
      await fetch(`/reglement/list/${id}`, {
        method: "DELETE"
      });
      setReglement(reglement.filter(reglement => reglement.id_reg !== id));
      props.changereglements(reglement.filter(reglement => reglement.id_reg !== id));
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <>
      <h1 className='titlee'>Liste des Réglements</h1>
      <InputReg changereg={(e, a) => getreglement(e, a)}
        dossier_id={props.dossier_id} />

      <div className="table-responsive m-3 mytable  mytable-56 ">
        <table className="table table-hover text-center">
          <thead className="table-secondary text-secondary mytableheader">
            <tr>
              <th scope="col" className="text-nowrap">Honoraire de l'avocat</th>
              <th scope="col" className="text-nowrap">Net à payer</th>
              <th scope="col">Montant</th>
              <th scope="col">Type</th>
              <th scope="col">Baré</th>
              <th scope="col" className="text-nowrap">Numéro opération</th>
              <th scope="col">Banque</th>
              <th scope="col">Porteur</th>
              <th scope="col">Echéance</th>
            </tr>
          </thead>
          <tbody>
            {reglement.map(reglement => (
              <tr key={reglement.id_reg} id={`reglement${reglement.id_reg}`} onClick={() => {
                setIdReg(reglement.id_reg);
                let e = document.getElementById(`reglement${reglement.id_reg}`);
                if (e.className !== "table-secondary") {
                  if (row !== "") document.getElementById(row).className = "";
                  e.className = "table-secondary";
                  setRow(`reglement${reglement.id_reg}`);
                  document.getElementById("clbtnrrrr").className = "btn btn-dark";
                }
              }}>
                <td data-label="Honoraire de l'avocat" className="text-nowrap">{reglement.hono_avo}</td>
                <td data-label="Net à payer" className="text-nowrap">{reglement.net_payer}</td>
                <td data-label="Montant" className="text-nowrap">{reglement.montant}</td>
                <td data-label="Type" className="text-nowrap">{reglement.typee}</td>
                <td data-label="Baré" className="text-nowrap">{reglement.bare}</td>
                <td data-label="Numéro opération" className="text-nowrap">{reglement.num_operation}</td>
                <td data-label="Banque" className="text-nowrap">{reglement.banque}</td>
                <td data-label="Porteur" className="text-nowrap">{reglement.porteur}</td>
                <td data-label="Echéance" className="text-nowrap">{reglement.echeance}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="modifsupp">
        <Button variant="dark" id="clbtnrrrr" className="disabled" onClick={() => deletereglement(idreg)}>
          Supprimer
        </Button>
      </div>
    </>
  )
}

export default TabReg;