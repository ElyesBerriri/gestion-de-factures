import React, { Fragment, useState } from "react";
import Button from 'react-bootstrap/Button';
import { GoPlus } from "react-icons/go";
import Modal from 'react-bootstrap/Modal';

const InputHono = () => {
  const [lib_arab, setLib_arab] = useState("");
  const [lib_fr, setLib_fr] = useState("");
  const [montant, setMontant] = useState("");
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = { lib_arab,lib_fr,montant };
      await fetch("/honoraires/list/", {
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
      <h1 className="titlee">Honoraires en extra</h1>
      <button className="ajouter ajoutdossier" onClick={handleShow} ><GoPlus color="#00adb5" fontSize="1.5em" />
      </button>
 

      <Modal show={show} onHide={handleClose}   backdrop="static">
        <Modal.Header closeButton>
          <Modal.Title>Ajouter un dossier</Modal.Title>
        </Modal.Header>


        <Modal.Body> 
        <div className="row">
      <div className="input-group mb-3">
      <span className="input-group-text ">Libellé Arabe :</span>

              <input
          type="text"
          className="form-control"
          value={lib_arab}
          onChange={e => setLib_arab(e.target.value)}
        />
      </div>
      </div>
      
      <div className="row">
      <div className="input-group mb-3">
      <span className="input-group-text ">Libellé Français :</span>

              <input
          type="text"
          className="form-control"
          value={lib_fr}
          onChange={e => setLib_fr(e.target.value)}
        />
      </div>
      </div>
        
      <div className="row">
      <div className="input-group mb-3">
      <span className="input-group-text ">Montant :</span>

              <input
          type="text"
          className="form-control"
          value={montant}
          onChange={e => setMontant(e.target.value)}
        />
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

export default InputHono;