import React, { Fragment, useState } from "react";
import Button from 'react-bootstrap/Button';
import { GoPlus } from "react-icons/go";
import Modal from 'react-bootstrap/Modal';

const InputRecetteFinance = () => {
  const [libelle, setLibelle] = useState("");
  const [montant, setMontant] = useState(0);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = { libelle,montant };
      await fetch("/recettefinance/list", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      });

      window.location.reload();
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Fragment>
      <h1 className="titlee">Recettes de finance</h1>
     
      <button className="ajouter ajoutdossier" onClick={handleShow} ><GoPlus color="#BBA14A" fontSize="1.5em" />
      </button>
       
      
      <Modal scrollable show={show} onHide={handleClose} backdrop="static">
        <Modal.Header closeButton>
          <Modal.Title>Ajouter un collaborateur</Modal.Title>
        </Modal.Header>
  
  
        <Modal.Body> 

        <div className="row">
      <div className="input-group mb-3">
      <span className="input-group-text">Libellé :</span>
      <input type="text" 
          className="form-control  "  
          placeholder="Libellé"
         // value={libelle}
          onChange={e => setLibelle(e.target.value||"-")}/>
      </div>
      </div>
       
      <div className="row">
      <div className="input-group mb-3">
      <span className="input-group-text">Montant :</span>
      <input type="number" 
        className="form-control  "  
        placeholder="Montant"
        //value={montant}
        onChange={e => setMontant(e.target.value||0)}/>
      </div>
      </div>
      
      </Modal.Body>
      
      
      <Modal.Footer>
           <Button variant="light" id="valider"  
        onClick={onSubmitForm}>Valider</Button>
        <Button variant="dark" data-bs-dismiss="modal"  onClick={handleClose}>Fermer</Button>
          </Modal.Footer>
         
       
          </Modal>
    </Fragment>
  );
};

export default InputRecetteFinance;