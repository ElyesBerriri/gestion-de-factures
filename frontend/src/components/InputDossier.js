import React, { Fragment, useState } from "react";
import Button from 'react-bootstrap/Button';
import { GoPlus } from "react-icons/go";
import Modal from 'react-bootstrap/Modal';

const InputDossier = () => {
  const [libelle, setLibelle] = useState("");
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = { libelle };
      await fetch("/dossiers/list", {
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
      <h1 className="title">Emplacement des dossiers</h1>
       
<div className="ajoutdossier">
      <button className="ajouter" onClick={handleShow} ><GoPlus color="#00adb5" fontSize="1.5em" />
      </button>
</div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Ajouter un dossier</Modal.Title>
        </Modal.Header>

        <Modal.Body> 
      <div className="row">
      <div className="input-group mb-3">
      <span className="input-group-text text-secondary ">Libellé :</span>

              <input
          type="text"
          className="form-control"
          value={libelle}
          onChange={e => setLibelle(e.target.value)}
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

export default InputDossier;