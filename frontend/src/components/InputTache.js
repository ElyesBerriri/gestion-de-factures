import React, { Fragment,useState }  from "react";


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

    const onSubmitForm = () => {
            return(
                    console.log("submit")
                )
        }
      
  return (
    <Fragment>
      
    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
    Ajouter tache
  </button>
  
   
  <div class="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Nouvelle tache :</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
  
  
        <div class="modal-body">
        <div className="container ">
    <form  >

    <div class="row mb-3">
    <label  class="col-sm-2 col-form-label col-form-label-sm">Tache : </label>
    <div class="col-sm-10">
        <input type="text" class="form-control form-control-sm" id="colFormLabelSm" 
        placeholder="Tache"
        value={tache }
        onChange={e => settache(e.target.value)}/>
    </div>
    </div>
 

    <div class="row mb-3">
                <label class="col-sm-2 col-form-label col-form-label-sm">Résolu :</label>
                <div class="form-check">
                    <label class="form-check-label" >
                        <input class="form-check-input" type="radio" name="resolu"
                        value="Oui"
                        />
                        Oui
                    </label>
                </div>
                <div class="form-check">
                    <label class="form-check-label">
                        <input class="form-check-input" type="radio" name="resolu"
                        value="Non"
                        />
                        Non
                    </label>
                </div>
                 
            </div>

            <div class="row mb-3">
    <label  class="col-sm-2 col-form-label col-form-label-sm">Tache : </label>
    <div class="col-sm-10">
        <input type="text" class="form-control form-control-sm" id="colFormLabelSm" 
        placeholder="Tache"
        value={tache }
        onChange={e => settache(e.target.value)}/>
    </div>
    </div>
 

    <div class="row mb-3">
                <label class="col-sm-2 col-form-label col-form-label-sm">Personne_chargée:</label>
                <div class="form-check">
                    <label class="form-check-label" >
                        <input class="form-check-input" type="radio" name="chargée"
                        value="collaborateur"
                        />
                        Collaborateur
                    </label>
                </div>
                <div class="form-check">
                    <label class="form-check-label">
                        <input class="form-check-input" type="radio" name="chargée"
                        value="greffier"
                        />
                        Greffier
                    </label>
                </div>
                 
            </div>



    <label class="col-sm-2 col-form-label col-form-label-sm">Greffier :</label>

            <select class="form-select" aria-label="Default select example">
            <option selected></option>
            <option value="Jaze2i">Jaze2i</option>
            <option value="Madani">Madani</option>
            </select>   


            <div class="row mb-3">
                <label class="col-sm-2 col-form-label col-form-label-sm">Course:</label>
                <div class="form-check">
                    <label class="form-check-label" >
                        <input class="form-check-input" type="radio" name="course"
                        value="oui"
                        />
                        Oui
                    </label>
                </div>
                <div class="form-check">
                    <label class="form-check-label">
                        <input class="form-check-input" type="radio" name="course"
                        value="non"
                        />
                        Non
                    </label>
                </div>
                 
            </div>



            <label class="col-sm-2 col-form-label col-form-label-sm">Lieu :</label>

                <select class="form-select" aria-label="Default select example">
                <option selected></option>
                <option value="Jaze2i">Jaze2i</option>
                <option value="Madani">Madani</option>
                </select>   

<label class="col-sm-2 col-form-label col-form-label-sm">Service :</label>

            <select class="form-select" aria-label="Default select example">
            <option selected></option>
            <option value="Jaze2i">Jaze2i</option>
            <option value="Madani">Madani</option>
            </select>   

    </form>
    </div>

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

export default InputTache;


 