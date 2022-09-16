import React, { Fragment, useState, useEffect } from "react";
import CalendarComp from "../CalendarComp";
import Button from "react-bootstrap/esm/Button";
import Modal from 'react-bootstrap/Modal';
import { GoPlus } from "react-icons/go";
import ModalDialog from 'react-bootstrap/ModalDialog'


const AjouterTache = ({ dossier }) => {
  const [tache, settache] = useState("-");
  const [datec, setdatec] = useState("-");
  const [dater, setdater] = useState("-");
  const [resolu, setresolu] = useState("-");
  const [personnech, setpersonnech] = useState("-");
  const [greffier, setgreffier] = useState("-");
  const [course, setcourse] = useState("-");
  const [lieu, setlieu] = useState("-");
  const [service, setservice] = useState("-");
  const [dateaud, setdateaud] = useState("-");
  const [dateech, setdateech] = useState("-");
  const [brouillon, setbrouillon] = useState("oui");
  const [dossier_id, setidd] = useState(dossier.dossier_id);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


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


                  <div className="row">
                    <div className="input-group mb-3">
                      <span className="input-group-text ">Tâche :</span>
                      <input type="text" className="form-control "
                        placeholder="Tâche"
                        onChange={e => settache(e.target.value || "-")} />
                    </div>
                  </div>

                  <div className="row">
                    <div className="input-group mb-3">
                      <span className="input-group-text ">Date critique :</span>
                      <CalendarComp changecalendar={(e) => setdatec(e)} calendar={datec} />
                    </div>
                  </div>

                  <div className="row">
                    <div className="input-group mb-3">
                      <span className="input-group-text ">Date rappel :</span>
                      <CalendarComp changecalendar={(e) => setdater(e)} calendar={dater} />
                    </div>
                  </div>


                  <div className="row">
                    <div className="input-group mb-3">
                      <span className="input-group-text">Résolu :</span>
                      <div className="mytext">
                        <input className="myradio ms-3 me-1" type="radio" name="resolu"
                          value="Oui"
                          onChange={e => {
                            if (e.target.checked)
                              setresolu(e.target.value);
                          }}
                        />
                        Oui

                        <input className="myradio ms-3 me-1" type="radio" name="resolu"
                          value="Non"
                          onChange={e => {
                            if (e.target.checked)
                              setresolu(e.target.value);
                          }}
                        />
                        Non
                      </div>
                    </div>
                  </div>




                  <div className="row">
                    <div className="input-group mb-3">
                      <span className="input-group-text">Personne chargée :</span>
                      <div className="mytext">
                        <input className="myradio ms-3 me-1" type="radio" name="chargée"
                          value="collaborateur"
                          onChange={e => {
                            if (e.target.checked)
                              setpersonnech(e.target.value);
                          }}
                        />
                        Collaborateur

                        <input className="myradio ms-3 me-1" type="radio" name="chargée"
                          value="greffier"
                          onChange={e => {
                            if (e.target.checked)
                              setpersonnech(e.target.value);
                          }}
                        />
                        Greffier
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="input-group mb-3">
                      <span className="input-group-text ">Greffier :</span>
                      <select className="form-select" aria-label="Default select example" value={greffier}
                        onChange={(e) => setgreffier(e.target.value||"-")}>
                        <option>-</option>
                        <option value="Jaze2i">Jaze2i</option>
                        <option value="Madani">Madani</option>
                      </select>
                    </div>
                  </div>



                  <div className="row">
                    <div className="input-group mb-3">
                      <span className="input-group-text">Course :</span>
                      <div className="mytext">
                        <input className="myradio ms-3 me-1" type="radio" name="course"
                          value="oui"
                          onChange={e => {
                            if (e.target.checked)
                              setcourse(e.target.value);
                          }}
                        />
                        Oui

                        <input className="myradio ms-3 me-1" type="radio" name="course"
                          value="non"
                          onChange={e => {
                            if (e.target.checked)
                              setcourse(e.target.value);
                          }}
                        />
                        Non
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="input-group mb-3">
                      <span className="input-group-text ">Lieu :</span>
                      <select className="form-select" aria-label="Default select example" value={lieu} onChange={(e) => setlieu(e.target.value||"-")}>
                        <option>-</option>
                        <option value="Jaze2i">Jaze2i</option>
                        <option value="Madani">Madani</option>
                      </select>
                    </div>
                  </div>


                  <div className="row">
                    <div className="input-group mb-3">
                      <span className="input-group-text ">Service :</span>
                      <select className="form-select" aria-label="Default select example" value={service} onChange={(e) => setservice(e.target.value||"-")}>
                        <option>-</option>
                        <option value="Jaze2i">Jaze2i</option>
                        <option value="Madani">Madani</option>
                      </select>
                    </div>
                  </div>


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
              <Button onClick={onSubmitForm} type="submit" data-bs-dismiss="modal" variant="light">Valider</Button>
              <Button variant="dark" data-bs-dismiss="modal">Fermer</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AjouterTache;