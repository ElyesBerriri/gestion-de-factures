import React, { Fragment,useState }  from "react";
import CalendarComp from "./CalendarComp";


const InputTache = () => {
    const [tache, settache] = useState("");
    const [datec, setdatec] = useState("");
    const [dater, setdater] = useState("");
    const [resolu, setresolu] = useState("");
    const [personnech, setpersonnech] = useState("");
    const [greffier, setgreffier] = useState("");
    const [course, setcourse] = useState("");
    const [lieu, setlieu] = useState("");
    const [service, setservice] = useState("");
    const [dateaud, setdateaud] = useState("");
    const [dateech, setdateech] = useState("");
    const [echeance, setecheance] = useState("");
    const [critique, setcritique] = useState("");
    const [audiance, setaudiance] = useState("");
    const [rappel, setrappel] = useState("");


    const onSubmitForm = () => {
            return(
                    console.log(critique)
                )
        }
      
  return (
    <Fragment>
      
    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModalll">
    Ajouter tache
  </button>
  
   
  <div className="modal fade" id="exampleModalll" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">Nouvelle tache :</h5>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
  
  
        <div className="modal-body">
        <div className="container ">
    <form  >

    <div className="row mb-3">
    <label  className="col-sm-2 col-form-label col-form-label-sm">Tache : </label>
    <div className="col-sm-10">
        <input type="text" className="form-control form-control-sm" id="colFormLabelSm" 
        placeholder="Tache"
        value={tache }
        onChange={e => settache(e.target.value)}/>
    </div>
    </div>
 

    <div className="row">
                  <div className="input-group mb-3">
              <span className="input-group-text">Date critique :</span>
               <CalendarComp changecalendar={(e)=>setcritique(e)} calendar={critique}/>
              </div>
              </div>

              <div className="row">
                  <div className="input-group mb-3">
              <span className="input-group-text">Date rappel :</span>
               <CalendarComp changecalendar={(e)=>setrappel(e)} calendar={rappel}/>
              </div>
              </div>



    <div className="row mb-3">
                <label className="col-sm-2 col-form-label col-form-label-sm">Résolu :</label>
                <div className="form-check">
                    <label className="form-check-label" >
                        <input className="form-check-input" type="radio" name="resolu"
                        value="Oui"
                        />
                        Oui
                    </label>
                </div>
                <div className="form-check">
                    <label className="form-check-label">
                        <input className="form-check-input" type="radio" name="resolu"
                        value="Non"
                        />
                        Non
                    </label>
                </div>
                 
            </div>

 
                 

    <div className="row mb-3">
                <label className="col-sm-2 col-form-label col-form-label-sm">Personne_chargée:</label>
                <div className="form-check">
                    <label className="form-check-label" >
                        <input className="form-check-input" type="radio" name="chargée"
                        value="collaborateur"
                        />
                        Collaborateur
                    </label>
                </div>
                <div className="form-check">
                    <label className="form-check-label">
                        <input className="form-check-input" type="radio" name="chargée"
                        value="greffier"
                        />
                        Greffier
                    </label>
                </div>
                 
            </div>



    <label className="col-sm-2 col-form-label col-form-label-sm">Greffier :</label>

            <select className="form-select" aria-label="Default select example">
            <option></option>
            <option value="Jaze2i">Jaze2i</option>
            <option value="Madani">Madani</option>
            </select>   


            <div className="row mb-3">
                <label className="col-sm-2 col-form-label col-form-label-sm">Course:</label>
                <div className="form-check">
                    <label className="form-check-label" >
                        <input className="form-check-input" type="radio" name="course"
                        value="oui"
                        />
                        Oui
                    </label>
                </div>
                <div className="form-check">
                    <label className="form-check-label">
                        <input className="form-check-input" type="radio" name="course"
                        value="non"
                        />
                        Non
                    </label>
                </div>
                 
            </div>



            <label className="col-sm-2 col-form-label col-form-label-sm">Lieu :</label>

                <select className="form-select" aria-label="Default select example">
                <option></option>
                <option value="Jaze2i">Jaze2i</option>
                <option value="Madani">Madani</option>
                </select>   

<label className="col-sm-2 col-form-label col-form-label-sm">Service :</label>

            <select className="form-select" aria-label="Default select example">
            <option></option>
            <option value="Jaze2i">Jaze2i</option>
            <option value="Madani">Madani</option>
            </select>   


            <div className="row">
                  <div className="input-group mb-3">
              <span className="input-group-text">Date d'audiance :</span>
               <CalendarComp changecalendar={(e)=>setaudiance(e)} calendar={audiance}/>
              </div>
              </div>

              <div className="row">
                  <div className="input-group mb-3">
              <span className="input-group-text">Date d'échéance  :</span>
               <CalendarComp changecalendar={(e)=>setecheance(e)} calendar={echeance}/>
              </div>
              </div>


            

    </form>
    </div>

        </div>
        <div className="modal-footer">
          <button 
        type="button" className="btn btn-secondary" data-bs-dismiss="modal">Fermer</button>
          <button onClick={onSubmitForm} type="submit" className="btn btn-success">Sauvegarder</button>
        </div>
      </div>
    </div>
  </div>
  </Fragment>
  );
};

export default InputTache;


 