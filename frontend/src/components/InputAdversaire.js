import React, { Fragment,useState,useEffect }  from "react";


const InputAdversaire = (props) => {
  const [nom, setNom] = useState("--");
  const [registre, setRegistre] = useState("--");
  const [adresse, setAdresse] = useState("--");
  const [adresse_d, setAdressed] = useState("--");
  const  [avocat, setAvocat] = useState("--");
  const [adresse_a, setAdresseav] = useState("--");
  const [dossier_id, setidd] = useState(10);
  const [brouillon, setbrouillon] = useState("oui");


 
  const onSubmitForm =async (e) => {
    console.log(dossier_id);
      try {
        const body = {dossier_id,nom,registre,adresse,adresse_d,avocat,adresse_a,brouillon} ;
        await fetch("/adversaire/list", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body)
        });

        props.changeadversaire(props.dossier_id);
        console.log(props.adversaire);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    setidd(props.dossier_id);
  }, [props.dossier_id]);
      
  return (
    <Fragment>
      
    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
    Ajouter adversaire 
  </button>
  
   
  <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">Nouveau adversaire :</h5>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
  
  
        <div className="modal-body">
        <div className="container ">
    <form  >

    <div className="row mb-3">
    <label  className="col-sm-2 col-form-label col-form-label-sm">Nom et Prénom : </label>
    <div className="col-sm-10">
        <input type="text" className="form-control form-control-sm" id="colFormLabelSm" 
        placeholder="Nom et Prénom"
        value={nom}
        onChange={e => setNom(e.target.value)}/>
    </div>
    </div>

    <div className="row mb-3">
    <label  className="col-sm-2 col-form-label col-form-label-sm">Registre :</label>
    <div className="col-sm-10">
        <input type="text" className="form-control form-control-sm" id="colFormLabelSm" 
        placeholder="Registre"
        value={registre}
        onChange={e => setRegistre(e.target.value)}/>
    </div>
    </div>

    <div className="row mb-3">
    <label  className="col-sm-2 col-form-label col-form-label-sm">Adresse :</label>
    <div className="col-sm-10">
        <input type="text" className="form-control form-control-sm" id="colFormLabelSm" 
        placeholder="Adresse"
        value={adresse}
        onChange={e => setAdresse(e.target.value)}/>
    </div>
    </div>

    <div className="row mb-3">
    <label  className="col-sm-2 col-form-label col-form-label-sm">Adresse Designée</label>
    <div className="col-sm-10">
        <input type="text" className="form-control form-control-sm" id="colFormLabelSm" 
        placeholder="Adresse Designée"
        value={adresse_d}
        onChange={e => setAdressed(e.target.value)}/>
    </div>
    </div>

    <div className="row mb-3">
    <label  className="col-sm-2 col-form-label col-form-label-sm">Avocat</label>
    <div className="col-sm-10">
        <input type="text" className="form-control form-control-sm" id="colFormLabelSm" 
        placeholder="Avocat"
        value={avocat}
        onChange={e => setAvocat(e.target.value)}/>
    </div>
    </div>

    <div className="row mb-3">
    <label  className="col-sm-2 col-form-label col-form-label-sm">Adresse avocat</label>
    <div className="col-sm-10">
        <input type="text" className="form-control form-control-sm" id="colFormLabelSm" 
        placeholder="Rue"
        value={adresse_a}
        onChange={e => setAdresseav(e.target.value)}/>
    </div>
    </div>

    </form>
    </div>

        </div>
        <div className="modal-footer">
          <button 
            type="button" className="btn btn-secondary" data-bs-dismiss="modal">Fermer</button>
             <button 
            type="button" className="btn btn-success" onClick={onSubmitForm} data-bs-dismiss="modal">Ajouter</button>
         </div>
      </div>
    </div>
  </div>
  {console.log(props.dossier_id)}
  {console.log(dossier_id)}

  </Fragment>
  );
};

export default InputAdversaire;


 