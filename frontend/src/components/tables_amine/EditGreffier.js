import React, { useState } from "react";

const EditGreffier = ({gref}) => {
    console.log(gref);
    const [nom, setNom] = useState(gref.nom);
    const [prenom, setPrenom] = useState(gref.prenom);
    const [date_nais, setDate_nais] = useState(gref.date_nais);
    const [adresse, setAdresse] = useState(gref.adresse);
    const [etat_civile, setEtat_civile] = useState(gref.etat_civile);
    const [nombre_e, setNombre_e] = useState(gref.nombre_e);
    const [type_payement, setType_payement] = useState(gref.type_payement);
    const [base, setBase] = useState(gref.base);
    const [cin, setCin] = useState(gref.cin);
    const [tel, setTel] = useState(gref.tel);
    const [categorie, setCategorie] = useState(gref.categorie);
    const [echelon, setEchelon] = useState(gref.echelon);
    const [crss, setCrss] = useState(gref.crss);
    const [contrat, setContrat] = useState(gref.contrat);
    const [sexe, setSexe] = useState(gref.sexe);
    const [date_emb, setDate_emb] = useState(gref.date_emb);
    const [actif, setActif] = useState(gref.actif);
    const [unk1, setUnk1] = useState(gref.unk1);
    const [unk2, setUnk2] = useState(gref.unk2);

  const updateGreffier = async e => {
    e.preventDefault();
    try {
      const body = { nom,prenom,date_nais,adresse,etat_civile,nombre_e,type_payement,base,cin,tel,categorie,echelon,crss,contrat,sexe,date_emb,actif,unk1,unk2};
       await fetch(
        `/greffier/list/${gref.gref_id}`,
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
    <>
      <button type="button" class="btn btn-primary" data-bs-toggle="modal" 
      data-bs-target={`#id${gref.gref_id}`}>
        Modifier
      </button>
      <div class="modal" id={`id${gref.gref_id}`}>
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title">Modification d'un greffier</h4>
              <button type="button" class="btn-close" data-bs-dismiss="modal"
                onClick={() => {
                    setNom(gref.nom);
                    setPrenom(gref.prenom);
                    setDate_nais(gref.date_nais);
                    setAdresse(gref.adresse);
                    setEtat_civile(gref.etat_civile);
                    setNombre_e(gref.nombre_e);
                    setType_payement(gref.type_payement);
                    setBase(gref.base);
                    setCin(gref.cin);
                    setTel(gref.tel);
                    setCategorie(gref.categorie);
                    setEchelon(gref.echelon);
                    setCrss(gref.crss);
                    setContrat(gref.contrat);
                    setSexe(gref.sexe);
                    setDate_emb(gref.date_emb);
                    setActif(gref.actif);
                    setUnk1(gref.unk1);
                    setUnk2(gref.unk2);
                }}>
              </button>
            </div>
            <div class="modal-body">
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
        type="text"
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
        type="number" 
        className="form-control" 
        placeholder="Téléphone" 
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
        type="text"
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

            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-primary" data-bs-dismiss="modal"
              onClick={e => updateGreffier(e)}>Valider</button>
              <button type="button" class="btn btn-danger" data-bs-dismiss="modal"
              onClick={() => {
                    setNom(gref.nom);
                    setPrenom(gref.prenom);
                    setDate_nais(gref.date_nais);
                    setAdresse(gref.adresse);
                    setEtat_civile(gref.etat_civile);
                    setNombre_e(gref.nombre_e);
                    setType_payement(gref.type_payement);
                    setBase(gref.base);
                    setCin(gref.cin);
                    setTel(gref.tel);
                    setCategorie(gref.categorie);
                    setEchelon(gref.echelon);
                    setCrss(gref.crss);
                    setContrat(gref.contrat);
                    setSexe(gref.sexe);
                    setDate_emb(gref.date_emb);
                    setActif(gref.actif);
                    setUnk1(gref.unk1);
                    setUnk2(gref.unk2);
              }}>Fermer</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditGreffier;