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
      <button type="button" class="btn btn-primary" data-bs-toggle="modal" 
      data-bs-target={`#id${user.utilisateur_id}`}>
        Modifier
      </button>
      <div class="modal" id={`id${user.utilisateur_id}`}
        /*
        onClick={() => {
          setLogin(user.login);
          setPwd(user.pwd);
          setDomaine(user.domaine);
        }}*/ >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title">Modification d'un utilisateur</h4>
              <button type="button" class="btn-close" data-bs-dismiss="modal"
                onClick={() => {
                  setLogin(user.login);
                  setPwd(user.pwd);
                  setDomaine(user.domaine);
                }}>
              </button>
            </div>
            <div class="modal-body">
            <input
              type="text"
              className="form-control"
              value={login}
              onChange={e => setLogin(e.target.value)} />
            <input
              type="text"
              className="form-control"
              value={pwd}
              onChange={e => setPwd(e.target.value)} />
            <input
              type="text"
              className="form-control"
              value={domaine}
              onChange={e => setDomaine(e.target.value)} />
            </div>

            <div class="modal-footer">
              <button type="button" class="btn btn-primary" data-bs-dismiss="modal"
              onClick={e => updateUser(e)}>Valider</button>
              <button type="button" class="btn btn-danger" data-bs-dismiss="modal"
              onClick={() => {
                setLogin(user.login);
                setPwd(user.pwd);
                setDomaine(user.domaine);
                }
              }>Fermer</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditUtilisateurs;