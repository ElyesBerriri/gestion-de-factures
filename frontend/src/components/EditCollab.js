import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const EditCollab = ({ collab }) => {
  const [nom, setnom] = useState(collab.nom);
  const [cin, setcin] = useState(collab.cin);
  const [ville, setville] = useState(collab.ville);
  const [rue, setrue] = useState(collab.rue);
  const [num, setnum] = useState(collab.num);
  const [codepostale, setcodepostale] = useState(collab.codepostale);
  const [activite, setactivite] = useState(collab.activite);
  const [tel, settel] = useState(collab.tel);
  const [fax, setfax] = useState(collab.fax);
  const [email, setemail] = useState(collab.email);
  const [matricule, setmatricule] = useState(collab.matricule);
  const [methodepaiment, setmethodepaiment] = useState(collab.methodepaiment);
  const [montant, setmontant] = useState(collab.montant);
  const [nombre_dossier, setnombre_dossier] = useState(collab.nombre_dossier);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const updateCollab = async e => {
    e.preventDefault();
    try {
      const body = { nom, cin, ville, rue, num, codepostale, activite, tel, fax, email, matricule, methodepaiment, montant, nombre_dossier };
      await fetch(
        `/collaborateurs/list/${collab.collab_id}`,
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
      <Button variant="light" id="clbtnm" className="mx-3 disabled" onClick={() => {
        handleShow(); setnom(collab.nom);
        setcin(collab.cin);
        setville(collab.ville);
        setrue(collab.rue);
        setnum(collab.num);
        setcodepostale(collab.codepostale);
        setactivite(collab.activite);
        settel(collab.tel);
        setfax(collab.fax);
        setemail(collab.email);
        setmatricule(collab.matricule);
        setmethodepaiment(collab.methodepaiment);
        setmontant(collab.montant);
        setnombre_dossier(collab.nombre_dossier)
      }}>
        Modifier
      </Button>

      <Modal
        scrollable
        show={show}
        onHide={handleClose}
        backdrop="static" >
        <Modal.Header closeButton>
          <Modal.Title>Modification du collaborateur</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <div className="row">
            <div className="input-group mb-3">
              <span className="input-group-text ">Nom :</span>
              <input
                type="text"
                className="form-control"
                defaultValue={nom}
                onChange={e => setnom(e.target.value||"-")}
              />
            </div>
          </div>

          <div className="row">
            <div className="input-group mb-3">
              <span className="input-group-text ">CIN :</span>
              <input
                type="number"
                className="form-control"
                defaultValue={cin}
                onChange={e => setcin(e.target.value||0)}
              />
            </div>
          </div>

          <div className="row">
            <div className="input-group mb-3">
              <span className="input-group-text ">Ville :</span>
              <input
                type="text"
                className="form-control"
                defaultValue={ville}
                onChange={e => setville(e.target.value||"-")}
              />
            </div>
          </div>

          <div className="row">
            <div className="input-group mb-3">
              <span className="input-group-text  ">Rue :</span>
              <input
                type="text"
                className="form-control"
                defaultValue={rue}
                onChange={e => setrue(e.target.value||"-")}
              />
            </div>
          </div>


          <div className="row">
            <div className="input-group mb-3">
              <span className="input-group-text ">Num :</span>
              <input
                type="number"
                className="form-control"
                defaultValue={num}
                onChange={e => setnum(e.target.value||0)}
              />
            </div>
          </div>

          <div className="row">
            <div className="input-group mb-3">
              <span className="input-group-text ">Code Postale :</span>
              <input
                type="number"
                className="form-control"
                defaultValue={codepostale}
                onChange={e => setcodepostale(e.target.value||0)}
              />
            </div>

          </div>
          <div className="row">
            <div className="input-group mb-3">
              <span className="input-group-text  ">Activité :</span>
              <input
                type="text"
                className="form-control"
                defaultValue={activite}
                onChange={e => setactivite(e.target.value||"-")}
              />
            </div>
          </div>

          <div className="row">
            <div className="input-group mb-3">
              <span className="input-group-text ">Téléphone :</span>
              <input
                type="number"
                className="form-control"
                defaultValue={tel}
                onChange={e => settel(e.target.value||0)}
              />
            </div>
          </div>

          <div className="row">
            <div className="input-group mb-3">
              <span className="input-group-text">Fax :</span>
              <input
                type="number"
                className="form-control"
                defaultValue={fax}
                onChange={e => setfax(e.target.value||0)}
              />
            </div>
          </div>

          <div className="row">
            <div className="input-group mb-3">
              <span className="input-group-text ">Email :</span>
              <input
                type="text"
                className="form-control"
                defaultValue={email}
                onChange={e => setemail(e.target.value||"-")}
              />
            </div>
          </div>

          <div className="row">
            <div className="input-group mb-3">
              <span className="input-group-text  ">Matricule :</span>
              <input type="text"
                className="form-control"
                defaultValue={matricule}
                onChange={e => setmatricule(e.target.value||"-")}
              />
            </div>
          </div>


          <div className="row">
            <div className="input-group mb-3">
              <span className="input-group-text ">Methode de paiement :</span>
              <input
                type="text"
                className="form-control"
                defaultValue={methodepaiment}
                onChange={e => setmethodepaiment(e.target.value||"-")}
              />
            </div>
          </div>

          <div className="row">
            <div className="input-group mb-3">
              <span className="input-group-text ">Montant :</span>
              <input
                type="number"
                className="form-control"
                defaultValue={montant}
                onChange={e => setmontant(e.target.value||0)}
              />
            </div>
          </div>

          <div className="row">
            <div className="input-group mb-3">
              <span className="input-group-text  ">Nombre dossier :</span>
              <input type="number"
                className="form-control"
                defaultValue={nombre_dossier}
                onChange={e => setnombre_dossier(e.target.value||0)}
              />
            </div>
          </div>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="light" id="valider"
            onClick={e => {handleClose();updateCollab(e)}}
          >Valider</Button>
          <Button variant="dark" onClick={handleClose}>Fermer</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default EditCollab;