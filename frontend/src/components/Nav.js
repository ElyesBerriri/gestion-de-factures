import React, { useEffect, useState } from "react";
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Button } from "react-bootstrap";

function Navv() {
  const [params, setParams] = useState([]);
  const [timbreFiscale, setTimbreFiscale] = useState(0);
  const [tauxTVA, setTauxTVA] = useState(0);
  const [prixPhotocopie, setPrixPhotocopie] = useState(0);
  const [montantTransport, setMontantTransport] = useState(0);

  useEffect(() => {
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
      <Navbar className="navbar" variant="dark" sticky="top" expand="sm" collapseOnSelect>
        <Navbar.Toggle className="coloring" />
        <Navbar.Collapse className="navvv">
          <Nav>
            <Nav.Item>
              <Nav.Link href="/">Accueil</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <NavDropdown title="Paramétres">
                <NavDropdown.Item href="/Empdossier">Emplacement Dossier</NavDropdown.Item>
                <NavDropdown.Item href="/Tribetadmini">Tribunaux</NavDropdown.Item>
                <NavDropdown.Item href="/Services">Administrations</NavDropdown.Item>
                <NavDropdown.Item href="/Collab"> Collaborateurs</NavDropdown.Item>
                <NavDropdown.Item href="/utilisateurs">Utilisateurs</NavDropdown.Item>
                <NavDropdown.Item href="/primes">Primes</NavDropdown.Item>
                <NavDropdown.Item href="/type_dossiers">Types des dossiers</NavDropdown.Item>
                <NavDropdown.Item href="/RecetteFinance">Recette finance</NavDropdown.Item>
                <NavDropdown.Item href="/Timbre">Timbre</NavDropdown.Item>
                <NavDropdown.Item href="/Hono">Honoraire en extra</NavDropdown.Item>
                <NavDropdown.Item href="/Greffier">Greffier</NavDropdown.Item>
                <NavDropdown.Divider />
                <button type="button" className="dropdown-item" data-bs-toggle="modal"
                  data-bs-target="#params" onClick={() => {
                    setTimbreFiscale(params[0].timbre);
                    setTauxTVA(params[0].tva);
                    setPrixPhotocopie(params[0].photocopie);
                    setMontantTransport(params[0].transport);
                  }} >
                  Paramétres Globales
                </button>
              </NavDropdown>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/clients">Clients</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <NavDropdown title="Dossiers">
                <NavDropdown.Item href="/Rechercher">Rechercher</NavDropdown.Item>
                <NavDropdown.Item href="/EmplacementDossier">Emplacement Dossier</NavDropdown.Item>
                <NavDropdown.Item href="/Creation">Creation</NavDropdown.Item>
              </NavDropdown>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <div className="modal fade" id="params" data-bs-backdrop="static">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Mise à jour des Paramétres</h4>
              <button type="button" className="btn-close" data-bs-dismiss="modal" />
            </div>
            <div className="modal-body">
            <div className="row">
                <div className="input-group mb-3">
                  <span className="input-group-text">Timbre Fiscale :</span>
                  <input type="text" className="form-control"
                    placeholder="timbre fiscale"
                    value={timbreFiscale}
                    onChange={e => setTimbreFiscale(e.target.value)} />
                </div>
              </div>
              <div className="row">
                <div className="input-group mb-3">
                  <span className="input-group-text">Taux TVA :</span>
                  <input type="text" className="form-control"
                    placeholder="taux tva"
                    value={tauxTVA}
                    onChange={e => setTauxTVA(e.target.value)} />
                </div>
              </div>
              <div className="row">
                <div className="input-group mb-3">
                  <span className="input-group-text">Prix Photocopie :</span>
                  <input type="text" className="form-control"
                    placeholder="prix photocopie"
                    value={prixPhotocopie}
                    onChange={e => setPrixPhotocopie(e.target.value)} />
                </div>
              </div>
              <div className="row">
                <div className="input-group mb-3">
                  <span className="input-group-text">Montant de transport par jours :</span>
                  <input type="text" className="form-control"
                    placeholder="montant"
                    value={montantTransport}
                    onChange={e => setMontantTransport(e.target.value)} />
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <Button variant="light" data-bs-dismiss="modal"
                onClick={e => updateParams(e)} >Valider</Button>
              <Button variant="dark" data-bs-dismiss="modal"
              >Fermer</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navv;