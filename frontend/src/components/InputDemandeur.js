import React, { Fragment,useState,useEffect }  from "react";


const InputDemandeur = (props) => {
  const [nom, setNom] = useState("--");
  const [CIN, setCin] = useState("--");
  const [adresse, setAdresse] = useState("--");
  const [adresse_d, setAdresseD] = useState("--");
  const [tel, setTel] = useState("--");
  const [fax, setFax] = useState("--");
  const [dossier_id, setidd] = useState(10);
  const [brouillon, setbrouillon] = useState("oui");

  const onSubmitForm =async (e) => {
    console.log(dossier_id);
      try {
        const body = {dossier_id,nom,CIN,adresse,adresse_d,tel,fax,brouillon} ;
        await fetch("/demandeurs/list", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body)
        });
        props.changedemandeur(props.demandeur+" , "+nom);
        props.changedem(props.dossier_id);
     } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    setidd(props.dossier_id);
  }, [props.dossier_id]);
      
      
  return (
    <Fragment>
      
    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModalllll">
    Ajouter Demandeur
  </button>
  
   
  <div className="modal fade" id="exampleModalllll" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">Nouveau Demandeur</h5>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
  
  
        <div className="modal-body">
        <div className="container ">
    <form  >

    <div className="row mb-3">
    <label  className="col-sm-2 col-form-label col-form-label-sm">Nom et Prénom </label>
    <div className="col-sm-10">
        <input type="text" className="form-control form-control-sm" id="colFormLabelSm" 
        placeholder="Nom et Prénom"
        value={nom}
        onChange={e => setNom(e.target.value)}/>
    </div>
    </div>

    <div className="row mb-3">
    <label  className="col-sm-2 col-form-label col-form-label-sm">CIN</label>
    <div className="col-sm-10">
        <input type="text" className="form-control form-control-sm" id="colFormLabelSm" 
        placeholder="Cin"
        value={CIN}
        onChange={e => setCin(e.target.value)}/>
    </div>
    </div>

    <div className="row mb-3">
    <label  className="col-sm-2 col-form-label col-form-label-sm">Adresse</label>
    <div className="col-sm-10">
        <input type="text" className="form-control form-control-sm" id="colFormLabelSm" 
        placeholder="Ville"
        value={adresse}
        onChange={e => setAdresse(e.target.value)}/>
    </div>
    </div>

    <div className="row mb-3">
    <label  className="col-sm-2 col-form-label col-form-label-sm">Adresse Designée</label>
    <div className="col-sm-10">
        <input type="text" className="form-control form-control-sm" id="colFormLabelSm" 
        placeholder="Rue" 
        value={adresse_d}
        onChange={e => setAdresseD(e.target.value)}/>
    </div>
    </div>

    <div className="row mb-3">
    <label  className="col-sm-2 col-form-label col-form-label-sm">Téléphone</label>
    <div className="col-sm-10">
        <input type="text" className="form-control form-control-sm" id="colFormLabelSm" 
        placeholder="Numéro"
        value={tel}
        onChange={e => setTel(e.target.value)}/>
    </div>
    </div>

    <div className="row mb-3">
    <label  className="col-sm-2 col-form-label col-form-label-sm">Fax</label>
    <div className="col-sm-10">
        <input type="text" className="form-control form-control-sm" id="colFormLabelSm" 
        placeholder="Code Postale"
        value={fax}
        onChange={e => setFax(e.target.value)}/>
    </div>
    </div>

    </form>
    </div>

        </div>
        <div className="modal-footer">
          <button 
        type="button" className="btn btn-secondary" data-bs-dismiss="modal">Fermer</button>
          <button onClick={onSubmitForm} type="submit" data-bs-dismiss="modal" className="btn btn-success">Ajouter</button>
        </div>
      </div>
    </div>
  </div>
  </Fragment>
  );
};

export default InputDemandeur;


 