import React, { useState } from "react";

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
      <button type="button" className="btn btn-primary" data-bs-toggle="modal" 
      data-bs-target={`#id${user.utilisateur_id}`} 
      onClick={() => {
        setLogin(user.login);
        setPwd(user.pwd);
        setDomaine(user.domaine);
      }}>
        Modifier
      </button>
      <div className="modal fade" id={`id${user.utilisateur_id}`} data-bs-backdrop="static">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Modification d'un utilisateur</h4>
              <button type="button" className="btn-close" data-bs-dismiss="modal" />
            </div>
            <div className="modal-body">
              <div className="row">
                <label className="col-form-label">
                  Login
                  <input
                    type="text"
                    className="form-control"
                    placeholder="login"
                    value={login}
                    onChange={e => setLogin(e.target.value)} />
                </label>
              </div>
              <div className="row">
                <label className="col-form-label">
                  PWD
                  <input
                    type="text"
                    className="form-control"
                    placeholder="pwd"
                    value={pwd}
                    onChange={e => setPwd(e.target.value)} />
                </label>
              </div>
              <div className="row">
                <label className="col-form-label">
                  Domaine
                  <input
                    type="text"
                    className="form-control"
                    placeholder="domaine"
                    value={domaine}
                    onChange={e => setDomaine(e.target.value)} />
                </label>
              </div>
            </div>

            <div className="modal-footer">
              <button type="button" className="btn btn-primary" data-bs-dismiss="modal"
              onClick={e => updateUser(e)}>Valider</button>
              <button type="button" className="btn btn-danger" data-bs-dismiss="modal"
              >Fermer</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditUtilisateurs;