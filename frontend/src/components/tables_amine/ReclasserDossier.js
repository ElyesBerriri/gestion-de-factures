import React, { useState } from "react";

const ReclasserDossier = ({dossier}) => {
  const [Emplacement, setEmplacement] = useState(dossier.emplacement);
  const [emplacements, setEmplacements] = useState([]);


  const getemp = async () => {
    try {
    const response = await fetch(`/dossiers/list`);
    const jsonData = await response.json();
    setEmplacements(jsonData);
    } catch (err) {
    console.error(err.message);
    }
};

  const updateEmplacement = async e => {
    e.preventDefault();
    try {
      const body = { Emplacement };
       await fetch(
        `/dossierss/list/${dossier.dossier_id}`,
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
      data-bs-target={`#id${dossier.dossier_id}`} onClick={() => setEmplacement(dossier.emplacement)}>
        Reclasser Dossier
      </button>

      <div class="modal fade" data-bs-backdrop="static" id={`id${dossier.dossier_id}`}>
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title">Reclassement du dossier</h4>
              <button type="button" class="btn-close" data-bs-dismiss="modal" />
            </div>
            <div class="modal-body">
              <div className="row">
                <label className="col-form-label">Emplacement Dossier </label>
                
                <select class="form-select" aria-label="Default select example" 
                    onChange={e => setEmplacement(e.target.options[e.target.selectedIndex].value)}>
                    <option value={Emplacement} selected>{Emplacement}</option>
                    {emplacements.map(emp => (<option value={emp.libelle}>{emp.libelle}</option>))}
                </select>
              </div>
            </div>

            <div class="modal-footer">
              <button type="button" class="btn btn-primary" data-bs-dismiss="modal"
              onClick={e => updateEmplacement(e)}>Valider</button>
              <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Fermer</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReclasserDossier;