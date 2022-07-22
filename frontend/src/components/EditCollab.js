import React, { Fragment, useState } from "react";

const EditCollab = ({collab}) => {
    const [nom,setnom] = useState(collab.nom);
    const [cin,setcin]  = useState(collab.cin);
    const [ville,setville]  = useState(collab.ville);
    const [ rue,setrue]  = useState(collab.rue);
    const [num,setnum]  = useState(collab.num);
    const [codepostale,setcodepostale]  = useState(collab.codepostale);
    const [activite,setactivite]  = useState(collab.activite);
    const [tel,settel]  = useState(collab.tel);
    const [fax,setfax]  = useState(collab.fax);
    const [email,setemail]  = useState(collab.email);
    const [matricule,setmatricule]  = useState(collab.matricule);
    const [methodepaiment,setmethodepaiment]  = useState(collab.methodepaiment);
    const [montant,setmontant]  = useState(collab.montant);
    const [nombre_dossier,setnombre_dossier]  = useState(collab.nombre_dossier);


  const updateCollab = async e => {
    e.preventDefault();
    try {
        const body = { nom,cin,ville,rue,num,codepostale,activite,tel,fax,email,matricule,methodepaiment,montant,nombre_dossier} ;
       await fetch(
        `/collaborateurs/list/${collab.collab_id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body)
        }
      );

      window.location.reload();
    } catch (err) {
      console.error(err.message);
    }
  };


  return (
    <Fragment>
      
<button type="button" className="btn btn-primary" data-bs-toggle="modal" 
data-bs-target={`#id${collab.collab_id}`}
onClick={() => {setnom(collab.nom);
  setcin(collab.cin);
  setville(collab.ville);
  setrue(collab.rue);
  setnum(collab.num);
  setcodepostale(collab.codepostale);
  setactivite(collab.activite);
  settel(collab.tel);
  setfax(collab.fax);
  setemail(collab.email);
  setmatricule(collab.matricule);
  setmethodepaiment(collab.methodepaiment);
  setmontant(collab.montant);
  setnombre_dossier(collab.nombre_dossier);}}
  >
  Modifier
</button>

 
<div className="modal"

 id={`id${collab.collab_id}`}>
  <div className="modal-dialog">
    <div className="modal-content">

   
      <div className="modal-header">
        <h4 className="modal-title">Modification de collaborateur</h4>
        <button type="button" className="btn-close" data-bs-dismiss="modal"
        ></button>
      </div>

    
      <div className="modal-body">
              <div className="d-flex">
              <label>Nom:</label>
              <input
                type="text"
                className="form-control"
                value={nom}
                onChange={e => setnom(e.target.value)}
              />
              </div>

              <div className="d-flex">
              <label>Cin:</label>
                <input
                type="number"
                className="form-control"
                value={cin }
                onChange={e => setcin(e.target.value)} 
              /></div>

              <div className="d-flex">
              <label>Ville:</label>
               <input
                type="text"
                className="form-control"
                value={ville}
                onChange={e => setville(e.target.value)}
              /></div>

<div className="d-flex">
              <label>Rue:</label>
               <input
                type="text"
                className="form-control"
                value={rue}
                onChange={e => setrue(e.target.value)}
              />    </div>

<div className="d-flex">
              <label>Num:</label>
               <input
                type="number"
                className="form-control"
                value={num}
                onChange={e => setnum(e.target.value)}
              /></div>

<div className="d-flex">
              <label>Code Postale:</label>
               <input
                type="number"
                className="form-control"
                value={codepostale}
                onChange={e => setcodepostale(e.target.value)}
              /></div>

<div className="d-flex">
              <label>Activité:</label>
               <input
                type="text"
                className="form-control"
                value={activite}
                onChange={e => setactivite(e.target.value)}
              /></div>

<div className="d-flex">
              <label>Téléphone:</label>
               <input
                type="number"
                className="form-control"
                value={tel}
                onChange={e => settel(e.target.value)}
              />  </div>

               <div className="d-flex">
              <label>Fax:</label>  
               <input
                type="number"
                className="form-control"
                value={fax}
                onChange={e => setfax(e.target.value)}
              /></div>

<div className="d-flex">
              <label>Email:</label>
               <input
                type="text"
                className="form-control"
                value={email}
                onChange={e => setemail(e.target.value)}
              /></div>

<div className="d-flex">
              <label>Matricule:</label>
               <input
                type="number"
                className="form-control"
                value={matricule}
                onChange={e => setmatricule(e.target.value)}
              /></div>

<div className="d-flex">
              <label>Methode de paiement:</label>
               <input
                type="text"
                className="form-control"
                value={methodepaiment}
                onChange={e => setmethodepaiment(e.target.value)}
              /></div>

<div className="d-flex">
              <label>Montant:</label>
               <input
                type="number"
                className="form-control"
                value={montant}
                onChange={e => setmontant(e.target.value)}
              /></div>

<div className="d-flex ">
              <label >Nomnre_dossier:</label>
               <input 
                type="number"
                className="form-control"
                value={nombre_dossier}
                onChange={e => setnombre_dossier(e.target.value)}
              /></div>

            </div>

      
      <div className="modal-footer">
      <button type="button" className="btn btn-primary" data-bs-dismiss="modal"
      onClick={e => updateCollab(e)}
      >Valider</button>
        <button type="button" className="btn btn-danger" data-bs-dismiss="modal"
        onClick={() => {setnom(collab.nom);
          setcin(collab.cin);
          setville(collab.ville);
          setrue(collab.rue);
          setnum(collab.num);
          setcodepostale(collab.codepostale);
          setactivite(collab.activite);
          settel(collab.tel);
          setfax(collab.fax);
          setemail(collab.email);
          setmatricule(collab.matricule);
          setmethodepaiment(collab.methodepaiment);
          setmontant(collab.montant);
          setnombre_dossier(collab.nombre_dossier);}}
        >Fermer</button>
      </div>

    </div>
  </div>
</div>

    </Fragment>
  );
};

export default EditCollab;