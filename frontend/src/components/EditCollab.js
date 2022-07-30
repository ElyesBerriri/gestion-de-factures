import React, { Fragment, useState } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const EditCollab = ({collab}) => {
    const [nom,setnom] = useState(collab.nom);
    const [cin,setcin]  = useState(collab.cin);
    const [ville,setville]  = useState(collab.ville);
    const [ rue,setrue]  = useState(collab.rue);
    const [num,setnum]  = useState(collab.num);
    const [codepostale,setcodepostale]  = useState(collab.codepostale);
    const [activite,setactivite]  = useState(collab.activite);
    const [tel,settel]  = useState(collab.tel);
    const [fax,setfax]  = useState(collab.fax);
    const [email,setemail]  = useState(collab.email);
    const [matricule,setmatricule]  = useState(collab.matricule);
    const [methodepaiment,setmethodepaiment]  = useState(collab.methodepaiment);
    const [montant,setmontant]  = useState(collab.montant);
    const [nombre_dossier,setnombre_dossier]  = useState(collab.nombre_dossier);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  

  const updateCollab = async e => {
    e.preventDefault();
    try {
        const body = { nom,cin,ville,rue,num,codepostale,activite,tel,fax,email,matricule,methodepaiment,montant,nombre_dossier} ;
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
    <Fragment>
       <Button variant="light" id="clbtnm" className="mx-3 disabled" onClick={()=>{handleShow();setnom(collab.nom);
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
  setnombre_dossier(collab.nombre_dossier)}}>
        Modifier
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modification du collaborateur</Modal.Title>
        </Modal.Header>


        <Modal.Body>
        <div className="row">
      <div className="input-group mb-3">
      <span className="input-group-text text-secondary ">Nom :</span>

              <input
                type="text"
                className="form-control"
                value={nom}
                onChange={e => setnom(e.target.value)}
              />
      </div>
      </div>
     
      <div className="row">
      <div className="input-group mb-3">
      <span className="input-group-text text-secondary ">CIN :</span>

      <input
                type="number"
                className="form-control"
                value={cin }
                onChange={e => setcin(e.target.value)} 
              />
      </div>
      </div>
    
      <div className="row">
      <div className="input-group mb-3">
      <span className="input-group-text text-secondary ">Ville :</span>

      <input
                type="text"
                className="form-control"
                value={ville}
                onChange={e => setville(e.target.value)}
              />
      </div>
      </div>

      <div className="row">
      <div className="input-group mb-3">
      <span className="input-group-text text-secondary ">Rue :</span>

      <input
                type="text"
                className="form-control"
                value={rue}
                onChange={e => setrue(e.target.value)}
              />
      </div>
      </div>

 
      <div className="row">
      <div className="input-group mb-3">
      <span className="input-group-text text-secondary ">Num :</span>

      <input
                type="number"
                className="form-control"
                value={num}
                onChange={e => setnum(e.target.value)}
              />
      </div>
      </div>
 
      <div className="row">
      <div className="input-group mb-3">
      <span className="input-group-text text-secondary ">Code Postale :</span>

      <input
                type="number"
                className="form-control"
                value={codepostale}
                onChange={e => setcodepostale(e.target.value)}
              />
      </div>
      </div>

      <div className="row">
      <div className="input-group mb-3">
      <span className="input-group-text text-secondary ">Activité :</span>

      <input
                type="text"
                className="form-control"
                value={activite}
                onChange={e => setactivite(e.target.value)}
              />
      </div>
      </div>


      <div className="row">
      <div className="input-group mb-3">
      <span className="input-group-text text-secondary ">Téléphone :</span>

      <input
                type="number"
                className="form-control"
                value={tel}
                onChange={e => settel(e.target.value)}
              />
      </div>
      </div>

      <div className="row">
      <div className="input-group mb-3">
      <span className="input-group-text text-secondary ">Fax :</span>

      <input
                type="number"
                className="form-control"
                value={fax}
                onChange={e => setfax(e.target.value)}
              />
      </div>
      </div>

      <div className="row">
      <div className="input-group mb-3">
      <span className="input-group-text text-secondary ">Email :</span>
      <input
                type="text"
                className="form-control"
                value={email}
                onChange={e => setemail(e.target.value)}
              />
      </div>
      </div>

      <div className="row">
      <div className="input-group mb-3">
      <span className="input-group-text text-secondary ">Matricule :</span>
      <input
                type="number"
                className="form-control"
                value={matricule}
                onChange={e => setmatricule(e.target.value)}
              />
      </div>
      </div>

 
      <div className="row">
      <div className="input-group mb-3">
      <span className="input-group-text text-secondary ">Methode de paiement :</span>
      <input
                type="text"
                className="form-control"
                value={methodepaiment}
                onChange={e => setmethodepaiment(e.target.value)}
              />
      </div>
      </div>


      <div className="row">
      <div className="input-group mb-3">
      <span className="input-group-text text-secondary ">Montant :</span>
      <input
                type="number"
                className="form-control"
                value={montant}
                onChange={e => setmontant(e.target.value)}
              />
      </div>
      </div>

      <div className="row">
      <div className="input-group mb-3">
      <span className="input-group-text text-secondary ">Nombre dossier :</span>
      <input 
                type="number"
                className="form-control"
                value={nombre_dossier}
                onChange={e => setnombre_dossier(e.target.value)}
              />
      </div>
      </div>
      
        </Modal.Body>
        
        <Modal.Footer>
        <Button variant="light" id="valider" 
      onClick={e => updateCollab(e)}
      >Valider</Button>
      <Button variant="dark" data-bs-dismiss="modal">Fermer</Button>
        </Modal.Footer>
      </Modal>

 
       
 
 
{console.log(collab)}
 </Fragment>
);
};

export default EditCollab;