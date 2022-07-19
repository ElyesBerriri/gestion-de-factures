import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Nav() {
  const [navLinks, setNavLinks] = useState([]);
  const [navLinks1, setNavLinks1] = useState([]);
  const [navLinks2, setNavLinks2] = useState([]);
  const [params, setParams] = useState([]);
  const [timbreFiscale,setTimbreFiscale] = useState(0);
  const [tauxTVA,setTauxTVA] = useState(0);
  const [prixPhotocopie,setPrixPhotocopie] = useState(0);
  const [montantTransport,setMontantTransport] = useState(0);

  useEffect(() => {
    const navs = [
      {name:"Emplacement Dossier", path:"/Empdossier"},
      {name:"Tribunaux", path:"/Tribetadmini"},
      {name:"Administrations", path:"/Services"},
      {name:"Collaborateurs", path:"/Collab"},
      {name:"Utilisateurs", path:"/utilisateurs"},
      {name:"Primes", path:"/primes"},
      {name:"Types de dossiers", path:"/type_dossiers"},
      {name:"RecetteFinance", path:"/RecetteFinance"},
      {name:"Timbre", path:"/Timbre"},
      {name:"Honoraire en extra", path:"/Hono"},
      {name:"Greffier", path:"/Greffier"},

    ];
    const navs1 = [
      { name: "Clients", path: "/clients" }
    ];
    const navs2 = [
      {name:"Emplacement Dossier", path:"/EmplacementDossier"},
      {name:"Creation", path:"/Creation"}
    ];
    setNavLinks(navs);
    setNavLinks1(navs1);
    setNavLinks2(navs2);
    getParams();
  }, []);

  const updateParams = async e => {
    e.preventDefault();
    try {
      const body = { timbreFiscale, tauxTVA, prixPhotocopie, montantTransport };
       await fetch(
        `/parametres/list/5`,
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

  const getParams = async () => {
    try {
      const response = await fetch("/parametres/list");
      const jsonData = await response.json();
      
      setParams(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <>
      <div className="d-flex justify-content-center">
          <a className="navbar-brand" href="/">Accueil</a>
          <div className="btn-group">
            <button
              type="button"
              className="btn btn-primary dropdown-toggle"
              data-bs-toggle="dropdown"
              data-bs-display="static"
              aria-expanded="false"
            >
              Parametres
            </button>
            <ul className="dropdown-menu dropdown-menu-end">
              <li>
                <button type="button" className="dropdown-item" data-bs-toggle="modal"
                  data-bs-target="#params" onClick={()=>{
                    setTimbreFiscale(params[0].timbre);
                    setTauxTVA(params[0].tva);
                    setPrixPhotocopie(params[0].photocopie);
                    setMontantTransport(params[0].transport);
                  }} >
                  Paramétres Globales
                </button>
                
              </li>
              {navLinks.map((d, i) => (
                <li key={i}>
                  
                  <Link to={d.path}>
                    <button className="dropdown-item" type="button">
                      {d.name}
                    </button>
                  </Link> 
                 
                </li>
              ))}
            </ul>
          </div>
          <div className="modal fade" id="params" data-bs-backdrop="static">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h4 className="modal-title">Mise à jour des Paramétres</h4>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" />
                </div>
                <div className="modal-body">
                  <div className="row">
                    <label className="col-form-label">
                      Timbre Fiscale
                      <input
                        type="text"
                        className="form-control"
                        placeholder="timbre fiscale"
                        value={timbreFiscale}
                        onChange={e => setTimbreFiscale(e.target.value)} />
                    </label>
                  </div>
                  <div className="row">
                    <label className="col-form-label">
                      Taux TVA
                      <input
                        type="text"
                        className="form-control"
                        placeholder="taux TVA"
                        value={tauxTVA}
                        onChange={e => setTauxTVA(e.target.value)} />
                    </label>
                  </div>
                  <div className="row">
                    <label className="col-form-label">
                      Prix Photocopie
                      <input
                        type="text"
                        className="form-control"
                        placeholder="prix photocopie"
                        value={prixPhotocopie}
                        onChange={e => setPrixPhotocopie(e.target.value)} />
                    </label>
                  </div>
                  <div className="row">
                    <label className="col-form-label">
                      Montant de transport par jours
                      <input
                        type="text"
                        className="form-control"
                        placeholder="montant"
                        value={montantTransport}
                        onChange={e => setMontantTransport(e.target.value)} />
                    </label>
                  </div>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-primary" data-bs-dismiss="modal"
                    onClick={e => updateParams(e)} >Valider</button>
                  <button type="button" className="btn btn-danger" data-bs-dismiss="modal"
                  >Fermer</button>
                </div>
              </div>
            </div>
          </div>
          <div className="btn-group">
            <button
              type="button"
              className="btn btn-primary dropdown-toggle"
              data-bs-toggle="dropdown"
              data-bs-display="static"
              aria-expanded="false"
            >
              Clients
            </button>
            <ul className="dropdown-menu dropdown-menu-end">
              {navLinks1.map((d, i) => (
                <li key={i}>
                  <Link to={d.path}>
                    <button className="dropdown-item" type="button">
                      {d.name}
                    </button>
                  </Link> 
                </li>
              ))}
            </ul>
          </div>
          <div className="btn-group">
            <button
              type="button"
              className="btn btn-primary dropdown-toggle"
              data-bs-toggle="dropdown"
              data-bs-display="static"
              aria-expanded="false"
            >
              Dossiers
            </button>
            <ul className="dropdown-menu dropdown-menu-end">
              {navLinks2.map((d, i) => (
                <li key={i}>
                  <Link to={d.path}>
                    <button className="dropdown-item" type="button">
                      {d.name}
                    </button>
                  </Link> 
                </li>
              ))}
            </ul>
          </div>
        </div>
    </>
  );
}

export default Nav;