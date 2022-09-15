import React, { Fragment,useState,useEffect }  from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { GoPlus } from "react-icons/go";

const InputReg = (props) => {
  const [dossier_id, setidd] = useState(10);
  const [hono_avo, setHonoAvo] = useState(0);
  const [net_payer, setNetPayer] = useState(0);
  const [montant, setMontant] = useState(0);
  const [typee, setTypee] = useState("-");
  const [bare, setBare] = useState("-");
  const [num_operation, setNumOp] = useState("-");
  const [banque, setBanque] = useState("-");
  const [porteur, setPorteur] = useState("-");
  const [echeance, setEcheance] = useState("-");
  const [broui, setbroui] = useState("oui");
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const onSubmitForm = async (e) => {
    try {
      const body = { dossier_id,hono_avo,net_payer,montant,typee,bare,num_operation,banque,porteur,echeance,broui };
      await fetch("/reglement/list", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      });
      setEcheance("-");
      setPorteur("-");
      setBanque("-");
      setNumOp("-");
      setNetPayer(0);
      setHonoAvo(0);
      setMontant(0);
      setTypee("-");
      setBare("-");
      
      props.changereg(props.dossier_id);
    } catch (err) {
      console.error(err.message);
    }
  };


  useEffect(() => {
    setidd(props.dossier_id);
  }, [props.dossier_id]);

  return (

    <Fragment>
      
     <div className="rechercheajout">
     <button className="ajouter ajouterr" onClick={handleShow} ><GoPlus color="#BBA14A" fontSize="1.5em" />
      </button>
</div>

  
<Modal show={show} onHide={handleClose} animation={false}   backdrop="static">
        <Modal.Header closeButton>
          <Modal.Title>Nouveau Réglement</Modal.Title>
        </Modal.Header>
  
        <Modal.Body> 

        <div className="row">
      <div className="input-group mb-3">
      <span className="input-group-text ">Honoraire de l'avocat :</span>
        <input type="number" className="form-control "  
        placeholder="Honoraire de l'avocat"
         //value={hono_avo}
         onChange={e => setHonoAvo(e.target.value||0)}/>
    </div>
    </div>
        

    <div className="row">
      <div className="input-group mb-3">
      <span className="input-group-text ">Net à payer :</span>
        <input type="number" className="form-control " 
          placeholder="Net à payer"
          //value={net_payer}
          onChange={e => setNetPayer(e.target.value||0)}/>
    </div>
    </div>
   
    <div className="row">
      <div className="input-group mb-3">
      <span className="input-group-text ">Montant :</span>
        <input type="number" className="form-control "  
          placeholder="Montant"
          //value={montant}
          onChange={e => setMontant(e.target.value||0)}/>
    </div>
    </div>
   
    <div className="row">
      <div className="input-group mb-3">
      <span className="input-group-text ">Type :</span>
        <input type="text" className="form-control "  
           placeholder="Type"
           //value={typee}
           onChange={e => setTypee(e.target.value||"-")}/>
    </div>
    </div>
    
    <div className="row">
      <div className="input-group mb-3">
      <span className="input-group-text ">Baré :</span>
        <input type="text" className="form-control "  
          placeholder="Baré"
          //value={bare}
          onChange={e => setBare(e.target.value||"-")}/>
    </div>
    </div>
   
    <div className="row">
      <div className="input-group mb-3">
      <span className="input-group-text ">Numéro opération :</span>
        <input type="text" className="form-control "  
          placeholder="Numéro opération"
          //value={num_operation}
          onChange={e => setNumOp(e.target.value||"-")}/>
    </div>
    </div>
    
    <div className="row">
      <div className="input-group mb-3">
      <span className="input-group-text ">Banque :</span>
        <input type="text" className="form-control "  
          placeholder="Banque"
          //value={banque}
          onChange={e => setBanque(e.target.value||"-")}/>
    </div>
    </div>
    
    <div className="row">
      <div className="input-group mb-3">
      <span className="input-group-text ">Porteur :</span>
        <input type="text" className="form-control "  
          placeholder="Porteur"
          //value={porteur}
          onChange={e => setPorteur(e.target.value||"-")}/>
    </div>
    </div>
    

    <div className="row">
      <div className="input-group mb-3">
      <span className="input-group-text ">Echéance :</span>
        <input type="text" className="form-control "  
          placeholder="Echéance"
           //value={echeance}
           onChange={e => setEcheance(e.target.value||"-")}/>
    </div>
    </div>
    
    </Modal.Body>
 
    <Modal.Footer>
           
           <Button variant="light" id="valider" onClick={()=>{handleClose();onSubmitForm()}}>
             Valider
           </Button>
           <Button variant="dark" onClick={handleClose}>
             Fermer
           </Button>
         </Modal.Footer>
       </Modal>
      

  </Fragment>

  );
};

export default InputReg;