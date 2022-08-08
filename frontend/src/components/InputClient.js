import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/esm/Button";
import { GoPlus } from "react-icons/go";

const InputClient = () => {
    const [collaborateur, setCollaborateur] = useState("--");
    const [code_client, setCode_client] = useState("0/");
    const [code_client1, setCode_client1] = useState(0);
    const [code_client2, setCode_client2] = useState("");
    const [raison, setRaison] = useState("*");
    const [situation_fiscale, setSituation_fiscale] = useState("*");
    const [type_client, setType_client] = useState("*");
    const [matricule, setMatricule] = useState("*");
    const [ville, setVille] = useState("*");
    const [rue, setRue] = useState("*");
    const [num, setNum] = useState(0);
    const [code_postale, setCode_postale] = useState(0);
    const [adresse, setAdresse] = useState("*");
    const [activite, setActivite] = useState("*");
    const [tel, setTel] = useState("*");
    const [fax, setFax] = useState("*");
    const [email, setEmail] = useState("*");
    const [collab, setCollab] = useState([]);

    const onSubmitForm = async (e) => {
        e.preventDefault();
        try {
            const body = { collaborateur, code_client, raison, situation_fiscale, type_client, matricule, ville, rue, num, code_postale, adresse, activite, tel, fax, email };
            await fetch("/clients/list", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            });
            window.location.assign("/Clients");
        } catch (err) {
            console.error(err.message);
        }
    };

    const getCollab = async () => {
        try {
            const response = await fetch("/collaborateurs/list");
            const jsonData = await response.json();

            setCollab(jsonData);
        } catch (err) {
            console.error(err.message);
        }
    };
    const getCode_client1 = async () => {
        if (code_client2 != "") {
            try {
                const response = await fetch(`/clients/list2/?q=${code_client2}`);
                const jsonData = await response.json();
                setCode_client1(parseInt(jsonData, 10) + 1);
                setCode_client((parseInt(jsonData, 10) + 1) + "/" + code_client2);
            } catch (err) {
                console.error(err.message);
            }
        } else {
            setCode_client1(0);
            setCode_client(0 + "/" + code_client2);
        }
    };

    useEffect(() => {
        getCollab();
    }, []);
    useEffect(() => {
        getCode_client1();
    }, [code_client2]);

    return (
        <>
            <button className="ajouter ajouterr" data-bs-toggle="modal" data-bs-target="#id0"
            onClick={() => {
                if (situation_fiscale === 'Non Assujetie')
                  document.getElementById(`situation1fiscale0`).checked = false;
                else if (situation_fiscale === 'Assujetie')
                  document.getElementById(`situation2fiscale0`).checked = false;
                else if (situation_fiscale === 'Exonoré')
                  document.getElementById(`situation3fiscale0`).checked = false;
                else {
                  document.getElementById(`situation1fiscale0`).checked = false;
                  document.getElementById(`situation2fiscale0`).checked = false;
                  document.getElementById(`situation3fiscale0`).checked = false;
                }
                if (type_client === 'Personne Physique')
                  document.getElementById(`type1client0`).checked = false;
                else if (type_client === 'Personne Morale')
                  document.getElementById(`type2client0`).checked = false;
                else {
                  document.getElementById(`type1client0`).checked = false;
                  document.getElementById(`type2client0`).checked = false;
                }
                document.getElementById("manuel").checked = false;
                setCollaborateur("--");
                document.getElementById("collabSelector0").selected = true;
                setCode_client("0/");
                setCode_client1(0);
                setCode_client2("");
                setRaison("*");
                setSituation_fiscale("*");
                setType_client("*");
                setMatricule("*");
                setVille("*");
                setRue("*");
                setNum(0);
                setCode_postale(0);
                setAdresse("*");
                setActivite("*");
                setTel("*");
                setFax("*");
                setEmail("*");
              }} >
                <GoPlus color="#00adb5" fontSize="1.5em" />
            </button>

            <div className="modal fade" id="id0" data-bs-backdrop="static">
                <div className="modal-dialog modal-dialog-scrollable" >
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title ">Modification d'un client</h4>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" />
                        </div>
                        <div className="modal-body">
                            <div className="row">
                                <div className="input-group mb-3">
                                    <span className="input-group-text ">Collaborateur :</span>
                                    <select className="form-select" aria-label="Default select example"
                                        onChange={e => setCollaborateur(e.target.options[e.target.selectedIndex].value)}>
                                        <option value="--" defaultValue key='co0' id="collabSelector0">--</option>
                                        {collab.map(collab => (<option value={collab.nom} key={`co${collab.collab_id}`}>{collab.nom}</option>))}
                                    </select>
                                </div>
                            </div>

                            <div className="row">
                                <div className="input-group mb-3">
                                    <span className="input-group-text ">Code Client :</span>
                                    <input type="number" className="form-control" id="code1client"
                                        disabled value={code_client1}
                                        onChange={e => {
                                            setCode_client1(e.target.value);
                                            setCode_client(e.target.value + "/" + code_client2);
                                        }} />
                                    <span className="input-group-text">/</span>
                                    <input type="text" className="form-control"
                                        placeholder="code client" value={code_client2}
                                        onChange={e => {
                                            setCode_client2(e.target.value.trim());
                                        }} />
                                    <div className="form-check m-2">
                                        <input className="form-check-input" type="checkbox" id="manuel"
                                            onChange={() => {
                                                if (document.getElementById("code1client").disabled)
                                                    document.getElementById("code1client").disabled = false;
                                                else
                                                    document.getElementById("code1client").disabled = true;
                                            }} />
                                        <label className="form-check-label" htmlFor="manuel">
                                            Manuel
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-group mb-3">
                                    <span className="input-group-text">Raison :</span>
                                    <input type="text" className="form-control"
                                        placeholder="raison"
                                        value={raison}
                                        onChange={e => setRaison(e.target.value)} />
                                </div>
                            </div>

                            <div className="row">
                                <div className="input-group mb-3">
                                    <span className="input-group-text">Situation fiscale :</span>
                                    <div className="mytext">
                                        <input className="myradio ms-3 me-1" type="radio" name={`situationfiscale0`}
                                            id={`situation1fiscale0`} value="Non Assujetie"
                                            onChange={e => {
                                                if (e.target.checked)
                                                    setSituation_fiscale(e.target.value)
                                            }} />
                                        Non Assujetie
                                        <input className="myradio ms-3 me-1" type="radio" name={`situationfiscale0`}
                                            id={`situation2fiscale0`} value="Assujetie"
                                            onChange={e => {
                                                if (e.target.checked)
                                                    setSituation_fiscale(e.target.value)
                                            }} />
                                        Assujetie
                                        <input className="myradio ms-3 me-1" type="radio" name={`situationfiscale0`}
                                            id={`situation3fiscale0`} value="Exonoré"
                                            onChange={e => {
                                                if (e.target.checked)
                                                    setSituation_fiscale(e.target.value)
                                            }} />
                                        Exonoré
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="input-group mb-3">
                                    <span className="input-group-text ">Type client :</span>
                                    <div className="mytext">
                                        <input className="myradio ms-3 me-1" type="radio" name={`typeclient0`}
                                            id={`type1client0`}
                                            onChange={e => {
                                                setType_client((e.target.checked) ? 'Personne Physique' : 'Personne Morale');
                                            }} />
                                        Personne Physique
                                        <input className="myradio ms-3 me-1" type="radio" name={`typeclient0`}
                                            id={`type2client0`}
                                            onChange={e => {
                                                setType_client((e.target.checked) ? 'Personne Morale' : 'Personne Physique');
                                            }} />
                                        Personne Morale
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="input-group mb-3">
                                    <span className="input-group-text ">Matricule :</span>
                                    <input type="text" className="form-control"
                                        placeholder="matricule" value={matricule}
                                        onChange={e => setMatricule(e.target.value)} />
                                </div>
                            </div>

                            <div className="row">
                                <div className="input-group mb-3">
                                    <span className="input-group-text">Ville :</span>
                                    <input type="text" className="form-control"
                                        placeholder="ville" value={ville}
                                        onChange={e => setVille(e.target.value)} />
                                </div>
                            </div>

                            <div className="row">
                                <div className="input-group mb-3">
                                    <span className="input-group-text ">Rue :</span>
                                    <input type="text" className="form-control"
                                        placeholder="rue" value={rue}
                                        onChange={e => setRue(e.target.value)} />
                                </div>
                            </div>

                            <div className="row">
                                <div className="input-group mb-3">
                                    <span className="input-group-text">Numéro :</span>
                                    <input type="number" className="form-control"
                                        placeholder="numéro" value={num}
                                        onChange={e => setNum(e.target.value)} />
                                </div>
                            </div>

                            <div className="row">
                                <div className="input-group mb-3">
                                    <span className="input-group-text ">Code Postale :</span>
                                    <input type="number" className="form-control"
                                        placeholder="code postale" value={code_postale}
                                        onChange={e => setCode_postale(e.target.value)} />
                                </div>
                            </div>

                            <div className="row">
                                <div className="input-group mb-3">
                                    <span className="input-group-text">Adresse :</span>
                                    <input type="text" className="form-control"
                                        placeholder="adresse" value={adresse}
                                        onChange={e => setAdresse(e.target.value)} />
                                </div>
                            </div>

                            <div className="row">
                                <div className="input-group mb-3">
                                    <span className="input-group-text ">Activité :</span>
                                    <input type="text" className="form-control"
                                        placeholder="activité" value={activite}
                                        onChange={e => setActivite(e.target.value)} />
                                </div>
                            </div>

                            <div className="row">
                                <div className="input-group mb-3">
                                    <span className="input-group-text ">Téléphone :</span>
                                    <input type="text" className="form-control"
                                        placeholder="téléphone" value={tel}
                                        onChange={e => setTel(e.target.value)} />
                                </div>
                            </div>

                            <div className="row">
                                <div className="input-group mb-3">
                                    <span className="input-group-text">Fax :</span>
                                    <input type="text" className="form-control"
                                        placeholder="fax" value={fax}
                                        onChange={e => setFax(e.target.value)} />
                                </div>
                            </div>

                            <div className="row">
                                <div className="input-group mb-3">
                                    <span className="input-group-text ">Email :</span>
                                    <input type="email" className="form-control"
                                        placeholder="email" value={email}
                                        onChange={e => setEmail(e.target.value)} />
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <Button variant="light" id="valider" onClick={onSubmitForm}>Valider</Button>
                            <Button variant="dark" data-bs-dismiss="modal">Fermer</Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default InputClient;