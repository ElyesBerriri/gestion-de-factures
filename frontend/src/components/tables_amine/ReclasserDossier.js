import React, { useState, useEffect } from "react";

const ReclasserDossier = ({dossier}) => {
  const [emplacement,setEmplacement] = useState(dossier.emplacement);
  const [emplacements, setEmplacements] = useState([]);
  const [selectTest, setSelectTest] = useState(false);
  

  const updateEmplacement = async e => {
    
      e.preventDefault();
      try {
        const body = { emplacement } ;
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

  
  


  const getemp = async () => {
    try {
    const response = await fetch(`/dossiers/list`);
    const jsonData = await response.json();
    setEmplacements(jsonData);
    } catch (err) {
    console.error(err.message);
    }
};


useEffect(() => {
  getemp();
}, []);



  return (
    <>
      <button type="button" className="btn btn-primary" data-bs-toggle="modal"
        data-bs-target={`#id${dossier.dossier_id}`}
        onClick={() => {
          
            setEmplacement(dossier.emplacement);
        }}>
          Reclasser Dossier
      </button>
      <div className="modal fade" id={`id${dossier.dossier_id}`} data-bs-backdrop="static">
        <div className="modal-dialog modal-dialog-scrollable" >
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Modification de l'emplacement du dossier</h4>
              <button type="button" className="btn-close" data-bs-dismiss="modal" />
            </div>
            <div className="modal-body">
              <div className="row">
                  <div className="input-group mb-3">
                    <span class="input-group-text">Nouveau Emplacement :</span>
                    <select class="form-select" aria-label="Default select example"
                      onChange={e => setEmplacement(e.target.options[e.target.selectedIndex].value)}>
                      {emplacements.map(emplacements => {
                        if (emplacements.libelle==dossier.emplacement)
                          return (<option value={emplacements.libelle} selected id={"EmpSelector"+dossier.dossier_id} onLoad={() => setSelectTest(true)}>{emplacements.libelle}</option> )
                        else
                          return (<option value={emplacements.libelle}>{emplacements.libelle}</option>)
                      })}
                      {(selectTest===false) ? <option value="--" selected id={"EmpSelector"+dossier.dossier_id}>--</option> : <option value="--">--</option>}
                    </select>
                  </div>
              </div>

            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-primary" id="valider"
              onClick={e => updateEmplacement(e)}>
                Valider
              </button>
              <button type="button" className="btn btn-danger" data-bs-dismiss="modal">
                Fermer
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ReclasserDossier;