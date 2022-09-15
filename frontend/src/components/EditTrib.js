import React, { useState } from "react";
import Button from 'react-bootstrap/Button';

const EditTrib = ({ trib, id }) => {
  const [lieux, setlieux] = useState(trib.lieux);

  const updatelieux = async e => {
    e.preventDefault();
    try {
      const body = { lieux };
      await fetch(
        `/tribunaux/list/${id}`,
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
      <Button variant="light" data-bs-toggle="modal" id="clbtnm" className="mx-3 disabled"
        data-bs-target={`#id${trib.trib_id}`}
        onClick={() => setlieux(trib.lieux)}
      >Modifier</Button>

      <div className="modal fade" id={`id${trib.trib_id}`} data-bs-backdrop="static">
        <div className="modal-dialog modal-dialog-scrollable" >
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Modification de tribunal</h4>
              <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
            </div>

            <div className="modal-body">
              <div className="row">
                <div className="input-group mb-3">
                  <span className="input-group-text ">Libellé :</span>
                  <input
                    type="text"
                    className="form-control"
                    defaultValue={lieux}
                    onChange={e => setlieux(e.target.value||"-")}
                  />
                </div>
              </div>
            </div>

            <div className="modal-footer">
              <Button variant="light" id="valider" data-bs-dismiss="modal"
                onClick={e => updatelieux(e)}
              >Valider</Button>
              <Button variant="dark" data-bs-dismiss="modal">Fermer</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditTrib;