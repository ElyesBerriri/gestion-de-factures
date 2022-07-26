import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ReclasserDossier from "./ReclasserDossier";
import AjouterTache from "./AjouterTache";
import Search from "../Search";
import Button from "react-bootstrap/esm/Button";

const Rechercher = () => {
    const [taches, settaches] = useState([]);
    const [dossiers, setDossiers] = useState([]);
    const [query, setQuery] = useState("");
    const [row, setRow] = useState("");
    const [doc, setDoc] = useState({});

    const gettache = async (id) => {
        if (id !== 0) {
            try {
                const response = await fetch(`/tache/listtotal/${id}`);
                const jsonData = await response.json();
                settaches(jsonData);
            }
            catch (err) {
                console.error(err.message);
            }
        }
    };

    const deleteDossier = async id => {
        setRow("");
        setDoc({});
        // delete taches
        let taches = [];
        try {
            const response = await fetch(`/tache/listid/${id}`);
            const jsonData = await response.json();
            taches = jsonData;
        } catch (err) {
            console.error(err.message);
        }
        taches.map((tache) => {
            try {
                fetch(`/tache/list/${tache.tache_id}`, {
                    method: "DELETE"
                });
            } catch (err) {
                console.error(err.message);
            }
        });

        // delete adversaires
        let adversaires = [];
        try {
            const response = await fetch(`/adversaire/listid/${id}`);
            const jsonData = await response.json();
            adversaires = jsonData;
        } catch (err) {
            console.error(err.message);
        }
        adversaires.map((adversaire) => {
            try {
                fetch(`/adversaire/list/${adversaire.adversaire_id}`, {
                    method: "DELETE"
                });
            } catch (err) {
                console.error(err.message);
            }
        });

        // delete demandeurs
        let demandeurs = [];
        try {
            const response = await fetch(`/demandeurs/listid/${id}`);
            const jsonData = await response.json();
            demandeurs = jsonData;
        } catch (err) {
            console.error(err.message);
        }
        demandeurs.map((demandeur) => {
            try {
                fetch(`/demandeurs/list/${demandeur.demandeur_id}`, {
                    method: "DELETE"
                });
            } catch (err) {
                console.error(err.message);
            }
        });

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
    }, [query]);

    return (
        <>
            <h1 className="title">Rechercher</h1>
            {" "}
            <div className="mycontainer">
                <label className="mylegend">Mots Clés : </label>
                <Search setQuery={(e) => setQuery(e)} />
            </div>
            <div className="table-responsive m-3 mytable mytable-60">
                <table className="table table-hover text-center">
                    <thead className="table-secondary text-secondary mytableheader">
                        <tr className="bg-primary">
                            <th scope="col">Id</th>
                            <th scope="col" className="text-nowrap">Numéro affaire</th>
                            <th scope="col" className="text-nowrap">Emplacement</th>
                            <th scope="col">Client</th>
                            <th scope="col">Téléphone</th>
                            <th scope="col">Mission</th>
                            <th scope="col">Adversaire</th>
                        </tr>
                    </thead>
                    <tbody>
                        {dossiers.map(dossier => (
                            <tr key={dossier.dossier_id} id={`kdoc${dossier.dossier_id}`} onClick={() => {
                                let e = document.getElementById(`kdoc${dossier.dossier_id}`);
                                if (e.className !== "table-secondary") {
                                    if (row !== "") document.getElementById(row).className = "";
                                    e.className = "table-secondary";
                                    setRow(`kdoc${dossier.dossier_id}`);
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
                        ))}
                    </tbody>
                </table>
            </div>
            <AjouterTache
                dossier={doc} />
            <ReclasserDossier dossier={doc} />
            <Button
                variant="dark" className="mb-3">
                Archiver Dossier
            </Button>
            <Button
                variant="light" className="mx-3 mb-3"
                onClick={() => { (row !== "") ? deleteDossier(doc.dossier_id) : alert("Veuillez choisir un dossier"); }}>
                Supprimer Dossier
            </Button>
            <Link to="/PDF" state={{ from: doc }} >
                <Button variant="dark" className="mb-3">Imprimer</Button>
            </Link>
        </>
    )
};

export default Rechercher;