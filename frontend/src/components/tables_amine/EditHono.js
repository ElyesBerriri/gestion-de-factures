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

      <div className="modal" id={`id${hono.gr_id}`} data-bs-backdrop="static">
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
              <div className="row">
                <div className="input-group mb-3">
                  <span className="input-group-text ">Libellé Arabe :</span>
                  <input
                    type="text"
                    className="form-control"
                    value={lib_arab}
                    onChange={e => setLib_arab(e.target.value)}
                  />
                </div>
              </div>

              <div className="row">
                <div className="input-group mb-3">
                  <span className="input-group-text ">Libellé Français :</span>
                  <input
                    type="text"
                    className="form-control"
                    value={lib_fr}
                    onChange={e => setLib_fr(e.target.value)} />
                </div>
              </div>

              <div className="row">
                <div className="input-group mb-3">
                  <span className="input-group-text ">Montant :</span>
                  <input
                    type="number"
                    className="form-control"
                    value={montant}
                    onChange={e => setMontant(e.target.value)} />
                </div>
              </div>
            </div>

            <div className="modal-footer">
              <Button variant="light" id="valider" data-bs-dismiss="modal"
                onClick={e => updateHono(e)}
              >Valider</Button>
              <Button variant="dark" data-bs-dismiss="modal">Fermer</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditHono;