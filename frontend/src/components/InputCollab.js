import React, { Fragment,useState }  from "react";


const InputCollab = () => {
    const [nom,setnom] = useState(".." );
    const [cin,setcin]  = useState(0);
    const [ville,setville]  = useState("..");
    const [ rue,setrue]  = useState("..");
    const [num,setnum]  = useState(0);
    const [codepostale,setcodepostale]  = useState(0);
    const [activite,setactivite]  = useState("..");
    const [tel,settel]  = useState(0);
    const [fax,setfax]  = useState(0);
    const [email,setemail]  = useState("..");
    const [matricule,setmatricule]  = useState("..");
    const [methodepaiment,setmethodepaiment]  = useState("..");
    const [montant,setmontant]  = useState( 0);
    const [nombre_dossier,setnombre_dossier]  = useState( 0);

    const onSubmitForm = async (e) => {
        e.preventDefault();
        try {
          const body = { nom,cin,ville,rue,num,codepostale,activite,tel,fax,email,matricule,methodepaiment,montant,nombre_dossier} ;
          await fetch("/collaborateurs/list", {
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
          <h5 class="modal-title" id="exampleModalLabel">Nouveau collaborateur</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
  
  
        <div class="modal-body">
        <div className="container ">
    <form  >

    <div class="row mb-3">
    <label for="colFormLabelSm" class="col-sm-2 col-form-label col-form-label-sm">Nom et Prénom </label>
    <div class="col-sm-10">
        <input type="text" class="form-control form-control-sm" id="colFormLabelSm" 
        placeholder="Nom et Prénom"
        value={nom}
        onChange={e => setnom(e.target.value)}/>
    </div>
    </div>

    <div class="row mb-3">
    <label for="colFormLabelSm" class="col-sm-2 col-form-label col-form-label-sm">Cin</label>
    <div class="col-sm-10">
        <input type="number" class="form-control form-control-sm" id="colFormLabelSm" 
        placeholder="Cin"
        value={cin}
        onChange={e => setcin(e.target.value)}/>
    </div>
    </div>

    <div class="row mb-3">
    <label for="colFormLabelSm" class="col-sm-2 col-form-label col-form-label-sm">Ville</label>
    <div class="col-sm-10">
        <input type="text" class="form-control form-control-sm" id="colFormLabelSm" 
        placeholder="Ville"
        value={ville}
        onChange={e => setville(e.target.value)}/>
    </div>
    </div>

    <div class="row mb-3">
    <label for="colFormLabelSm" class="col-sm-2 col-form-label col-form-label-sm">Rue</label>
    <div class="col-sm-10">
        <input type="text" class="form-control form-control-sm" id="colFormLabelSm" 
        placeholder="Rue"
        value={rue}
        onChange={e => setrue(e.target.value)}/>
    </div>
    </div>

    <div class="row mb-3">
    <label for="colFormLabelSm" class="col-sm-2 col-form-label col-form-label-sm">Numéro</label>
    <div class="col-sm-10">
        <input type="number" class="form-control form-control-sm" id="colFormLabelSm" 
        placeholder="Numéro"
        value={num}
        onChange={e => setnum(e.target.value)}/>
    </div>
    </div>

    <div class="row mb-3">
    <label for="colFormLabelSm" class="col-sm-2 col-form-label col-form-label-sm">Code Postale</label>
    <div class="col-sm-10">
        <input type="number" class="form-control form-control-sm" id="colFormLabelSm" 
        placeholder="Code Postale"
        value={codepostale}
        onChange={e => setcodepostale(e.target.value)}/>
    </div>
    </div>

    <div class="row mb-3">
    <label for="colFormLabelSm" class="col-sm-2 col-form-label col-form-label-sm">Activité</label>
    <div class="col-sm-10">
        <input type="text" class="form-control form-control-sm" id="colFormLabelSm"
         placeholder="Activité"
         value={activite}
        onChange={e => setactivite(e.target.value)}/>
    </div>
    </div>

    <div class="row mb-3">
    <label for="colFormLabelSm" class="col-sm-2 col-form-label col-form-label-sm">Téléphone</label>
    <div class="col-sm-10">
        <input type="number" class="form-control form-control-sm" id="colFormLabelSm" 
        placeholder="Téléphone"
        value={tel}
        onChange={e => settel(e.target.value)}/>
    </div>
    </div>

    <div class="row mb-3">
    <label for="colFormLabelSm" class="col-sm-2 col-form-label col-form-label-sm">Fax</label>
    <div class="col-sm-10">
        <input type="number" class="form-control form-control-sm" id="colFormLabelSm" 
        placeholder="Fax"
        value={fax}
        onChange={e => setfax(e.target.value)}/>
    </div>
    </div>

    <div class="row mb-3">
    <label for="colFormLabelSm" class="col-sm-2 col-form-label col-form-label-sm">Email</label>
    <div class="col-sm-10">
        <input type="text" class="form-control form-control-sm" id="colFormLabelSm"
         placeholder="Email"
         value={email}
        onChange={e => setemail(e.target.value)}/>
    </div>
    </div>

    <div class="row mb-3">
    <label for="colFormLabelSm" class="col-sm-2 col-form-label col-form-label-sm">Matricule</label>
    <div class="col-sm-10">
        <input type="number" class="form-control form-control-sm" id="colFormLabelSm" 
        placeholder="Matricule"
        value={matricule}
        onChange={e => setmatricule(e.target.value)}/>
    </div>
    </div>

    <div class="row mb-3">
    <label for="colFormLabelSm" class="col-sm-2 col-form-label col-form-label-sm">Methode de paiement</label>
    <div class="col-sm-10">
        <input type="text" class="form-control form-control-sm" id="colFormLabelSm" 
        placeholder="Methode de paiement"
        value={methodepaiment}
        onChange={e => setmethodepaiment(e.target.value)}/>
    </div>
    </div>

    <div class="row mb-3">
    <label for="colFormLabelSm" class="col-sm-2 col-form-label col-form-label-sm">Montant</label>
    <div class="col-sm-10">
        <input type="number" class="form-control form-control-sm" id="colFormLabelSm"
         placeholder="Montant"
         value={montant}
        onChange={e => setmontant(e.target.value)}/>
    </div>
    </div>

    <div class="row mb-3">
    <label for="colFormLabelSm" class="col-sm-2 col-form-label col-form-label-sm">Nombre_dossier</label>
    <div class="col-sm-10">
        <input type="number" class="form-control form-control-sm" id="colFormLabelSm" 
        placeholder="Nombre_dossier"
        value={nombre_dossier}
        onChange={e => setnombre_dossier(e.target.value)}/>
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

export default InputCollab;


 