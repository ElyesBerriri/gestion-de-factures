import React, { useState } from "react";
import ChercherDossier from "./Chercherdossier";

const Sousdossier = (props) => {
    const [dossier, setDossier] = useState({});

    return (
        <section className='container client' id="sousdossier">
            <h1 className='titlee' >Sous dossier</h1>

            <div className="rechercheajoutcreation">
                <ChercherDossier changerdossier={(e) => setDossier(e)} dossier={dossier} />
            </div>

            <div className="formclient">
                <div className="row">
                    <div className="input-group mb-3">
                        <span className="input-group-text"> Code dossier :</span>
                        <input type="text" className="form-control"
                            disabled={true}
                            placeholder={dossier.code}
                            defaultValue={dossier.code}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="input-group mb-3">
                        <span className="input-group-text">Mission :</span>
                        <input type="text" className="form-control"
                            disabled={true}
                            placeholder={dossier.mission}
                            defaultValue={dossier.mission}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="input-group mb-3">
                        <span className="input-group-text">Emplacement :</span>
                        <input type="text" className="form-control"
                            disabled={true}
                            placeholder={dossier.emplacement}
                            defaultValue={dossier.emplacement}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="input-group mb-3">
                        <span className="input-group-text">Numéro affaire :</span>
                        <input type="text" className="form-control"
                            disabled={true}
                            placeholder={dossier.numaff}
                            defaultValue={dossier.numaff}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="input-group mb-3">
                        <span className="input-group-text">Observation :</span>
                        <input type="text" className="form-control"
                            placeholder={dossier.observation}
                            disabled={true}
                            defaultValue={dossier.observation}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Sousdossier;



