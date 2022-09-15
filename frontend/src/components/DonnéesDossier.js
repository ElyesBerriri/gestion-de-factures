import React, { useState, useEffect } from "react";
import TabAdvers from "./Tabadvers";
import CalendarComp from "./CalendarComp";

const DonnéesDossier = (props) => {
  const [emplacements, setEmplacement] = useState([]);
  const [types, setTypes] = useState([]);

  const getemp = async (query) => {
    try {
      const response = await fetch(`/dossiers/list`);
      const jsonData = await response.json();
      setEmplacement(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  const getTypes = async () => {
    try {
      const response = await fetch("/type_dossiers/list");
      const jsonData = await response.json();

      setTypes(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getemp();
    getTypes();
  }, []);


  return (

    <section className="container client2" id="donnees">

      <h1 className='titlee' >Données Dossier</h1>
      <div className=" formdonnees formclient">
        <div className="row">
          <div className="input-group mb-3">
            <span className="input-group-text">Type de dossier :</span>
            <select name="select_box" className="form-select" id="select_box" value={props.type} onChange={(e) => props.changetype(e.target.value)}>
              <option >-</option>
              {types.map(type => (
                <option key={type.libelle} value={type.libelle}>{type.libelle}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="row">
          <div className="input-group mb-3">
            <span className="input-group-text">Code:</span>

            <input type="text" className="form-control"
              placeholder="Entrez le code"
              onChange={e => props.changecode1(e.target.value || "-")}
            /> /
            <input type="text" className="form-control"
              placeholder="Entrez le code"
              onChange={e => props.changecode2(e.target.value || "-")}
            />
          </div>
        </div>

        <div className="row">
          <div className="input-group mb-3">
            <span className="input-group-text">Mission :</span>
            <input type="text" className="form-control"
              placeholder="Entrez le mission"
              onChange={e => props.changemission(e.target.value || "-")}
            />
          </div>
        </div>

        <div className="row">
          <div className="input-group mb-3">
            <span className="input-group-text">Emplacement :</span>
            <select name="select_box" className="form-select" id="select_box" value={props.emplacement} onChange={(e) => { props.changeemplacement(e.target.value) }}>
              <option >-</option>
              {emplacements.map(emp => (
                <option key={emp.libelle} value={emp.libelle}>{emp.libelle}</option>
              ))}
            </select>
          </div>
        </div>


        <div className="row">
          <div className="input-group mb-3">
            <span className="input-group-text">Num Affaire :</span>
            <input type="text" className="form-control"
              placeholder="Entrez le numéro d'affaire"
              onChange={e => props.changenumaff(e.target.value || "-")}
            />
          </div>
        </div>

        <div className="row">
          <div className="input-group mb-3">
            <span className="input-group-text">Service :</span>
            <select className="form-select" aria-label="Default select example"
              placeholder="Entrez le service"
              onChange={(e) => props.changeservice(e.target.value || "-")}>
              <option >-</option>
              <option value="Jaze2i">Service1</option>
              <option value="Madani">Service2</option>
            </select>
          </div>
        </div>

        <div className="row">
          <div className="input-group mb-3">
            <span className="input-group-text">Lieu :</span>
            <select className="form-select" aria-label="Default select example" 
              placeholder="Entrez le lieu" 
              onChange={(e) => props.changelieu(e.target.value || "-")}>
              <option >-</option>
              <option value="Jaze2i">Lieu1</option>
              <option value="Madani">Lieu2</option>
            </select>
          </div>
        </div>


        <div className="row">
          <div className="input-group mb-3">
            <span className="input-group-text">Observation :</span>
            <input type="text" className="form-control"
              placeholder="Entrez le observation"
              onChange={e => props.changeobservation(e.target.value || "-")}
            />
          </div>
        </div>

        <div className="row">
          <div className="input-group mb-3">
            <span className="input-group-text">Date :</span>
            <CalendarComp changecalendar={props.changecalendar} calendar={props.calendar} />
          </div>
        </div>
      </div>


      <TabAdvers dossier_id={props.idd}
        changeadversaires={props.changeadversaires} />
    </section>
  )

};

export default DonnéesDossier;


