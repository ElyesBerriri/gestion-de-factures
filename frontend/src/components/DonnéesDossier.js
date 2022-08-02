import React, { Fragment, useState,useEffect } from "react";
import TabAdvers from "./Tabadvers";
import CalendarComp from "./CalendarComp";

const DonnéesDossier =(props)=>{
  const [emplacements, setEmplacement] = useState([]);

  const getemp = async (query) => {
    try {
      const response = await fetch(`/dossiers/list`);
      const jsonData = await response.json();
      setEmplacement(jsonData);
     } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getemp();
  }, []);

     
    return(

        <section className="client" id="donnees">
                      <div className="section1" >


        <div className="row">
                  <div className="input-group mb-3">
                    <span className="input-group-text">Type de dossier :</span>
                    <select className="form-select" aria-label="Default select example" value={props.type} onChange={(e)=>props.changetype(e.target.value)}>
                        <option >--</option>
                        <option value="Jaze2i">Jaze2i</option>
                        <option value="Madani">Madani</option>
                    </select>   
                  </div>
              </div>

            <div className="row">
                  <div className="input-group mb-3">
                    <span className="input-group-text">Code:</span>
                    
                    <input type="text" className="form-control" 
                            placeholder="--"
                            value={props.code1}
                            onChange={e => props.changecode1(e.target.value)}
                         /> /
                         <input type="text" className="form-control"
                          placeholder="--"
                          value={props.code2}
                          onChange={e => props.changecode2(e.target.value)}
                        />
                  </div>
              </div>
            
              <div className="row">
                  <div className="input-group mb-3">
                    <span className="input-group-text">Mission :</span>
                    <input type="text" className="form-control" 
                        placeholder="--"
                        value={props.mission}
                        onChange={e => props.changemission(e.target.value)}
                         />
                  </div>
              </div>

              <div className="row">
                  <div className="input-group mb-3">
                    <span className="input-group-text">Emplacement :</span>
                    <select name="select_box" className="form-select" id="select_box" value={props.emplacement} onChange={(e)=>{props.changeemplacement(e.target.value)}}>
                <option ></option>
                {emplacements.map(emp => (
                        <option key={emp.libelle}  value={emp.libelle}>{emp.libelle}</option>
                ))}
            </select>
                  </div>
              </div>


              <div className="row">
                  <div className="input-group mb-3">
                    <span className="input-group-text">Num Affaire :</span>
                    <input type="text" className="form-control" 
                        placeholder="--"
                        value={props.numaff}
                        onChange={e => props.changenumaff(e.target.value)}
                         />
                  </div>
              </div>
              
              <div className="row">
                  <div className="input-group mb-3">
                    <span className="input-group-text">Service :</span>
                    <select className="form-select" aria-label="Default select example"  value={props.service} onChange={(e)=>props.changeservice(e.target.value)}>
            <option >--</option>
            <option value="Jaze2i">Jaze2i</option>
            <option value="Madani">Madani</option>
            </select>   
                  </div>
              </div>

              <div className="row">
                  <div className="input-group mb-3">
                    <span className="input-group-text">Lieu :</span>
                    <select className="form-select" aria-label="Default select example"  value={props.lieu} onChange={(e)=>props.changelieu(e.target.value)}>
            <option >--</option>
            <option value="Jaze2i">Jaze2i</option>
            <option value="Madani">Madani</option>
            </select>   
                  </div>
              </div>

              
              <div className="row">
                  <div className="input-group mb-3">
                    <span className="input-group-text">Observation :</span>
                    <input type="text" className="form-control" 
                        placeholder="--"
                        value={props.observation}
                        onChange={e => props.changeobservation(e.target.value)}
                         />
                  </div>
              </div>

              <div className="row">
                  <div className="input-group mb-3">
              <span className="input-group-text">Date :</span>
               <CalendarComp changecalendar={props.changecalendar} calendar={props.calendar}/>
              </div>
              </div>
 
  
</div>
    <TabAdvers dossier_id={props.idd}             
    changeadversaires={props.changeadversaires} />
    </section>
    )

};

export default DonnéesDossier;


