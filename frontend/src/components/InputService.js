import React, { Fragment, useState } from "react";
import Button from 'react-bootstrap/Button';
import { GoPlus } from "react-icons/go";
import Modal from 'react-bootstrap/Modal';

const InputService=()=>{

    const [tribunal, settribunal] = useState("..");
    const [nom, setnom] = useState("..");
    const [lundi, setlundi] = useState("..");
    const [mardi, setmardi] = useState("..");
    const [mercredi, setmercredi] = useState("..");
    const [jeudi, setjeudi] = useState("..");
    const [vendredi, setvendredi] = useState("..");
    const [samedi, setsamedi] = useState("..");
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const onSubmitForm = async (e) => {
        e.preventDefault();
        try {
          const body = { tribunal,nom,lundi,mardi,mercredi,jeudi,vendredi,samedi} ;
          await fetch("/services/list/", {
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

      <button className="ajouter ajouterr" onClick={handleShow} ><GoPlus color="#00adb5" fontSize="1.5em" />
      </button>
 
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Ajouter une administration</Modal.Title>
        </Modal.Header>

        <Modal.Body> 

        <div className="row">
      <div className="input-group mb-3">
      <span className="input-group-text text-secondary ">Tribunal :</span>

      <input
                type="text"
                className="form-control"
                 value={tribunal}
                onChange={e => settribunal(e.target.value)}
              /> </div>
      </div>
       
      <div className="row">
      <div className="input-group mb-3">
      <span className="input-group-text text-secondary ">Administration :</span>
      <input
                type="text"
                className="form-control"
                 value={nom}
                onChange={e => setnom(e.target.value)}
              /> </div>
      </div>
 

      <div className="table-responsive m-3 mytable mytable-41">
        <table className="table table-hover text-center">
          <thead className="table-secondary text-secondary mytableheader">

          <tr>
            <th>Jour</th>
            <th>Course</th>
            <th>Audience</th>
            
          </tr>
        </thead>
        <tbody>

            <tr>
              <td>Lundi</td>
              <td>  <input type="radio"  name="lun" onClick={()=>setlundi("Course")}/>
             </td>
             <td><input type="radio"  name="lun" onClick={()=>setlundi("Audience")}/>
             </td> 
            </tr>
            <tr>
              <td>Mardi</td>
              <td>  <input type="radio"  name="mar" onClick={()=>setmardi("Course")}/>
             </td>
             <td><input type="radio"  name="mar" onClick={()=>setmardi("Audience")}/>
             </td> 
            </tr>
            <tr>
              <td>Mercredi</td>
              <td>  <input type="radio"  name="mer" onClick={()=>setmercredi("Course")}/>
             </td>
             <td><input type="radio"  name="mer" onClick={()=>setmercredi("Audience")}/>
             </td> 
            </tr>
            <tr>
              <td>Jeudi</td>
              <td>  <input type="radio"  name="j" onClick={()=>setjeudi("Course")}/>
             </td>
             <td><input type="radio"  name="j" onClick={()=>setjeudi("Audience")}/>
             </td> 
            </tr>
            <tr>
              <td>Vendredi</td>
              <td>  <input type="radio"  name="v" onClick={()=>setvendredi("Course")}/>
             </td>
             <td><input type="radio"  name="v" onClick={()=>setvendredi("Audience")}/>
             </td> 
            </tr>
            <tr>
              <td>Samedi</td>
              <td>  <input type="radio"  name="s" onClick={()=>setsamedi("Course")}/>
             </td>
             <td><input type="radio"  name="s" onClick={()=>setsamedi("Audience")}/>
             </td> 
            </tr>
          
        </tbody>
      </table>
      </div>
      </Modal.Body>

    <Modal.Footer>
         <Button variant="light" id="valider"  
      onClick={onSubmitForm}>Valider</Button>
      <Button variant="dark" data-bs-dismiss="modal"  onClick={handleClose}>Fermer</Button>
        </Modal.Footer>
       
     
        </Modal>
   
 
    </Fragment>
    );
    
};

export default InputService;