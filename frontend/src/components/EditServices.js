import React, { Fragment, useState } from "react";


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
        const body = {nom,lundi,mardi,mercredi,jeudi,vendredi,samedi };
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
      
<button type="button" class="btn btn-primary" data-bs-toggle="modal" 
data-bs-target={`#id${service.service_id}`}
onClick={() => {
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
}}>
  Modifier
</button>

 
<div class="modal"
onClick={() => setnom(service.nom)}
 id={`id${service.service_id}`}>
  <div class="modal-dialog">
    <div class="modal-content">

   
      <div class="modal-header">
        <h4 class="modal-title">Modification d'Administration</h4>
        <button type="button" class="btn-close" data-bs-dismiss="modal"
           onClick={() => setnom(service.nom)}
        ></button>
      </div>

    
      <div class="modal-body">

      <div className="d-flex">
              <label>Tribunal:</label>
      <input
                type="text"
                className="form-control"
                 value={tribunal}
                onChange={e => settribunal(e.target.value)}
              /> </div>

      <div className="d-flex">
              <label>Administration:</label>
<input
                type="text"
                className="form-control"
                 value={nom}
                onChange={e => setnom(e.target.value)}
              /> </div>
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

      
      <div class="modal-footer">
      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal"
         onClick={() => setnom(service.nom)}
        >Fermer</button>
      <button type="button" class="btn btn-success" data-bs-dismiss="modal"
      onClick={e => updatenom(e)}
      >Sauvegarder</button>
         
      </div>

    </div>
  </div>
</div>

    </Fragment>
    );
    
};

export default EditServices;