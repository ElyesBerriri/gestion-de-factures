import React, { Fragment, useState,useEffect } from "react";
import InputReg from "./InputReg";
import Button from 'react-bootstrap/Button';

const TabReg =(props)=>{

    const [reglement, setReglement] = useState([]);
    const [reg, setReg] = useState("--");
    const [montant, setMontant] = useState("--");
    const [typee, setTypee] = useState("--");
    const [bare, setBare] = useState("--");
    const [num_operation, setNumOp] = useState("--");
    const [banque, setBanque] = useState("--");
    const [porteur, setPorteur] = useState("--");
    const [dossier_id, setidd] = useState(10);
    const [echeance, setEcheance] = useState("--");
    const [idreg, setIdReg] = useState("--");
    const [row, setRow] = useState("");

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
      setRow("");
      document.getElementById("clbtnrrrr").className="btn btn-dark disabled";
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
            <h1 className='titlee' >Liste des Réglements</h1>


            <InputReg changereg={(e,a)=>getreglement(e,a)}
         dossier_id={props.dossier_id} />

            <div className="table-responsive m-3 mytable  mytable-56 ">
        <table className="table table-hover text-center">
          <thead className="table-secondary text-secondary mytableheader">
          <tr>
            <th scope="col">Honoraire de l'avocat</th>
            <th scope="col">Net à payer</th>
            <th scope="col">Montant</th>
            <th scope="col">Type</th>
            <th scope="col">Baré</th>
            <th scope="col">Numéro opération</th>
            <th scope="col">Banque</th>
            <th scope="col">Porteur</th>
            <th scope="col">Echéance</th>
          </tr>
        </thead>
        <tbody>
          {reglement.map(reglement => (
            <tr key={reglement.id_reg} id={`reglement${reglement.id_reg}`} onClick={()=> {setIdReg(reglement.id_reg);

              let e = document.getElementById(`reglement${reglement.id_reg}`);
              if (e.className !== "table-secondary") {
                if (row !== "") document.getElementById(row).className = "";
                e.className = "table-secondary";
                setRow(`reglement${reglement.id_reg}`);
                document.getElementById("clbtnrrrr").className="btn btn-dark";

                 }}}>
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
</div>

      <div className="modifsupp">
     <Button variant="dark" id="clbtnrrrr" className="disabled"  onClick={() => deletereglement(idreg)}>
     Supprimer
       </Button>
</div>
    
    </Fragment>
)
     
}

export default TabReg;