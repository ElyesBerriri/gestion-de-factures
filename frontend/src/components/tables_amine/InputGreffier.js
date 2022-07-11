import React, { Fragment, useState } from "react";

const InputGreffier = () => {
    const [nom, setNom] = useState("");
    const [prenom, setPrenom] = useState("");
    const [date_nais, setDate_nais] = useState("");
    const [adresse, setAdresse] = useState("");
    const [etat_civile, setEtat_civile] = useState("");
    const [nombre_e, setNombre_e] = useState("");
    const [type_payement, setType_payement] = useState("");
    const [base, setBase] = useState("");
    const [cin, setCin] = useState("");
    const [tel, setTel] = useState("");
    const [categorie, setCategorie] = useState("");
    const [echelon, setEchelon] = useState("");
    const [crss, setCrss] = useState("");
    const [contrat, setContrat] = useState("");
    const [sexe, setSexe] = useState("");
    const [date_emb, setDate_emb] = useState("");
    const [actif, setActif] = useState("");
    const [unk1, setUnk1] = useState("");
    const [unk2, setUnk2] = useState("");

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = { nom,prenom,date_nais,adresse,etat_civile,nombre_e,type_payement,base,cin,tel,categorie,echelon,crss,contrat,sexe,date_emb,actif,unk1,unk2 };
      await fetch("/greffier/list", {
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
      <h1 className="text-center mt-5">Greffiers</h1>
      <form className="d-flex mt-5" onSubmit={onSubmitForm}>
        
      <input
        type="text"
        className="form-control"
        placeholder="Nom"
        value={nom}
        onChange={e => setNom(e.target.value)}
      />

      <input
        type="text"
        className="form-control"
        placeholder="Prenom"
        value={prenom}
        onChange={e => setPrenom(e.target.value)}
      />

      <input
        type="date"
        className="form-control"
        placeholder="Date de naissance"
        value={date_nais}
        onChange={e => setDate_nais(e.target.value)}
      />

    <input
        type="text"
        className="form-control"
        placeholder="Adresse"
        value={adresse}
        onChange={e => setAdresse(e.target.value)}
      />

<input
        type="text"
        className="form-control"
        placeholder="Etat civile"
        value={etat_civile}
        onChange={e => setEtat_civile(e.target.value)}
      />

      <input
        type="number"
        className="form-control"
        placeholder="Nombre_e"
        value={nombre_e}
        onChange={e => setNombre_e(e.target.value)} />

<input
        type="text"
        className="form-control"
        placeholder="Type de payement"
        value={type_payement}
        onChange={e => setType_payement(e.target.value)}
      />

<input
        type="number"
        className="form-control"
        placeholder="Base"
        value={base}
        onChange={e => setBase(e.target.value)} />
    <input
        type="number"
        className="form-control"
        placeholder="CIN"
        value={cin}
        onChange={e => setCin(e.target.value)} />

<input 
        type="tel" 
        className="form-control" 
        placeholder="12-345-678" 
        pattern="[0-9]{2}-[0-9]{3}-[0-9]{3}"
        value={tel}
        onChange={e => setTel(e.target.value)}/>

<input
        type="number"
        className="form-control"
        placeholder="Categorie"
        value={categorie}
        onChange={e => setCategorie(e.target.value)} />

<input
        type="number"
        className="form-control"
        placeholder="Echelon"
        value={echelon}
        onChange={e => setEchelon(e.target.value)} />

<input
        type="number"
        className="form-control"
        placeholder="Crss"
        value={crss}
        onChange={e => setCrss(e.target.value)} />

<input
        type="text"
        className="form-control"
        placeholder="Contrat"
        value={contrat}
        onChange={e => setContrat(e.target.value)}
      />

<input
        type="text"
        className="form-control"
        placeholder="Sexe"
        value={sexe}
        onChange={e => setSexe(e.target.value)}/>

<input
        type="date"
        className="form-control"
        placeholder="Date d'emb."
        value={date_emb}
        onChange={e => setDate_emb(e.target.value)}
      />

<input
        type="text"
        className="form-control"
        placeholder="Actif"
        value={actif}
        onChange={e => setActif(e.target.value)}
      />

<input
        type="text"
        className="form-control"
        placeholder="Unk1"
        value={unk1}
        onChange={e => setUnk1(e.target.value)}
      />

<input
        type="text"
        className="form-control"
        placeholder="Unk2"
        value={unk2}
        onChange={e => setUnk2(e.target.value)}
      />


        <button className="btn btn-success">Ajouter</button>
      </form>
    </Fragment>
  );
};

export default InputGreffier;