import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Modal from 'react-bootstrap/Modal';

const EditTimbre = ({ timbre }) => {
  console.log(timbre);
  const [libelle, setLibelle] = useState(timbre.libelle);
  const [montant, setMontant] = useState(timbre.montant);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const updateTimbre = async e => {
    e.preventDefault();
    try {
      const body = { libelle, montant };
      await fetch(
        `/timbres/list/${timbre.tim_id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body)
        }
      );
      window.location.reload();
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <> 
      <Button variant="light" id="tme" className="mb-3 mx-3 disabled"  
      onClick={() => {handleShow();
          setLibelle(timbre.libelle);
          setMontant(timbre.montant);
        }}>
        Modifier
      </Button>

       

            <Modal
        scrollable
        show={show}
        onHide={handleClose}
        backdrop="static" >
        <Modal.Header closeButton>
          <Modal.Title>Modification  d'un timbre</Modal.Title>
        </Modal.Header>

        <Modal.Body>
              <div className="row">
                <div className="input-group mb-3">
                  <span className="input-group-text ">Libellé :</span>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Libellé"
                    defaultValue={libelle}
                    onChange={e => setLibelle(e.target.value||"-")} />
                </div>
              </div>

              <div className="row">
                <div className="input-group mb-3">
                  <span className="input-group-text ">Montant :</span>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Montant"
                    defaultValue={montant}
                    onChange={e => setMontant(e.target.value||0)} />
                </div>
              </div>
              </Modal.Body>

              <Modal.Footer>
          <Button variant="light" id="valider"
            onClick={e => {handleClose();updateTimbre(e)}}
          >Valider</Button>
          <Button variant="dark" onClick={handleClose}>Fermer</Button>
        </Modal.Footer>
      </Modal>
             
          
      
    </>
  );
};

export default EditTimbre;