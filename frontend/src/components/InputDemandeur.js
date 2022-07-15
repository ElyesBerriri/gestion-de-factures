import React, { Fragment,useState }  from "react";


const InputDemandeur = () => {
const [nom, setNom] = useState("--");
  const [cin, setCin] = useState("--");
  const [adresse, setAdresse] = useState("--");
  const [adresseD, setAdresseD] = useState("--");
  const [tel, setTel] = useState("--");
  const [fax, setFax] = useState("--");

    const onSubmitForm = () => {
            return(
                    console.log("submit")
                )
        }
      
  return (
    <Fragment>
      
    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
    Ajouter Demandeur
  </button>
  
   
  <div class="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Nouveau Demandeur</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
  
  
        <div class="modal-body">
        <div className="container ">
    <form  >

    <div class="row mb-3">
    <label  class="col-sm-2 col-form-label col-form-label-sm">Nom et Prénom </label>
    <div class="col-sm-10">
        <input type="text" class="form-control form-control-sm" id="colFormLabelSm" 
        placeholder="Nom et Prénom"
        value={nom}
        onChange={e => setNom(e.target.value)}/>
    </div>
    </div>

    <div class="row mb-3">
    <label  class="col-sm-2 col-form-label col-form-label-sm">CIN</label>
    <div class="col-sm-10">
        <input type="number" class="form-control form-control-sm" id="colFormLabelSm" 
        placeholder="Cin"
        value={cin}
        onChange={e => setCin(e.target.value)}/>
    </div>
    </div>

    <div class="row mb-3">
    <label  class="col-sm-2 col-form-label col-form-label-sm">Adresse</label>
    <div class="col-sm-10">
        <input type="text" class="form-control form-control-sm" id="colFormLabelSm" 
        placeholder="Ville"
        value={adresse}
        onChange={e => setAdresse(e.target.value)}/>
    </div>
    </div>

    <div class="row mb-3">
    <label  class="col-sm-2 col-form-label col-form-label-sm">Adresse Designée</label>
    <div class="col-sm-10">
        <input type="text" class="form-control form-control-sm" id="colFormLabelSm" 
        placeholder="Rue"
        value={adresseD}
        onChange={e => setAdresseD(e.target.value)}/>
    </div>
    </div>

    <div class="row mb-3">
    <label  class="col-sm-2 col-form-label col-form-label-sm">Téléphone</label>
    <div class="col-sm-10">
        <input type="number" class="form-control form-control-sm" id="colFormLabelSm" 
        placeholder="Numéro"
        value={tel}
        onChange={e => setTel(e.target.value)}/>
    </div>
    </div>

    <div class="row mb-3">
    <label  class="col-sm-2 col-form-label col-form-label-sm">Fax</label>
    <div class="col-sm-10">
        <input type="number" class="form-control form-control-sm" id="colFormLabelSm" 
        placeholder="Code Postale"
        value={fax}
        onChange={e => setFax(e.target.value)}/>
    </div>
    </div>

    

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

export default InputDemandeur;


 