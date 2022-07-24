import React, { useEffect, useState } from "react";


function Navv() {
  const [params, setParams] = useState([]);
  const [timbreFiscale,setTimbreFiscale] = useState(0);
  const [tauxTVA,setTauxTVA] = useState(0);
  const [prixPhotocopie,setPrixPhotocopie] = useState(0);
  const [montantTransport,setMontantTransport] = useState(0);

  useEffect(() => {
    getParams();
  }, []);

  const updateParams = async e => {
    e.preventDefault();
    try {
      const body = { timbreFiscale, tauxTVA, prixPhotocopie, montantTransport };
       await fetch(
        `/parametres/list/5`,
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

  const getParams = async () => {
    try {
      const response = await fetch("/parametres/list");
      const jsonData = await response.json();
      
      setParams(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <>


          <div className="modal fade" id="params" data-bs-backdrop="static">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h4 className="modal-title">Mise à jour des Paramétres</h4>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" />
                </div>
                <div className="modal-body">
                  <div className="row">
                    <label className="col-form-label">
                      Timbre Fiscale
                      <input
                        type="text"
                        className="form-control"
                        placeholder="timbre fiscale"
                        value={timbreFiscale}
                        onChange={e => setTimbreFiscale(e.target.value)} />
                    </label>
                  </div>
                  <div className="row">
                    <label className="col-form-label">
                      Taux TVA
                      <input
                        type="text"
                        className="form-control"
                        placeholder="taux TVA"
                        value={tauxTVA}
                        onChange={e => setTauxTVA(e.target.value)} />
                    </label>
                  </div>
                  <div className="row">
                    <label className="col-form-label">
                      Prix Photocopie
                      <input
                        type="text"
                        className="form-control"
                        placeholder="prix photocopie"
                        value={prixPhotocopie}
                        onChange={e => setPrixPhotocopie(e.target.value)} />
                    </label>
                  </div>
                  <div className="row">
                    <label className="col-form-label">
                      Montant de transport par jours
                      <input
                        type="text"
                        className="form-control"
                        placeholder="montant"
                        value={montantTransport}
                        onChange={e => setMontantTransport(e.target.value)} />
                    </label>
                  </div>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-primary" data-bs-dismiss="modal"
                    onClick={e => updateParams(e)} >Valider</button>
                  <button type="button" className="btn btn-danger" data-bs-dismiss="modal"
                  >Fermer</button>
                </div>
              </div>
            </div>
          </div>
       
    </>
  );
}

export default Navv;