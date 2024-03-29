import React, { Fragment,useState,useEffect }  from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { GoPlus } from "react-icons/go";
 

const InputDemandeur = (props) => {
  const [nom, setNom] = useState("-");
  const [CIN, setCin] = useState("-");
  const [adresse, setAdresse] = useState("-");
  const [adresse_d, setAdresseD] = useState("-");
  const [tel, setTel] = useState("-");
  const [fax, setFax] = useState("-");
  const [dossier_id, setidd] = useState(10);
  const [brouillon, setbrouillon] = useState("oui");
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const onSubmitForm =async (e) => {
      try {
        const body = {dossier_id,nom,CIN,adresse,adresse_d,tel,fax,brouillon} ;
        await fetch("/demandeurs/list", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body)
        });
     
        //props.changedemandeur(props.demandeur+" , "+nom);
        setFax("-");
        setAdresse("-");
        setNom("-");
        setCin("-");
        setAdresseD("-");
        setTel("-")
        props.changedem(props.dossier_id);
         
     } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    setidd(props.dossier_id);
  }, [props.dossier_id]);
      
      
  return (
    <Fragment>
      <div className="rechercheajout">
     <button className="ajouter ajouterr" onClick={handleShow} ><GoPlus color="#BBA14A" fontSize="1.5em" />
      </button>
</div>

      <Modal scrollable show={show} onHide={handleClose}  backdrop="static" >
        <Modal.Header closeButton>
          <Modal.Title>Nouveau Demandeur</Modal.Title>
        </Modal.Header>

        <Modal.Body> 

        <div className="row">
      <div className="input-group mb-3">
      <span className="input-group-text ">Nom et Prénom :</span>
        <input type="text" className="form-control"
        placeholder="Entrez le nom"
        onChange={e => setNom(e.target.value || "-")}/>
    </div>
    </div>

    <div className="row">
      <div className="input-group mb-3">
      <span className="input-group-text ">CIN :</span>
        <input type="text" className="form-control "
        placeholder="Entrez le cin"
        onChange={e => setCin(e.target.value || "-")}/>
    </div>
    </div>

  
    <div className="row">
      <div className="input-group mb-3">
      <span className="input-group-text ">Adresse :</span>
        <input type="text" className="form-control "
        placeholder="Entrez l'adresse"
         onChange={e => setAdresse(e.target.value || "-")}/>
    </div>
    </div>

    <div className="row">
      <div className="input-group mb-3">
      <span className="input-group-text ">Adresse Designée :</span>
        <input type="text" className="form-control " 
        placeholder="Entrez l'adresse designée"
        onChange={e => setAdresseD(e.target.value || "-")}/>
    </div>
    </div>
     
    <div className="row">
      <div className="input-group mb-3">
      <span className="input-group-text ">Téléphone :</span>
        <input type="text" className="form-control "
        placeholder="Entrez le téléphone"
         onChange={e => setTel(e.target.value || "-")}/>
    </div>
    </div>
    
    <div className="row">
      <div className="input-group mb-3">
      <span className="input-group-text ">Fax :</span>
        <input type="text" className="form-control"
        placeholder="Entrez le fax"
         onChange={e => setFax(e.target.value || "-")}/>
    </div>
    </div>
     


    </Modal.Body>


        <Modal.Footer>
           
          <Button variant="light" id="valider" onClick={()=>{handleClose();onSubmitForm()}}>
            Valider
          </Button>
          <Button variant="dark" onClick={handleClose}>
            Fermer
          </Button>
        </Modal.Footer>
      </Modal>

  </Fragment>
  );
};

export default InputDemandeur;


 