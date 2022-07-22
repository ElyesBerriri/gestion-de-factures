import React, { Fragment,useState, useEffect } from "react";
import {Link} from "react-router-dom";
import ReclasserDossier from "./ReclasserDossier";

const Rechercher = () => {
    const [dossiers, setDossiers] = useState([]);
    const [query, setQuery] = useState("");


    const deleteDossier = async id => {
        try {
            await fetch(`/dossierss/list/${id}`, {
                method: "DELETE"
            });
            setDossiers(dossiers.filter(dossier => dossier.dossier_id !== id));
        } catch (err) {
            console.error(err.message);
        }
    };

    const getDossier = async () => {
        try {
            const response = await fetch(`/dossierss/list/?q=${query}`);
            const jsonData = await response.json();
            setDossiers(jsonData);
        } catch (err) {
            console.error(err.message);
        }
    };

    useEffect(() => {
        getDossier();
        getemp();
    }, [query]);

    return (
        <Fragment>
            <h1 className="text-center mt-5">Rechercher</h1>
            {" "}
            <div class="row mb-3">
                <table>
                <tr>
                <th><label class="col-sm-2 col-form-label col-form-label-sm"><h2>Mots clés : </h2></label></th>
                <th><input className="search " placeholder="Recherche .." onChange={(e) => setQuery(e.target.value.toLowerCase())} /> </th>
                </tr>
                </table>
            </div>
            <table class="table table-hover mt-2 text-center">
                <thead class="table-dark">
                    <tr className="bg-primary">
                        <th scope="col">ID_DOSSIER</th>
                        <th scope="col">Numéro affaire</th>
                        <th scope="col">Emplacement dossier</th>
                        <th scope="col">Client</th>
                        <th scope="col">Téléphone</th>
                        <th scope="col">Mission</th>
                        <th scope="col">Adversaire</th>
                        <th scope="col"></th>
                        <th scope="col"></th>
                        <th scope="col"></th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
            
                    {dossiers.map(dossier => (
                        <tr key={dossier.dossier_id}>
                            <td>{dossier.dossier_id}</td>
                            <td>{dossier.numaff}</td>
                            <td>{dossier.emplacement}</td>
                            <td>{dossier.client}</td>
                            <td>{dossier.tel}</td>
                            <td>{dossier.mission}</td>
                            <td>{dossier.adversaire}</td>
                            
                            <td>
                                <button
                                    className="btn btn-warning" >
                                    Ajouter Tâche
                                </button>
                            </td>

                            <td>
                                <ReclasserDossier dossier={dos} />
                            </td>

                            <td>
                                <button
                                    className="btn btn-warning" >
                                    Archiver Dossier
                                </button>
                            </td>

                            <td>
                                <button
                                    className="btn btn-danger"
                                    onClick={() => deleteDossier(dossier.dossier_id)}>
                                    Supprimer Dossier
                                </button>
                            </td>

                            <td>
                                <Link to="/PDF" state={{ from: dossier }} >
                                <button className="btn btn-success">Imprimer</button>
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Fragment>
    )
};

export default Rechercher;