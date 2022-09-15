import React, { Fragment, useState } from "react";
import Button from 'react-bootstrap/Button';
import { GoPlus } from "react-icons/go";
import Modal from 'react-bootstrap/Modal';
import CalendarComp from "../CalendarComp";

const InputGreffier = () => {
  const [nom, setNom] = useState("-");
  const [prenom, setPrenom] = useState("-");
  const [date_nais, setDate_nais] = useState("-");
  const [adresse, setAdresse] = useState("-");
  const [etat_civile, setEtat_civile] = useState("-");
  const [nombre_e, setNombre_e] = useState(0);
  const [type_payement, setType_payement] = useState("-");
  const [base, setBase] = useState(0);
  const [cin, setCin] = useState(0);
  const [tel, setTel] = useState(0);
  const [categorie, setCategorie] = useState(0);
  const [echelon, setEchelon] = useState(0);
  const [crss, setCrss] = useState(0);
  const [contrat, setContrat] = useState("-");
  const [sexe, setSexe] = useState("-");
  const [date_emb, setDate_emb] = useState("-");
  const [actif, setActif] = useState("-");
  const [unk1, setUnk1] = useState("-");
  const [unk2, setUnk2] = useState("-");
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
      <div className="rechercheajout"> 
      <button className="ajouter ajouterr" onClick={handleShow} ><GoPlus color="#BBA14A" fontSize="1.5em" />
      </button>
      </div>
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
                placeholder="Nom"
                //value={nom}
                onChange={e => setNom(e.target.value||"-")} />
            </div>
          </div>

          <div className="row">
            <div className="input-group mb-3">
              <span className="input-group-text  ">Prénom :</span>
              <input type="text"
                className="form-control"
                placeholder="Prénom"
                //value={prenom}
                onChange={e => setPrenom(e.target.value||"-")} />
            </div>
          </div>

          <div className="row">
            <div className="input-group mb-3">
              <span className="input-group-text  ">Date de naissance :</span>
              
              <CalendarComp changecalendar={(e)=>setDate_nais(e)} calendar={date_nais}/>
              
              
            </div>
          </div>

          <div className="row">
            <div className="input-group mb-3">
              <span className="input-group-text  ">Adresse :</span>
              <input type="text"
                className="form-control"
                placeholder="Adresse"
                //value={adresse}
                onChange={e => setAdresse(e.target.value||"-")}
              />
            </div>
          </div>

          <div className="row">
            <div className="input-group mb-3">
              <span className="input-group-text  ">Etat civil :</span>
              <input type="text"
                className="form-control"
                placeholder="Etat civil"
                //value={etat_civile}
                onChange={e => setEtat_civile(e.target.value||"-")}
              />
            </div>
          </div>

          <div className="row">
            <div className="input-group mb-3">
              <span className="input-group-text  ">Nombre_e :</span>
              <input type="number"
                className="form-control"
                placeholder="Nombre_e"
                //value={nombre_e}
                onChange={e => setNombre_e(e.target.value||0)} />
            </div>
          </div>

          <div className="row">
            <div className="input-group mb-3">
              <span className="input-group-text  ">Type de paiement :</span>
              <input type="text"
                className="form-control"
                placeholder="Type de paiement"
                //value={type_payement}
                onChange={e => setType_payement(e.target.value||"-")}
              />
            </div>
          </div>


          <div className="row">
            <div className="input-group mb-3">
              <span className="input-group-text  ">Base :</span>
              <input type="number"
                className="form-control"
                placeholder="Base"
                //value={base}
                onChange={e => setBase(e.target.value||0)} />
            </div>
          </div>

          <div className="row">
            <div className="input-group mb-3">
              <span className="input-group-text  ">CIN :</span>
              <input type="number"
                className="form-control"
                placeholder="CIN"
                //value={cin}
                onChange={e => setCin(e.target.value||0)} />
            </div>
          </div>

          <div className="row">
            <div className="input-group mb-3">
              <span className="input-group-text  ">Téléphone :</span>
              <input type="number"
                className="form-control"
                placeholder="Téléphone"
                //value={tel}
                onChange={e => setTel(e.target.value||0)} />
            </div>
          </div>

          <div className="row">
            <div className="input-group mb-3">
              <span className="input-group-text  ">Catégorie :</span>
              <input type="number"
                className="form-control"
                placeholder="Catégorie"
                //value={categorie}
                onChange={e => setCategorie(e.target.value||0)} />
            </div>
          </div>

          <div className="row">
            <div className="input-group mb-3">
              <span className="input-group-text  ">Echelon :</span>
              <input type="number"
                className="form-control"
                placeholder="Echelon"
                //value={echelon}
                onChange={e => setEchelon(e.target.value||0)} />
            </div>
          </div>

          <div className="row">
            <div className="input-group mb-3">
              <span className="input-group-text  ">Crss :</span>
              <input type="number"
                className="form-control"
                placeholder="Crss"
                //value={crss}
                onChange={e => setCrss(e.target.value||0)} />
            </div>
          </div>


          <div className="row">
            <div className="input-group mb-3">
              <span className="input-group-text  ">Contrat :</span>
              <input type="text"
                className="form-control"
                placeholder="Contrat"
                //value={contrat}
                onChange={e => setContrat(e.target.value||"-")} />
            </div>
          </div>

          <div className="row">
            <div className="input-group mb-3">
              <span className="input-group-text  ">Sexe :</span>
              <input type="text"
                className="form-control"
                placeholder="Sexe"
                //value={sexe}
                onChange={e => setSexe(e.target.value||"-")} />
            </div>
          </div>

          <div className="row">
            <div className="input-group mb-3">
              <span className="input-group-text  ">Date_emb :</span>

              <CalendarComp changecalendar={(e)=>setDate_emb(e)} calendar={date_emb}/>

              
            </div>
          </div>

          <div className="row">
            <div className="input-group mb-3">
              <span className="input-group-text  ">Actif :</span>
              <input type="text"
                className="form-control"
                placeholder=" Actif"
                //value={actif}
                onChange={e => setActif(e.target.value||"-")}
              />
            </div>
          </div>

          <div className="row">
            <div className="input-group mb-3">
              <span className="input-group-text  ">Unk1 :</span>
              <input type="text"
                className="form-control"
                placeholder="Unk1"
                //value={unk1}
                onChange={e => setUnk1(e.target.value||"-")}
              />
            </div>
          </div>

          <div className="row">
            <div className="input-group mb-3">
              <span className="input-group-text  ">Unk2 :</span>
              <input type="text"
                className="form-control"
                placeholder="Unk2"
                //value={unk2}
                onChange={e => setUnk2(e.target.value||"-")}
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