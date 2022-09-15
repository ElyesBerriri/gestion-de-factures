import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { GoPlus } from "react-icons/go";

const InputUtilisateur = () => {
  const [login, setLogin] = useState("-");
  const [pwd, setPwd] = useState("-");
  const [domaine, setDomaine] = useState("-");

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = { login, pwd, domaine };
      await fetch("/utilisateurs/list", {
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
    <>
      
        <button data-bs-toggle="modal" data-bs-target="#utid0" className="ajouter ajoutdossier" 
        onClick={() => {
          setLogin("-");
          setPwd("-");
          setDomaine("-");
        }} ><GoPlus color="#BBA14A" fontSize="1.5em" />
        </button>
     
      <div className="modal fade" id="utid0" data-bs-backdrop="static">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Ajouter un utilisateur</h4>
              <button type="button" className="btn-close" data-bs-dismiss="modal">
              </button>
            </div>
            <div className="modal-body">
              <div className="row">
                <div className="input-group mb-3">
                  <span className="input-group-text">Login :</span>
                  <input type="text" className="form-control"
                    placeholder="login"
                    onChange={e => setLogin(e.target.value||"-")} />
                </div>
              </div>
              <div className="row">
                <div className="input-group mb-3">
                  <span className="input-group-text">Mot de passe :</span>
                  <input type="text" className="form-control"
                    placeholder="Mot de passe"
                    onChange={e => setPwd(e.target.value||"-")} />
                </div>
              </div>
              <div className="row">
                <div className="input-group mb-3">
                  <span className="input-group-text">Domaine :</span>
                  <input type="text" className="form-control"
                    placeholder="domaine"
                    onChange={e => setDomaine(e.target.value||"-")} />
                </div>
              </div>
              <div className="modal-footer">
                <Button variant="light" data-bs-dismiss="modal"
                  onClick={onSubmitForm}>Valider</Button>
                <Button variant="dark" data-bs-dismiss="modal"
                >Fermer</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InputUtilisateur;