import React, { useState, useEffect } from "react";
import {Link} from "react-router-dom";
const EmplacementDossier = () => {
    const [dossiers, setDossiers] = useState([]);
    const [query, setQuery] = useState("");
    const [emplacement,setEmplacement] = useState("Tous");
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
        <>
            {" "}
            <div class="row mb-3">
                <label class="col-sm-2 col-form-label col-form-label-sm">Emplacement : </label>
                <select class="form-select" aria-label="Default select example" 
                    onChange={e => setEmplacement(e.target.options[e.target.selectedIndex].value)}>
                    <option value="Tous" selected>Tous</option>
                    {emplacements.map(emp => (<option value={emp.libelle}>{emp.libelle}</option>))}
                </select>
            </div>
            <input
                className="search "
                placeholder="Recherche .."
                onChange={(e) => setQuery(e.target.value.toLowerCase())} />
            <table class="table table-hover mt-2 text-center">
                <thead class="table-dark">
                    <tr className="bg-primary">
                        <th scope="col">id</th>
                        <th scope="col">num_affaire</th>
                        <th scope="col">emplacement</th>
                        <th scope="col">client</th>
                        <th scope="col">tel</th>
                        <th scope="col">mission</th>
                        <th scope="col">adversaire</th>
                        <th scope="col"></th>
                        <th scope="col"></th>
                        <th scope="col"></th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    {dossiers.map(dossier => {if(emplacement=="Tous" || emplacement==dossier.emplacement) return(
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
                                    className="btn btn-danger"
                                    onClick={() => deleteDossier(dossier.dossier_id)}>
                                    Supprimer
                                </button>
                            </td>
                            <td>
                                <button
                                    className="btn btn-warning" >
                                    Transférer
                                </button>
                            </td>
                            <td>
                                <button
                                    className="btn btn-danger" >
                                    Libérer
                                </button>
                            </td>
                            <td>
                                <Link to="/PDF" state={{ from: dossier }} >
                                <button className="btn btn-success">Imprimer</button>
                                </Link>
                            </td>
                        </tr>
                    )})}
                </tbody>
            </table>
        </>
    )
};

export default EmplacementDossier;