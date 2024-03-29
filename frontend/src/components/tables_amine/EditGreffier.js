import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Modal from 'react-bootstrap/Modal';
import CalendarComp from "../CalendarComp";

const EditGreffier = ({gref}) => {
    const [nom, setNom] = useState(gref.nom);
    const [prenom, setPrenom] = useState(gref.prenom);
    const [date_nais, setDate_nais] = useState(gref.date_nais);
    const [adresse, setAdresse] = useState(gref.adresse);
    const [etat_civile, setEtat_civile] = useState(gref.etat_civile);
    const [nombre_e, setNombre_e] = useState(gref.nombre_e);
    const [type_payement, setType_payement] = useState(gref.type_payement);
    const [base, setBase] = useState(gref.base);
    const [cin, setCin] = useState(gref.cin);
    const [tel, setTel] = useState(gref.tel);
    const [categorie, setCategorie] = useState(gref.categorie);
    const [echelon, setEchelon] = useState(gref.echelon);
    const [crss, setCrss] = useState(gref.crss);
    const [contrat, setContrat] = useState(gref.contrat);
    const [sexe, setSexe] = useState(gref.sexe);
    const [date_emb, setDate_emb] = useState(gref.date_emb);
    const [actif, setActif] = useState(gref.actif);
    const [unk1, setUnk1] = useState(gref.unk1);
    const [unk2, setUnk2] = useState(gref.unk2);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  const updateGreffier = async e => {
    e.preventDefault();
    try {
      const body = { nom,prenom,date_nais,adresse,etat_civile,nombre_e,type_payement,base,cin,tel,categorie,echelon,crss,contrat,sexe,date_emb,actif,unk1,unk2};
       await fetch(
        `/greffier/list/${gref.gref_id}`,
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
      <Button variant="light" id="grefe" className="mb-3 mx-3 disabled"  
        onClick={() => {handleShow();
        setNom(gref.nom);
        setPrenom(gref.prenom);
        setDate_nais(gref.date_nais);
        setAdresse(gref.adresse);
        setEtat_civile(gref.etat_civile);
        setNombre_e(gref.nombre_e);
        setType_payement(gref.type_payement);
        setBase(gref.base);
        setCin(gref.cin);
        setTel(gref.tel);
        setCategorie(gref.categorie);
        setEchelon(gref.echelon);
        setCrss(gref.crss);
        setContrat(gref.contrat);
        setSexe(gref.sexe);
        setDate_emb(gref.date_emb);
        setActif(gref.actif);
        setUnk1(gref.unk1);
        setUnk2(gref.unk2);
      }}>
        Modifier
      </Button>          
            
            <Modal
        scrollable
        show={show}
        onHide={handleClose}
        backdrop="static" >
        <Modal.Header closeButton>
          <Modal.Title>Modification d'un greffier</Modal.Title>
        </Modal.Header>

        <Modal.Body>
            <div className="row">
            <div className="input-group mb-3">
              <span className="input-group-text  ">Nom :</span>
              <input type="text"
                className="form-control"
                placeholder="Nom"
                defaultValue={nom}
                onChange={e => setNom(e.target.value||"-")} />
            </div>
          </div>

          <div className="row">
            <div className="input-group mb-3">
              <span className="input-group-text  ">Prénom :</span>
              <input type="text"
                className="form-control"
                placeholder="Prénom"
                defaultValue={prenom}
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
                defaultValue={adresse}
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
                defaultValue={etat_civile}
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
                defaultValue={nombre_e}
                onChange={e => setNombre_e(e.target.value||0)} />
            </div>
          </div>

          <div className="row">
            <div className="input-group mb-3">
              <span className="input-group-text  ">Type de paiement :</span>
              <input type="text"
                className="form-control"
                placeholder="Type de paiement"
                defaultValue={type_payement}
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
                defaultValue={base}
                onChange={e => setBase(e.target.value||0)} />
            </div>
          </div>

          <div className="row">
            <div className="input-group mb-3">
              <span className="input-group-text  ">CIN :</span>
              <input type="number"
                className="form-control"
                placeholder="Cin"
                defaultValue={cin}
                onChange={e => setCin(e.target.value||0)} />
            </div>
          </div>

          <div className="row">
            <div className="input-group mb-3">
              <span className="input-group-text  ">Téléphone :</span>
              <input type="number"
                className="form-control"
                placeholder="Téléphone"
                defaultValue={tel}
                onChange={e => setTel(e.target.value||0)} />
            </div>
          </div>

          <div className="row">
            <div className="input-group mb-3">
              <span className="input-group-text  ">Catégorie :</span>
              <input type="number"
                className="form-control"
                placeholder="Catégorie"
                defaultValue={categorie}
                onChange={e => setCategorie(e.target.value||0)} />
            </div>
          </div>

          <div className="row">
            <div className="input-group mb-3">
              <span className="input-group-text  ">Echelon :</span>
              <input type="number"
                className="form-control"
                placeholder="Echelon"
                defaultValue={echelon}
                onChange={e => setEchelon(e.target.value||0)} />
            </div>
          </div>

          <div className="row">
            <div className="input-group mb-3">
              <span className="input-group-text  ">Crss :</span>
              <input type="number"
                className="form-control"
                placeholder="Crss"
                defaultValue={crss}
                onChange={e => setCrss(e.target.value||0)} />
            </div>
          </div>


          <div className="row">
            <div className="input-group mb-3">
              <span className="input-group-text  ">Contrat :</span>
              <input type="text"
                className="form-control"
                placeholder="Contrat"
                defaultValue={contrat}
                onChange={e => setContrat(e.target.value||"-")} />
            </div>
          </div>

          <div className="row">
            <div className="input-group mb-3">
              <span className="input-group-text  ">Sexe :</span>
              <input type="text"
                className="form-control"
                placeholder="Sexe"
                defaultValue={sexe}
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
                placeholder="Actif"
                defaultValue={actif}
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
                defaultValue={unk1}
                onChange={e => setUnk1(e.target.value||"-")}
              />
            </div>
          </div>

          <div className="row">
            <div className="input-group mb-3">
              <span className="input-group-text  ">unk2 :</span>
              <input type="text"
                className="form-control"
                placeholder="Unk2"
                defaultValue={unk2}
                onChange={e => setUnk2(e.target.value||"-")}
              />
            </div>
          </div>
          </Modal.Body>

<Modal.Footer>
  <Button variant="light" id="valider"
    onClick={e => {handleClose(); updateGreffier(e)}}
  >Valider</Button>
  <Button variant="dark" onClick={handleClose}>Fermer</Button>
</Modal.Footer>
</Modal>
 
    </>
  );
};

export default EditGreffier;