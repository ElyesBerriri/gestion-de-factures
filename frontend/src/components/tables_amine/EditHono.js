import React, { useState } from "react";

const EditHono = ({hono}) => {
  const [lib_arab, setLib_arab] = useState(hono.lib_arab);
  const [lib_fr, setLib_fr] = useState(hono.lib_fr);
  const [montant, setMontant] = useState(hono.montant);

  const updateHono = async e => {
    e.preventDefault();
    try {
      const body = { lib_arab,lib_fr, montant};
       await fetch(
        `/honoraires/list/${hono.id}`,
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
      data-bs-target={`#id${hono.id}`}>
        Modifier
      </button>
      <div class="modal" id={`id${hono.id}`}>
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title">Modification d'un honoraire</h4>
              <button type="button" class="btn-close" data-bs-dismiss="modal"
                onClick={() => {
                  setLib_arab(hono.lib_arab);
                  setLib_fr(hono.lib_fr);
                  setMontant(hono.montant);
                }}>
              </button>
            </div>
            <div class="modal-body">
              <input
                type="text"
                className="form-control"
                placeholder="libelle en arabe"
                value={lib_arab}
                onChange={e => setLib_arab(e.target.value)} />
                <input
                type="text"
                className="form-control"
                placeholder="libelle en français"
                value={lib_fr}
                onChange={e => setLib_fr(e.target.value)} />
              <input
                type="number"
                className="form-control"
                placeholder="montant"
                value={montant}
                onChange={e => setMontant(e.target.value)} />
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-primary" data-bs-dismiss="modal"
              onClick={e => updateHono(e)}>Valider</button>
              <button type="button" class="btn btn-danger" data-bs-dismiss="modal"
              onClick={() => {
                setLib_arab(hono.lib_arab);
                setLib_fr(hono.lib_fr);
                setMontant(hono.montant);
              }}>Fermer</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditHono;