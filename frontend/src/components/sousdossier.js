import React, { Fragment, useState,useEffect } from "react";
import ChercherDossier from "./Chercherdossier";

const Sousdossier =(props)=>{
    const [dossier, setDossier] = useState({});
 
      
    return(
        <section id="sousdossier">
        <div className="container mt-5">
      

          <ChercherDossier changerdossier={(e)=>setDossier(e)} />

              <div className="row">
                  <div className="input-group mb-3">
                    <span class="input-group-text"> Code dossier :</span>
                    <input type="text" className="form-control" 
                    disabled="true"
                        placeholder={dossier.code}
                        defaultValue={dossier.code}
                         />
                  </div>
              </div>
            <div className="row">
                  <div className="input-group mb-3">
                    <span class="input-group-text">Mission :</span>
                    <input type="text" className="form-control" 
                    disabled="true"
                        placeholder={dossier.mission}
                        defaultValue={dossier.mission}
                         />
                  </div>
              </div>
            
              <div className="row">
                  <div className="input-group mb-3">
                    <span class="input-group-text">Emplacement :</span>
                    <input type="text" className="form-control" 
                    disabled="true"
                        placeholder={dossier.emplacement}
                        defaultValue={dossier.emplacement}
                         />
                  </div>
              </div>

              <div className="row">
                  <div className="input-group mb-3">
                    <span class="input-group-text">Numéro affaire :</span>
                    <input type="text" className="form-control" 
                        disabled="true"
                        placeholder={dossier.numaff}
                        defaultValue={dossier.numaff}
                         />
                  </div>
              </div>
              <div className="row">
                  <div className="input-group mb-3">
                    <span class="input-group-text">Observation :</span>
                    <input type="text" className="form-control" 
                        placeholder={dossier.observation}
                        disabled="true"
                        defaultValue={dossier.observation}
                         />
                  </div>
              </div>
              
              </div>



     </section>
    )

};

export default Sousdossier;



