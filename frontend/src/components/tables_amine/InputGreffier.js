import React, { Fragment, useState } from "react";
import Button from 'react-bootstrap/Button';
import { GoPlus } from "react-icons/go";
import Modal from 'react-bootstrap/Modal';

const InputGreffier = () => {
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [date_nais, setDate_nais] = useState("");
  const [adresse, setAdresse] = useState("");
  const [etat_civile, setEtat_civile] = useState("");
  const [nombre_e, setNombre_e] = useState("");
  const [type_payement, setType_payement] = useState("");
  const [base, setBase] = useState("");
  const [cin, setCin] = useState("");
  const [tel, setTel] = useState("");
  const [categorie, setCategorie] = useState("");
  const [echelon, setEchelon] = useState("");
  const [crss, setCrss] = useState("");
  const [contrat, setContrat] = useState("");
  const [sexe, setSexe] = useState("");
  const [date_emb, setDate_emb] = useState("");
  const [actif, setActif] = useState("");
  const [unk1, setUnk1] = useState("");
  const [unk2, setUnk2] = useState("");
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = { nom, prenom, date_nais, adresse, etat_civile, nombre_e, type_payement, base, cin, tel, categorie, echelon, crss, contrat, sexe, date_emb, actif, unk1, unk2 };
      await fetch("/greffier/list", {
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
      <h1 className="title">Greffiers</h1>
      <button className="ajouter ajouterr" onClick={handleShow} ><GoPlus color="#00adb5" fontSize="1.5em" />
      </button>

      <Modal scrollable show={show} onHide={handleClose} backdrop="static">
        <Modal.Header closeButton>
          <Modal.Title>Ajouter un greffier</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <div className="row">
            <div className="input-group mb-3">
              <span className="input-group-text  ">Nom :</span>
              <input type="text"
                className="form-control"
                value={nom}
                onChange={e => setNom(e.target.value)} />
            </div>
          </div>

          <div className="row">
            <div className="input-group mb-3">
              <span className="input-group-text  ">Prénom :</span>
              <input type="text"
                className="form-control"
                value={prenom}
                onChange={e => setPrenom(e.target.value)} />
            </div>
          </div>

          <div className="row">
            <div className="input-group mb-3">
              <span className="input-group-text  ">Data de naissance :</span>
              <input type="text"
                className="form-control"
                value={date_nais}
                onChange={e => setDate_nais(e.target.value)} />
            </div>
          </div>

          <div className="row">
            <div className="input-group mb-3">
              <span className="input-group-text  ">Adresse :</span>
              <input type="text"
                className="form-control"
                value={adresse}
                onChange={e => setAdresse(e.target.value)}
              />
            </div>
          </div>

          <div className="row">
            <div className="input-group mb-3">
              <span className="input-group-text  ">Etat civil :</span>
              <input type="text"
                className="form-control"
                value={etat_civile}
                onChange={e => setEtat_civile(e.target.value)}
              />
            </div>
          </div>

          <div className="row">
            <div className="input-group mb-3">
              <span className="input-group-text  ">Nombre_e :</span>
              <input type="number"
                className="form-control"
                value={nombre_e}
                onChange={e => setNombre_e(e.target.value)} />
            </div>
          </div>

          <div className="row">
            <div className="input-group mb-3">
              <span className="input-group-text  ">Type de paiement :</span>
              <input type="text"
                className="form-control"
                value={type_payement}
                onChange={e => setType_payement(e.target.value)}
              />
            </div>
          </div>


          <div className="row">
            <div className="input-group mb-3">
              <span className="input-group-text  ">Base :</span>
              <input type="number"
                className="form-control"
                value={base}
                onChange={e => setBase(e.target.value)} />
            </div>
          </div>

          <div className="row">
            <div className="input-group mb-3">
              <span className="input-group-text  ">CIN :</span>
              <input type="number"
                className="form-control"
                value={cin}
                onChange={e => setCin(e.target.value)} />
            </div>
          </div>

          <div className="row">
            <div className="input-group mb-3">
              <span className="input-group-text  ">Téléphone :</span>
              <input type="number"
                className="form-control"
                value={tel}
                onChange={e => setTel(e.target.value)} />
            </div>
          </div>

          <div className="row">
            <div className="input-group mb-3">
              <span className="input-group-text  ">Catégorie :</span>
              <input type="number"
                className="form-control"
                value={categorie}
                onChange={e => setCategorie(e.target.value)} />
            </div>
          </div>

          <div className="row">
            <div className="input-group mb-3">
              <span className="input-group-text  ">Echelon :</span>
              <input type="number"
                className="form-control"
                value={echelon}
                onChange={e => setEchelon(e.target.value)} />
            </div>
          </div>

          <div className="row">
            <div className="input-group mb-3">
              <span className="input-group-text  ">Crss :</span>
              <input type="number"
                className="form-control"
                value={crss}
                onChange={e => setCrss(e.target.value)} />
            </div>
          </div>


          <div className="row">
            <div className="input-group mb-3">
              <span className="input-group-text  ">Contrat :</span>
              <input type="text"
                className="form-control"
                value={contrat}
                onChange={e => setContrat(e.target.value)} />
            </div>
          </div>

          <div className="row">
            <div className="input-group mb-3">
              <span className="input-group-text  ">Sexe :</span>
              <input type="text"
                className="form-control"
                value={sexe}
                onChange={e => setSexe(e.target.value)} />
            </div>
          </div>

          <div className="row">
            <div className="input-group mb-3">
              <span className="input-group-text  ">Date_emb :</span>
              <input type="text"
                className="form-control"
                value={date_emb}
                onChange={e => setDate_emb(e.target.value)}
              />
            </div>
          </div>

          <div className="row">
            <div className="input-group mb-3">
              <span className="input-group-text  ">Actif :</span>
              <input type="text"
                className="form-control"
                value={actif}
                onChange={e => setActif(e.target.value)}
              />
            </div>
          </div>

          <div className="row">
            <div className="input-group mb-3">
              <span className="input-group-text  ">unk1 :</span>
              <input type="text"
                className="form-control"
                value={unk1}
                onChange={e => setUnk1(e.target.value)}
              />
            </div>
          </div>

          <div className="row">
            <div className="input-group mb-3">
              <span className="input-group-text  ">unk2 :</span>
              <input type="text"
                className="form-control"
                value={unk2}
                onChange={e => setUnk2(e.target.value)}
              />
            </div>
          </div>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="light" id="valider"
            onClick={onSubmitForm}>Valider</Button>
          <Button variant="dark" data-bs-dismiss="modal" onClick={handleClose}>Fermer</Button>
        </Modal.Footer>
      </Modal>
    </Fragment>
  );
};

export default InputGreffier;