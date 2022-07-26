import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Search from "./Search";
import Button from "react-bootstrap/esm/Button";

const EmplacementDossier = () => {
    const [dossiers, setDossiers] = useState([]);
    const [query, setQuery] = useState("");
    const [emplacement, setEmplacement] = useState("Tous");
    const [emplacements, setEmplacements] = useState([]);
    const [row, setRow] = useState("");
    const [doc, setDoc] = useState({});

    const getemp = async () => {
        try {
            const response = await fetch(`/dossiers/list`);
            const jsonData = await response.json();
            setEmplacements(jsonData);
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
            <h1 className='title'>Mettre à jours Emplacement Dossier</h1>
            <div className="mycontainer">
                <label className="mylegend">Emplacement : </label>
                <select className="myselect"
                    onChange={e => setEmplacement(e.target.options[e.target.selectedIndex].value)}>
                    <option value="Tous" defaultChecked key={0}>Tous</option>
                    {emplacements.map(emp => (<option value={emp.libelle} key={emp.dossier_id}>{emp.libelle}</option>))}
                </select>
            </div>
            <div className="mycontainer">
                <label className="mylegend">Mots Clés : </label>
                <Search setQuery={(e) => setQuery(e)} />
            </div>
            <div className="table-responsive m-3 mytable mytable-52">
                <table className="table table-hover text-center">
                    <thead className="table-secondary text-secondary mytableheader">
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col">Numéro affaire</th>
                            <th scope="col">Emplacement</th>
                            <th scope="col">Client</th>
                            <th scope="col">Téléphone</th>
                            <th scope="col">Mission</th>
                            <th scope="col">Adversaire</th>
                        </tr>
                    </thead>
                    <tbody>
                        {dossiers.map(dossier => {
                            if (emplacement == "Tous" || emplacement == dossier.emplacement) return (
                                <tr key={dossier.dossier_id} id={`doc${dossier.dossier_id}`} onClick={() => {
                                    let e = document.getElementById(`doc${dossier.dossier_id}`);
                                    if (e.className !== "table-secondary") {
                                        if (row !== "") document.getElementById(row).className = "";
                                        e.className = "table-secondary";
                                        setRow(`doc${dossier.dossier_id}`);
                                        setDoc(dossier);
                                    }
                                }}>
                                    <td data-label="Id">{dossier.dossier_id}</td>
                                    <td data-label="Numéro affaire">{dossier.numaff}</td>
                                    <td data-label="Emplacement">{dossier.emplacement}</td>
                                    <td data-label="Client">{dossier.client}</td>
                                    <td data-label="Téléphone">{dossier.tel}</td>
                                    <td data-label="Mission">{dossier.mission}</td>
                                    <td data-label="Adversaire">{dossier.adversaire}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
            <div className="mb-3">
                <Button variant="dark">
                    Transférer
                </Button>
                <Button variant="light" className="mx-3">
                    Libérer
                </Button>
                <Link to="/PDF" state={{ from: doc }}>
                    <Button variant="dark">Imprimer</Button>
                </Link>
            </div>
        </>
    )
};

export default EmplacementDossier;