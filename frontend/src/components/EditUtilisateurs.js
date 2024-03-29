import React, { useState } from "react";
import { Button } from "react-bootstrap";

const EditUtilisateurs = ({user}) => {
  const [login, setLogin] = useState(user.login);
  const [pwd, setPwd] = useState(user.pwd);
  const [domaine, setDomaine] = useState(user.domaine);

  const updateUser = async e => {
    e.preventDefault();
    try {
      const body = { login, pwd, domaine };
       await fetch(
        `/utilisateurs/list/${user.utilisateur_id}`,
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
      <Button variant="light" id="lubtne" className="mb-3 mx-3 disabled" data-bs-toggle="modal" 
      data-bs-target={`#id${user.utilisateur_id}`} 
      onClick={() => {
        setLogin(user.login);
        setPwd(user.pwd);
        setDomaine(user.domaine);
      }}>
        Modifier
      </Button>
      <div className="modal fade" id={`id${user.utilisateur_id}`} data-bs-backdrop="static">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Modification d'un utilisateur</h4>
              <button type="button" className="btn-close" data-bs-dismiss="modal" />
            </div>
            <div className="modal-body">
            <div className="row">
                <div className="input-group mb-3">
                  <span className="input-group-text">Login :</span>
                  <input type="text" className="form-control"
                    placeholder="login"
                    defaultValue={login}
                    onChange={e => setLogin(e.target.value||"-")} />
                </div>
              </div>
              <div className="row">
                <div className="input-group mb-3">
                  <span className="input-group-text">Pwd :</span>
                  <input type="text" className="form-control"
                    placeholder="Mot de passe"
                    defaultValue={pwd}
                    onChange={e => setPwd(e.target.value||"-")} />
                </div>
              </div>
              <div className="row">
                <div className="input-group mb-3">
                  <span className="input-group-text">Domaine :</span>
                  <input type="text" className="form-control"
                    placeholder="domaine"
                    defaultValue={domaine}
                    onChange={e => setDomaine(e.target.value||"-")} />
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <Button variant="light" data-bs-dismiss="modal"
              onClick={e => updateUser(e)}>Valider</Button>
              <Button variant="dark" data-bs-dismiss="modal"
              >Fermer</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditUtilisateurs;