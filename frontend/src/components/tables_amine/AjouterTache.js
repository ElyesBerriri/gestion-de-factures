import React, { useState } from "react";
import CalendarComp from "../CalendarComp";
import Button from "react-bootstrap/esm/Button";

const AjouterTache = ({ dossier }) => {
  const [tache, settache] = useState("*");
  const [datec, setdatec] = useState("*");
  const [dater, setdater] = useState("*");
  const [resolu, setresolu] = useState("*");
  const [personnech, setpersonnech] = useState("*");
  const [greffier, setgreffier] = useState("*");
  const [course, setcourse] = useState("*");
  const [lieu, setlieu] = useState("*");
  const [service, setservice] = useState("*");
  const [dateaud, setdateaud] = useState("*");
  const [dateech, setdateech] = useState("*");
  const [brouillon, setbrouillon] = useState("oui");
  const [dossier_id, setidd] = useState(dossier.dossier_id);

  const onSubmitForm = async (e) => {
    console.log(dossier_id);
    try {
      const body = { dossier_id, tache, datec, dater, resolu, course, lieu, service, dateaud, dateech, greffier, personnech, brouillon };
      await fetch("/tache/list", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      });
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <>
      <Button variant="dark" data-bs-toggle="modal" data-bs-target="#exampleModalll" id="rebtnat" className="mb-3 disabled">
        Ajouter tache
      </Button>
      <div className="modal fade" id="exampleModalll" data-bs-backdrop="static">
        <div className="modal-dialog modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Nouvelle tache :</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div className="container ">
                <form >
                  <div className="row mb-3">
                    <label className="col-sm-2 col-form-label col-form-label-sm">Tache : </label>
                    <div className="col-sm-10">
                      <input type="text" className="form-control form-control-sm" id="colFormLabelSm"
                        placeholder="Tache"
                        value={tache}
                        onChange={e => settache(e.target.value)} />
                    </div>
                  </div>
                  <div className="row">
                    <div className="input-group mb-3">
                      <span className="input-group-text">Date critique :</span>
                      <CalendarComp changecalendar={(e) => setdatec(e)} calendar={datec} />
                    </div>
                  </div>
                  <div className="row">
                    <div className="input-group mb-3">
                      <span className="input-group-text">Date rappel :</span>
                      <CalendarComp changecalendar={(e) => setdater(e)} calendar={dater} />
                    </div>
                  </div>
                  <div className="row mb-3">
                    <label className="col-sm-2 col-form-label col-form-label-sm">Résolu :</label>
                    <div className="form-check">
                      <label className="form-check-label" >
                        <input className="form-check-input" type="radio" name="resolu"
                          value="Oui"
                          onChange={e => {
                            if (e.target.checked)
                              setresolu(e.target.value);
                          }}
                        />
                        Oui
                      </label>
                    </div>
                    <div className="form-check">
                      <label className="form-check-label">
                        <input className="form-check-input" type="radio" name="resolu"
                          value="Non"
                          onChange={e => {
                            if (e.target.checked)
                              setresolu(e.target.value);
                          }}
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
                          onChange={e => {
                            if (e.target.checked)
                              setpersonnech(e.target.value);
                          }}
                        />
                        Collaborateur
                      </label>
                    </div>
                    <div className="form-check">
                      <label className="form-check-label">
                        <input className="form-check-input" type="radio" name="chargée"
                          value="greffier"
                          onChange={e => {
                            if (e.target.checked)
                              setpersonnech(e.target.value);
                          }}
                        />
                        Greffier
                      </label>
                    </div>
                  </div>
                  <label className="col-sm-2 col-form-label col-form-label-sm">Greffier :</label>
                  <select className="form-select" aria-label="Default select example" value={greffier} onChange={(e) => setgreffier(e.target.value)}>
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
                          onChange={e => {
                            if (e.target.checked)
                              setcourse(e.target.value);
                          }}
                        />
                        Oui
                      </label>
                    </div>
                    <div className="form-check">
                      <label className="form-check-label">
                        <input className="form-check-input" type="radio" name="course"
                          value="non"
                          onChange={e => {
                            if (e.target.checked)
                              setcourse(e.target.value);
                          }}
                        />
                        Non
                      </label>
                    </div>
                  </div>
                  <label className="col-sm-2 col-form-label col-form-label-sm">Lieu :</label>
                  <select className="form-select" aria-label="Default select example" value={lieu} onChange={(e) => setlieu(e.target.value)}>
                    <option></option>
                    <option value="Jaze2i">Jaze2i</option>
                    <option value="Madani">Madani</option>
                  </select>
                  <label className="col-sm-2 col-form-label col-form-label-sm">Service :</label>
                  <select className="form-select" aria-label="Default select example" value={service} onChange={(e) => setservice(e.target.value)}>
                    <option></option>
                    <option value="Jaze2i">Jaze2i</option>
                    <option value="Madani">Madani</option>
                  </select>
                  <div className="row">
                    <div className="input-group mb-3">
                      <span className="input-group-text">Date d'audiance :</span>
                      <CalendarComp changecalendar={(e) => setdateaud(e)} calendar={dateaud} />
                    </div>
                  </div>
                  <div className="row">
                    <div className="input-group mb-3">
                      <span className="input-group-text">Date d'échéance  :</span>
                      <CalendarComp changecalendar={(e) => setdateech(e)} calendar={dateech} />
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="modal-footer">
              <Button onClick={onSubmitForm} type="submit" data-bs-dismiss="modal" variant="light">Sauvegarder</Button>
              <Button variant="dark" data-bs-dismiss="modal">Fermer</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AjouterTache;