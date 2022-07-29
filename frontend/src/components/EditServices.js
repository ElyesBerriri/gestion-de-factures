import React, { Fragment, useState } from "react";
import Button from 'react-bootstrap/Button';


const EditServices=({service})=>{
    
    const [tribunal, settribunal] = useState(service.tribunal);
    const [nom, setnom] = useState(service.nom);
    const [lundi, setlundi] = useState(service.lundi);
    const [mardi, setmardi] = useState(service.mardi);
    const [mercredi, setmercredi] = useState(service.mercredi);
    const [jeudi, setjeudi] = useState(service.jeudi);
    const [vendredi, setvendredi] = useState(service.vendredi);
    const [samedi, setsamedi] = useState(service.samedi);

    const updatenom = async e => {
      e.preventDefault();
      try {
        const body = {tribunal,nom,lundi,mardi,mercredi,jeudi,vendredi,samedi };
         await fetch(
          `/services/list/${service.service_id}`,
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
      
      <Button variant="light" data-bs-toggle="modal" id="clbtnm"
        data-bs-target={`#id${service.service_id}`} className="mx-3 disabled"
onClick={() => {
   {settribunal(service.tribunal);
setnom(service.nom);
  if (lundi==="Course"){
    document.getElementById(`Courselun${service.service_id}`).checked = true;
  }
  else if(lundi==="Audience"){
    document.getElementById(`Audiencelun${service.service_id}`).checked = true;
  }
  if (mardi==="Course"){
    document.getElementById(`Coursemar${service.service_id}`).checked = true;
  }
  else if(mardi==="Audience"){
    document.getElementById(`Audiencemar${service.service_id}`).checked = true;
  }
  if (mercredi==="Course"){
    document.getElementById(`Coursemer${service.service_id}`).checked = true;
  }
  else if(mercredi==="Audience"){
    document.getElementById(`Audiencemer${service.service_id}`).checked = true;
  }
  if (jeudi==="Course"){
    document.getElementById(`Coursejeu${service.service_id}`).checked = true;
  }
  else if(jeudi==="Audience"){
    document.getElementById(`Audiencejeu${service.service_id}`).checked = true;
  }
  if (vendredi==="Course"){
    document.getElementById(`Courseven${service.service_id}`).checked = true;
  }
  else if(vendredi==="Audience"){
    document.getElementById(`Audienceven${service.service_id}`).checked = true;
  }
  if (samedi==="Course"){
    document.getElementById(`Coursesam${service.service_id}`).checked = true;
  }
  else if(samedi==="Audience"){
    document.getElementById(`Audiencesam${service.service_id}`).checked = true;
  }
}}}>
  Modifier
  </Button>

 
  <div className="modal fade" id={`id${service.service_id}`} data-bs-backdrop="static">
        <div className="modal-dialog modal-dialog-scrollable" >
          <div className="modal-content">


   
      <div className="modal-header">
        <h4 className="modal-title">Modification d'Administration</h4>
        <button type="button" className="btn-close" data-bs-dismiss="modal"
           onClick={() => setnom(service.nom)}
        ></button>
      </div>

    
      <div className="modal-body">
      <div className="row">
      <div className="input-group mb-3">
      <span className="input-group-text text-secondary ">Tribunal :</span>

       <input
                type="text"
                className="form-control"
                 value={tribunal}
                onChange={e => settribunal(e.target.value)}
              />
            </div>
      </div>
       
      <div className="row">
      <div className="input-group mb-3">
      <span className="input-group-text text-secondary ">Administration :</span>

       <input
                type="text"
                className="form-control"
                 value={nom}
                onChange={e => setnom(e.target.value)}
              />
            </div>
      </div>
       
  

              <table className="table table table-hover mt-5 text-center">
        <thead  className="table-dark">
          <tr>
            <th>Jour</th>
            <th>Course</th>
            <th>Audience</th>
            
          </tr>
        </thead>
        <tbody>

            <tr>
              <td>Lundi</td>
              <td>  <input type="radio" 
               name="lun" id={`Courselun${service.service_id}`} onChange={()=>setlundi("Course")} />
             </td>
             <td><input type="radio" name="lun" id={`Audiencelun${service.service_id}`} onChange={()=>setlundi("Audience")}/>
             </td> 
            </tr>
            <tr>
              <td>Mardi</td>
              <td>  <input type="radio"  name="mar"  id={`Coursemar${service.service_id}`} onClick={()=>setmardi("Course")}/>
             </td>
             <td><input type="radio"  name="mar" id={`Audiencemar${service.service_id}`} onClick={()=>setmardi("Audience")}/>
             </td> 
            </tr>
            <tr>
              <td>Mercredi</td>
              <td>  <input type="radio"  name="mer" id={`Coursemer${service.service_id}`} onClick={()=>setmercredi("Course")}/>
             </td>
             <td><input type="radio"  name="mer" id={`Audiencemer${service.service_id}`} onClick={()=>setmercredi("Audience")}/>
             </td> 
            </tr>
            <tr>
              <td>Jeudi</td>
              <td>  <input type="radio"  name="j" id={`Coursejeu${service.service_id}`} onClick={()=>setjeudi("Course")}/>
             </td>
             <td><input type="radio"  name="j" id={`Audiencejeu${service.service_id}`} onClick={()=>setjeudi("Audience")}/>
             </td> 
            </tr>
            <tr>
              <td>Vendredi</td>
              <td>  <input type="radio"  name="v" id={`Courseven${service.service_id}`} onClick={()=>setvendredi("Course")}/>
             </td>
             <td><input type="radio"  name="v" id={`Audienceven${service.service_id}`} onClick={()=>setvendredi("Audience")}/>
             </td> 
            </tr>
            <tr>
              <td>Samedi</td>
              <td>  <input type="radio"  name="s" id={`Coursesam${service.service_id}`} onClick={()=>setsamedi("Course")}/>
             </td>
             <td><input type="radio"  name="s" id={`Audiencesam${service.service_id}`} onClick={()=>setsamedi("Audience")}/>
             </td> 
            </tr>
          
        </tbody>
      </table>
            </div>

            <div className="modal-footer">
      <Button variant="light" id="valider" 
      onClick={e => updatenom(e)}
      >Valider</Button>
      <Button variant="dark" data-bs-dismiss="modal">Fermer</Button>
      </div>
      

    </div>
  </div>
</div>

    </Fragment>
    );
    
};

export default EditServices;