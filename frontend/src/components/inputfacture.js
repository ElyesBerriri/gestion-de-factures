import React, { Fragment,useState,useEffect }  from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { GoPlus } from "react-icons/go";
 

const Inputfacture = (props) => {
  const [sujet, setsujet] = useState("-");
  const [resource, setresource] = useState("-");
  const [somme, setsomme] = useState(0);
  
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const onSubmitForm =() =>{
        props.setenquetes([...props.enquetes,{enquete_id:props.id,sujet:sujet,resource:resource,somme:somme}]);
        props.setid(props.id+1);
        setsujet("-");
        setresource("-");
        setsomme(0);
  };


      
  return (
    <Fragment>
      <div className="rechercheajout">
     <button className="ajouter ajouterr" onClick={handleShow} ><GoPlus color="#BBA14A" fontSize="1.5em" />
      </button>
    </div>

      <Modal scrollable show={show} onHide={handleClose}  backdrop="static" >
        <Modal.Header closeButton>
          <Modal.Title> أتعاب محاماة</Modal.Title>
        </Modal.Header>

        <Modal.Body> 

        <div className="row">
      <div className="input-group mb-3">
        <input type="number" className="form-control "  
        defaultValue={props.id}/>
      <span className="input-group-text ">رقم</span>

    </div>
    </div>

    <div className="row">
      <div className="input-group mb-3">
        <input type="text" className="form-control "  
        onChange={e => setsujet(e.target.value||"-")}/>
        <span className="input-group-text ">الموضوع</span>
    </div>
    </div>

  
    <div className="row">
      <div className="input-group mb-3">
        <input type="text" className="form-control "  
         onChange={e => setresource(e.target.value||"-")}/>
      <span className="input-group-text ">المرجع</span>
    </div>
    </div>

    <div className="row">
      <div className="input-group mb-3">
        <input type="number" className="form-control "  
        onChange={e => setsomme(e.target.value||0)}/>
        <span className="input-group-text ">المبلغ خارج الضريبة</span>

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

export default Inputfacture;


 