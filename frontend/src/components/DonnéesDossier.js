import React, { Fragment, useState } from "react";
import TabAdvers from "./Tabadvers";

const DonnéesDossier =()=>{
    const [type, setType] = useState("");
    const [mission, setMission] = useState("");
    const [emplacement,setEmplacement] = useState("");
    const [lieu, setLieux] = useState("");
    const [numaff, setNum] = useState("");
    const [service, setService] = useState("");
    const [code1,setCode1]= useState("");
    const [code2,setCode2]= useState("");
    const [observation,setObservation]= useState("");

 
    return(
        <Fragment>
        <div className="container mt-5">

        <label class="col-sm-2 col-form-label col-form-label-sm">Type de dossier :</label>

            <select class="form-select" aria-label="Default select example">
            <option selected></option>
            <option value="Jaze2i">Jaze2i</option>
            <option value="Madani">Madani</option>
            </select>   

            <div className="row">
                  <div className="input-group mb-3">
                    <span class="input-group-text">Code:</span>
                    
                    <input type="text" className="form-control" 
                                            placeholder="Code"

                         />/
                         <input type="text" className="form-control" />
                  </div>
              </div>
            
              <div className="row">
                  <div className="input-group mb-3">
                    <span class="input-group-text">Mission :</span>
                    <input type="text" className="form-control" 
                        placeholder="Mission"
                         />
                  </div>
              </div>

              <label class="col-sm-2 col-form-label col-form-label-sm">Emplacement :</label>
              <select class="form-select" aria-label="Default select example">
            <option selected></option>
            <option value="Jaze2i">Jaze2i</option>
            <option value="Madani">Madani</option>
            </select>   
              

              <div className="row">
                  <div className="input-group mb-3">
                    <span class="input-group-text">Num Affaire :</span>
                    <input type="number" className="form-control" 
                        placeholder=""
                         />
                  </div>
              </div>
              
              <div className="row">
                  <div className="input-group mb-3">
                    <span class="input-group-text">Service :</span>
                    <input type="number" className="form-control" 
                        placeholder="Service"
                         />
                  </div>
              </div>

              <div className="row">
                  <div className="input-group mb-3">
                    <span class="input-group-text">Lieu :</span>
                    <input type="number" className="form-control" 
                        placeholder="Lieu"
                         />
                  </div>
              </div>

              
              <div className="row">
                  <div className="input-group mb-3">
                    <span class="input-group-text">Observation :</span>
                    <input type="text" className="form-control" 
                        placeholder="Observation"
                         />
                  </div>
              </div>
      </div>

<TabAdvers/>
    </Fragment>
    )

};

export default DonnéesDossier;


