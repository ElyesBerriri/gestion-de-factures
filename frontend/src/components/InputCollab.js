import React, { Fragment, useState } from "react";
import Button from 'react-bootstrap/Button';
import { GoPlus } from "react-icons/go";
import Modal from 'react-bootstrap/Modal';

const InputCollab = () => {

  const [nom, setnom] = useState("-");
  const [cin, setcin] = useState(0);
  const [ville, setville] = useState("-");
  const [rue, setrue] = useState("-");
  const [num, setnum] = useState(0);
  const [codepostale, setcodepostale] = useState(0);
  const [activite, setactivite] = useState("-");
  const [tel, settel] = useState(0);
  const [fax, setfax] = useState(0);
  const [email, setemail] = useState("-");
  const [matricule, setmatricule] = useState("-");
  const [methodepaiment, setmethodepaiment] = useState("-");
  const [montant, setmontant] = useState(0);
  const [nombre_dossier, setnombre_dossier] = useState(0);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const onSubmitForm = async (e) => {
    e.preventDefault();

    try {

      const body = { nom, cin, ville, rue, num, codepostale, activite, tel, fax, email, matricule, methodepaiment, montant, nombre_dossier };
      await fetch("/collaborateurs/list", {
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

      <button className="ajouter ajouterr" onClick={handleShow} ><GoPlus color="#BBA14A" fontSize="1.5em" />
      </button>

      <Modal scrollable show={show} onHide={handleClose} backdrop="static">
        <Modal.Header closeButton>
          <Modal.Title>Ajouter un collaborateur</Modal.Title>
        </Modal.Header>


        <Modal.Body>

      <div className="row">
        <div className="input-group mb-3">
          <span className="input-group-text  ">Nom :</span>

          <input type="text"
            className="form-control"
            placeholder="Nom"
            onChange={e => setnom(e.target.value||"-")} />
        </div>
      </div>

          <div className="row">
            <div className="input-group mb-3">
              <span className="input-group-text ">CIN :</span>

              <input type="number"
                className="form-control"
                placeholder="CIN"
                onChange={e => setcin(e.target.value||0)} />
            </div>
          </div>

          <div className="row">
            <div className="input-group mb-3">
              <span className="input-group-text ">Ville :</span>

              <input type="text"
                className="form-control"
                placeholder="Ville"
                onChange={e => setville(e.target.value||"-")} />
            </div>
          </div>

          <div className="row">
            <div className="input-group mb-3">
              <span className="input-group-text  ">Rue :</span>

              <input type="text" className="form-control "
                placeholder="Rue"
                onChange={e => setrue(e.target.value||"-")} />
            </div>
          </div>


          <div className="row">
            <div className="input-group mb-3">
              <span className="input-group-text ">Numéro :</span>
              <input type="number" className="form-control "
                placeholder="Numéro"
                onChange={e => setnum(e.target.value||0)} />
            </div>
          </div>

          <div className="row">
            <div className="input-group mb-3">
              <span className="input-group-text ">Code postale :</span>
              <input type="number" className="form-control "
                placeholder="Code postale"
                onChange={e => setcodepostale(e.target.value||0)} />
            </div>
          </div>

          <div className="row">
            <div className="input-group mb-3">
              <span className="input-group-text  ">Activité :</span>
              <input type="text" className="form-control "
                placeholder="Activité"
                onChange={e => setactivite(e.target.value||"-")} />
            </div>
          </div>

          <div className="row">
            <div className="input-group mb-3">
              <span className="input-group-text ">Téléphone :</span>
              <input type="number" className="form-control "
                placeholder="Téléphone"
                onChange={e => settel(e.target.value||0)} />
            </div>
          </div>

          <div className="row">
            <div className="input-group mb-3">
              <span className="input-group-text ">Fax :</span>
              <input type="number" className="form-control "
                placeholder="Fax"
                onChange={e => setfax(e.target.value||0)} />
            </div>
          </div>

          <div className="row">
            <div className="input-group mb-3">
              <span className="input-group-text ">Email :</span>
              <input type="text" className="form-control "
                placeholder="Email"
                onChange={e => setemail(e.target.value||"-")} />
            </div>
          </div>

          <div className="row">
            <div className="input-group mb-3">
              <span className="input-group-text">Matricule :</span>
              <input type="text" className="form-control "
                placeholder="Matricule"
                onChange={e => setmatricule(e.target.value||"-")} />
            </div>
          </div>

          <div className="row">
            <div className="input-group mb-3">
              <span className="input-group-text ">Methode de paiement :</span>
              <input type="text" className="form-control "
                placeholder="Methode de paiement "
                onChange={e => setmethodepaiment(e.target.value||"-")} />
            </div>
          </div>


          <div className="row">
            <div className="input-group mb-3">
              <span className="input-group-text ">Montant :</span>
              <input type="number" className="form-control " id="colFormLabelSm"
                placeholder="Montant"
                onChange={e => setmontant(e.target.value||0)} />
            </div>
          </div>


          <div className="row">
            <div className="input-group mb-3">
              <span className="input-group-text">Nombre Dossier :</span>
              <input type="number" className="form-control  "
                placeholder="Nombre Dossier"
                onChange={e => setnombre_dossier(e.target.value||0)} />
            </div>
          </div>

        </Modal.Body >


  <Modal.Footer>
    <Button variant="light" id="valider"
      onClick={onSubmitForm}>Valider</Button>
    <Button variant="dark" data-bs-dismiss="modal" onClick={handleClose}>Fermer</Button>
  </Modal.Footer>


      </Modal >
    </Fragment >
     
  );
};

export default InputCollab;


