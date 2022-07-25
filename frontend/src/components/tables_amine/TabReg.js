import React, { Fragment, useState,useEffect } from "react";
import InputReg from "./InputReg";

const TabReg =(props)=>{

    const [reglement, setReglement] = useState([]);
    const [reg, setReg] = useState("");
    const [montant, setMontant] = useState("");
    const [typee, setTypee] = useState("");
    const [bare, setBare] = useState("");
    const [num_operation, setNumOp] = useState("");
    const [banque, setBanque] = useState("");
    const [porteur, setPorteur] = useState("");
    const [dossier_id, setidd] = useState(10);
    const [echeance, setEcheance] = useState("");
    const [idreg, setIdReg] = useState("")
    ;

    const getreglement = async (id,a) => {
      if (id!==0){
      try {
        const response = await fetch(`/reglement/listtotal/${id}`);
        const jsonData = await response.json();
        setReglement(jsonData);
        setReg(a);
        props.changereglements(jsonData);
      } 
      catch (err) {
        console.error(err.message);
      }}
    };

    const deletereglement= async id => {
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
    <Fragment>
       {" "}
      <table className="table table table-hover mt-5 text-center">
        <thead  className="table-dark">
          <tr>
            <th>Honoraire de l'avocat</th>
            <th>Net à payer</th>
            <th>Montant</th>
            <th>Type</th>
            <th>Baré</th>
            <th>Numéro opération</th>
            <th>Banque</th>
            <th>Porteur</th>
            <th>Echéance</th>
          </tr>
        </thead>
        <tbody>
          {reglement.map(reglement => (
            <tr key={reglement.id_reg} onClick={()=> {setIdReg(reglement.id_reg)}}>
              <td>{reglement.hono_avo}</td>
              <td>{reglement.net_payer}</td>
              <td>{reglement.montant}</td>
              <td>{reglement.typee}</td>
              <td>{reglement.bare}</td>
              <td>{reglement.num_operation}</td>
              <td>{reglement.banque}</td>
              <td>{reglement.porteur}</td>
              <td>{reglement.echeance}</td>
            </tr>
           ))}
        </tbody>
      </table>
      <div>
        <button
            className="btn btn-danger"
            onClick={() => deletereglement(idreg)}>
                    Supprimer réglement 
        </button>


        <InputReg changereg={(e,a)=>getreglement(e,a)}
         dossier_id={props.dossier_id} />

    </div>
    </Fragment>
)
     
}

export default TabReg;