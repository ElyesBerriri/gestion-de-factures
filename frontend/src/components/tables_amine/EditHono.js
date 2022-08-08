import React, { useState } from "react";
import { Button } from "react-bootstrap";

const EditHono = ({ hono }) => {
  const [montant, setMontant] = useState(hono.montant);
  const [lib_arab, setLib_arab] = useState(hono.lib_arab);
  const [lib_fr, setLib_fr] = useState(hono.lib_fr);

  const updateHono = async e => {
    e.preventDefault();
    try {
      const body = { lib_arab, lib_fr, montant };
      await fetch(
        `/honoraires/list/${hono.gr_id}`,
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
      <Button variant="light" id="honoe" className="mb-3 mx-3 disabled" data-bs-toggle="modal"
        data-bs-target={`#id${hono.gr_id}`} onClick={() => {
          setLib_arab(hono.lib_arab);
          setLib_fr(hono.lib_fr)
          setMontant(hono.montant);
        }}>
        Modifier
      </Button>
      <div className="modal" id={`id${hono.gr_id}`}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Modification d'un honoraire</h4>
              <button type="button" className="btn-close" data-bs-dismiss="modal"
                onClick={() => {
                  setLib_arab(hono.lib_arab);
                  setLib_fr(hono.lib_fr);
                  setMontant(hono.montant);
                }}>
              </button>
            </div>
            <div className="modal-body">
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
            <div className="modal-footer">
              <button type="button" className="btn btn-primary" data-bs-dismiss="modal"
                onClick={e => updateHono(e)}>Valider</button>
              <button type="button" className="btn btn-danger" data-bs-dismiss="modal"
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