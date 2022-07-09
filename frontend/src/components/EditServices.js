import React, { Fragment, useState } from "react";


const EditServices=({service})=>{
    
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
        <h4 class="modal-title">Modification de service</h4>
        <button type="button" class="btn-close" data-bs-dismiss="modal"
           onClick={() => setnom(service.nom)}
        ></button>
      </div>

    
      <div class="modal-body">
              <input
                type="text"
                className="form-control"
                 value={nom}
                onChange={e => setnom(e.target.value)}
              />
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

      
      <div class="modal-footer">
      <button type="button" class="btn btn-primary" data-bs-dismiss="modal"
      onClick={e => updatenom(e)}
      >Valider</button>
        <button type="button" class="btn btn-danger" data-bs-dismiss="modal"
         onClick={() => setnom(service.nom)}
        >Fermer</button>
      </div>

    </div>
  </div>
</div>

    </Fragment>
    );
    
};

export default EditServices;