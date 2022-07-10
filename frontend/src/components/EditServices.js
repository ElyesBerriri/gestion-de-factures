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
data-bs-target={`#id${service.service_id}`}>
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
               name="lun" checked = {lundi==="Course"} onChange={()=>setlundi("Course")} />
             </td>
             <td><input type="radio"  checked = {lundi==="Audience"} name="lun" onChange={()=>setlundi("Audience")}/>
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