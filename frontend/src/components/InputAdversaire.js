import React, { Fragment,useState }  from "react";


const InputAdversaire = (props) => {
  const [nom, setNom] = useState("--");
  const [registre, setRegistre] = useState("--");
  const [adresse, setAdresse] = useState("--");
  const [adresse_d, setAdressed] = useState("--");
  const  [avocat, setAvocat] = useState("--");
  const [adresse_a, setAdresseav] = useState("--");
  const [dossier_id, setidd] = useState(`${props.dossier_id}`);
 
  const onSubmitForm =async (e) => {
      try {
        const body = {dossier_id,nom,registre,adresse,adresse_d,avocat,adresse_a} ;
        await fetch("/adversaire/list", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body)
        });
   
        props.changeadversaire();
    } catch (err) {
      console.error(err.message);
    }
  };
      
  return (
    <Fragment>
      
    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
    Ajouter adversaire 
  </button>
  
   
  <div class="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Nouveau adversaire :</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
  
  
        <div class="modal-body">
        <div className="container ">
    <form  >

    <div class="row mb-3">
    <label  class="col-sm-2 col-form-label col-form-label-sm">Nom et Prénom : </label>
    <div class="col-sm-10">
        <input type="text" class="form-control form-control-sm" id="colFormLabelSm" 
        placeholder="Nom et Prénom"
        value={nom}
        onChange={e => setNom(e.target.value)}/>
    </div>
    </div>

    <div class="row mb-3">
    <label  class="col-sm-2 col-form-label col-form-label-sm">Registre :</label>
    <div class="col-sm-10">
        <input type="text" class="form-control form-control-sm" id="colFormLabelSm" 
        placeholder="Registre"
        value={registre}
        onChange={e => setRegistre(e.target.value)}/>
    </div>
    </div>

    <div class="row mb-3">
    <label  class="col-sm-2 col-form-label col-form-label-sm">Adresse :</label>
    <div class="col-sm-10">
        <input type="text" class="form-control form-control-sm" id="colFormLabelSm" 
        placeholder="Adresse"
        value={adresse}
        onChange={e => setAdresse(e.target.value)}/>
    </div>
    </div>

    <div class="row mb-3">
    <label  class="col-sm-2 col-form-label col-form-label-sm">Adresse Designée</label>
    <div class="col-sm-10">
        <input type="text" class="form-control form-control-sm" id="colFormLabelSm" 
        placeholder="Adresse Designée"
        value={adresse_d}
        onChange={e => setAdressed(e.target.value)}/>
    </div>
    </div>

    <div class="row mb-3">
    <label  class="col-sm-2 col-form-label col-form-label-sm">Avocat</label>
    <div class="col-sm-10">
        <input type="text" class="form-control form-control-sm" id="colFormLabelSm" 
        placeholder="Avocat"
        value={avocat}
        onChange={e => setAvocat(e.target.value)}/>
    </div>
    </div>

    <div class="row mb-3">
    <label  class="col-sm-2 col-form-label col-form-label-sm">Adresse avocat</label>
    <div class="col-sm-10">
        <input type="text" class="form-control form-control-sm" id="colFormLabelSm" 
        placeholder="Rue"
        value={adresse_a}
        onChange={e => setAdresseav(e.target.value)}/>
    </div>
    </div>

    </form>
    </div>

        </div>
        <div class="modal-footer">
          <button 
            type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fermer</button>
             <button 
            type="button" class="btn btn-success" onClick={onSubmitForm} data-bs-dismiss="modal">Sauvegarder</button>
         </div>
      </div>
    </div>
  </div>
  </Fragment>
  );
};

export default InputAdversaire;


 