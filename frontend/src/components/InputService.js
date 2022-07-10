import React, { Fragment, useState } from "react";


const InputService=()=>{

    const [tribunal, settribunal] = useState("..");
    const [nom, setnom] = useState("..");
    const [lundi, setlundi] = useState("..");
    const [mardi, setmardi] = useState("..");
    const [mercredi, setmercredi] = useState("..");
    const [jeudi, setjeudi] = useState("..");
    const [vendredi, setvendredi] = useState("..");
    const [samedi, setsamedi] = useState("..");

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
      
      <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Ajouter
</button>

 
<div class="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Nouvelle administration</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
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
        <button 
      type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fermer</button>
        <button onClick={onSubmitForm} type="submit" class="btn btn-success">Sauvegarder</button>
      </div>
    </div>
  </div>
</div>
    </Fragment>
    );
    
};

export default InputService;