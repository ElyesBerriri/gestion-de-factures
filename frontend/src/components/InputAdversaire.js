import React, { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { GoPlus } from "react-icons/go";

const InputAdversaire = (props) => {
  const [nom, setNom] = useState("*");
  const [registre, setRegistre] = useState("*");
  const [adresse, setAdresse] = useState("*");
  const [adresse_d, setAdressed] = useState("*");
  const [avocat, setAvocat] = useState("*");
  const [adresse_a, setAdresseav] = useState("*");
  const [dossier_id, setidd] = useState(10);
  const [brouillon, setbrouillon] = useState("oui");
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const onSubmitForm = async (e) => {
    try {
      const body = { dossier_id, nom, registre, adresse, adresse_d, avocat, adresse_a, brouillon };
      await fetch("/adversaire/list", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      });
      setNom("*");
      setRegistre("*");
      setAdresse("*");
      setAdresseav("*");
      setAvocat("*");
      setAdressed("*");
      props.changeadv(props.dossier_id);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    setidd(props.dossier_id);
  }, [props.dossier_id]);

 
  return (
    <>
      <div className="rechercheajout">
        <button className="ajouter ajouterr" onClick={handleShow} ><GoPlus color="#00adb5" fontSize="1.5em" />
        </button>
      </div>
       
<Modal scrollable show={show} onHide={handleClose}   backdrop="static">
 
        <Modal.Header closeButton>
          <Modal.Title>Nouveau Adversaire</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="input-group mb-3">
              <span className="input-group-text ">Nom et Prénom :</span>
              <input type="text" className="form-control "
                value={nom}
                onChange={e => setNom(e.target.value)} />
            </div>
          </div>

          <div className="row">
            <div className="input-group mb-3">
              <span className="input-group-text ">Registre :</span>
              <input type="text" className="form-control "
                value={registre}
                onChange={e => setRegistre(e.target.value)} />
            </div>
          </div>

          <div className="row">
            <div className="input-group mb-3">
              <span className="input-group-text ">Adresse :</span>
              <input type="text" className="form-control "
                value={adresse}
                onChange={e => setAdresse(e.target.value)} />
            </div>
          </div>

          <div className="row">
            <div className="input-group mb-3">
              <span className="input-group-text ">Adresse Designée :</span>
              <input type="text" className="form-control "
                value={adresse_d}
                onChange={e => setAdressed(e.target.value)} />
            </div>
          </div>

          <div className="row">
            <div className="input-group mb-3">
              <span className="input-group-text ">Avocat :</span>
              <input type="text" className="form-control "
                value={avocat}
                onChange={e => setAvocat(e.target.value)} />
            </div>
          </div>

          <div className="row">
            <div className="input-group mb-3">
              <span className="input-group-text ">Adresse avocat :</span>
              <input type="text" className="form-control "
                value={adresse_a}
                onChange={e => setAdresseav(e.target.value)} />
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="light" id="valider" onClick={() => { handleClose(); onSubmitForm() }}>
            Valider
          </Button>
          <Button variant="dark" onClick={handleClose}>
            Fermer
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default InputAdversaire;


