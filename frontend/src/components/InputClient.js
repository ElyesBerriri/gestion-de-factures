import React, { useState }  from "react";
import { Link } from "react-router-dom";


const InputClient = () => {
    const [collaborateur,setCollaborateur] = useState("");
    const [code_client,setCode_client] = useState("");
    const [raison,setRaison] = useState("");
    const [situation_fiscale,setSituation_fiscale] = useState("");
    const [type_client,setType_client] = useState("");
    const [matricule,setMatricule] = useState("");
    const [ville,setVille] = useState("");
    const [rue,setRue] = useState("");
    const [num,setNum] = useState();
    const [code_postale,setCode_postale] = useState();
    const [adresse,setAdresse] = useState("");
    const [activite,setActivite] = useState("");
    const [tel,setTel] = useState("");
    const [fax,setFax] = useState("");
    const [email,setEmail] = useState("");

    const onSubmitForm = async (e) => {
        e.preventDefault();
        try {
          const body = { collaborateur,code_client,raison,situation_fiscale,type_client,matricule,ville,rue,num,code_postale,adresse,activite,tel,fax,email} ;
          await fetch("/clients/list", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body)
          });
    
          window.location.reload();
        } catch (err) {
          console.error(err.message);
        }
      };
    
    return (
        <div className="container mt-5">
        <form>
            <div class="row mb-3">
                <label for="colFormLabelSm" class="col-sm-2 col-form-label col-form-label-sm">Collaborateur </label>
                <div class="col-sm-10">
                    <input type="text" class="form-control form-control-sm" id="colFormLabelSm" 
                    placeholder="collaborateur"
                    value={collaborateur}
                    onChange={e => setCollaborateur(e.target.value)}/>
                </div>
            </div>

            <div class="row mb-3">
                <label for="colFormLabelSm" class="col-sm-2 col-form-label col-form-label-sm">Code Client</label>
                <div class="col-sm-10">
                    <input type="text" class="form-control form-control-sm" id="colFormLabelSm" 
                    placeholder="code client"
                    value={code_client}
                    onChange={e => setCode_client(e.target.value)}/>
                </div>
            </div>

            <div class="row mb-3">
                <label for="colFormLabelSm" class="col-sm-2 col-form-label col-form-label-sm">Raison</label>
                <div class="col-sm-10">
                    <input type="text" class="form-control form-control-sm" id="colFormLabelSm" 
                    placeholder="raison"
                    value={raison}
                    onChange={e => setRaison(e.target.value)}/>
                </div>
            </div>

            <div class="row mb-3">
                <label class="col-sm-2 col-form-label col-form-label-sm">Situation Fiscale</label>
                <div class="form-check">
                    <label class="form-check-label" >
                        <input class="form-check-input" type="radio" name="situationfiscale"
                        value="Non Assujetie"
                        onChange={e => {
                            if(e.target.checked)
                                setSituation_fiscale(e.target.value)
                        }} />
                        Non Assujetie
                    </label>
                </div>
                <div class="form-check">
                    <label class="form-check-label">
                        <input class="form-check-input" type="radio" name="situationfiscale"
                        value="Assujetie"
                        onChange={e => {
                            if(e.target.checked)
                                setSituation_fiscale(e.target.value)
                        }} />
                        Assujetie
                    </label>
                </div>
                <div class="form-check">
                    <label class="form-check-label">
                        <input class="form-check-input" type="radio" name="situationfiscale"
                        value="Exonoré"
                        onChange={e => {
                            if(e.target.checked)
                                setSituation_fiscale(e.target.value)
                        }} />
                        Exonoré
                    </label>
                </div>
            </div>

            <div class="row mb-3">
                <label class="col-sm-2 col-form-label col-form-label-sm">Type Client</label>
                <div class="form-check">
                    <label class="form-check-label">
                        <input class="form-check-input" type="radio" name="typeclient"
                        value="Personne Physique"
                        onChange={e => {
                            if(e.target.checked)
                                setType_client(e.target.value)
                        }} />
                        Personne Physique
                    </label>
                </div>
                <div class="form-check">
                    <label class="form-check-label">
                        <input class="form-check-input" type="radio" name="typeclient"
                        value="Personne Morale"
                        onChange={e => {
                            if(e.target.checked)
                                setType_client(e.target.value)
                        }} />
                        Personne Morale
                    </label>
                </div>
            </div>

            <div class="row mb-3">
                <label for="colFormLabelSm" class="col-sm-2 col-form-label col-form-label-sm">Matricule</label>
                <div class="col-sm-10">
                    <input type="text" class="form-control form-control-sm" id="colFormLabelSm" 
                    placeholder="matricule"
                    value={matricule}
                    onChange={e => setMatricule(e.target.value)}/>
                </div>
            </div>

            <div class="row mb-3">
                <label for="colFormLabelSm" class="col-sm-2 col-form-label col-form-label-sm">Ville</label>
                <div class="col-sm-10">
                    <input type="text" class="form-control form-control-sm" id="colFormLabelSm" 
                    placeholder="ville"
                    value={ville}
                    onChange={e => setVille(e.target.value)}/>
                </div>
            </div>

            <div class="row mb-3">
                <label for="colFormLabelSm" class="col-sm-2 col-form-label col-form-label-sm">Rue</label>
                <div class="col-sm-10">
                    <input type="text" class="form-control form-control-sm" id="colFormLabelSm" 
                    placeholder="rue"
                    value={rue}
                    onChange={e => setRue(e.target.value)}/>
                </div>
            </div>

            <div class="row mb-3">
                <label for="colFormLabelSm" class="col-sm-2 col-form-label col-form-label-sm">Numéro</label>
                <div class="col-sm-10">
                    <input type="number" class="form-control form-control-sm" id="colFormLabelSm" 
                    placeholder="numéro"
                    value={num}
                    onChange={e => setNum(e.target.value)}/>
                </div>
            </div>

            <div class="row mb-3">
                <label for="colFormLabelSm" class="col-sm-2 col-form-label col-form-label-sm">Code Postale</label>
                <div class="col-sm-10">
                    <input type="number" class="form-control form-control-sm" id="colFormLabelSm" 
                    placeholder="code postale"
                    value={code_postale}
                    onChange={e => setCode_postale(e.target.value)}/>
                </div>
            </div>

            <div class="row mb-3">
                <label for="colFormLabelSm" class="col-sm-2 col-form-label col-form-label-sm">Adresse</label>
                <div class="col-sm-10">
                    <input type="text" class="form-control form-control-sm" id="colFormLabelSm"
                    placeholder="adresse"
                    value={adresse}
                    onChange={e => setAdresse(e.target.value)}/>
                </div>
            </div>

            <div class="row mb-3">
                <label for="colFormLabelSm" class="col-sm-2 col-form-label col-form-label-sm">Activité</label>
                <div class="col-sm-10">
                    <input type="text" class="form-control form-control-sm" id="colFormLabelSm"
                    placeholder="activité"
                    value={activite}
                    onChange={e => setActivite(e.target.value)}/>
                </div>
            </div>

            <div class="row mb-3">
                <label for="colFormLabelSm" class="col-sm-2 col-form-label col-form-label-sm">Téléphone</label>
                <div class="col-sm-10">
                    <input type="text" class="form-control form-control-sm" id="colFormLabelSm" 
                    placeholder="téléphone"
                    value={tel}
                    onChange={e => setTel(e.target.value)}/>
                </div>
            </div>

            <div class="row mb-3">
                <label for="colFormLabelSm" class="col-sm-2 col-form-label col-form-label-sm">Fax</label>
                <div class="col-sm-10">
                    <input type="text" class="form-control form-control-sm" id="colFormLabelSm" 
                    placeholder="fax"
                    value={fax}
                    onChange={e => setFax(e.target.value)}/>
                </div>
            </div>

            <div class="row mb-3">
                <label for="colFormLabelSm" class="col-sm-2 col-form-label col-form-label-sm">Email</label>
                <div class="col-sm-10">
                    <input type="email" class="form-control form-control-sm" id="colFormLabelSm"
                    placeholder="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}/>
                </div>
            </div>
            <Link to={"/Clients"}>
                <button onClick={onSubmitForm} type="submit" class="btn btn-primary">Ajouter</button>
            </Link>
        </form>
        </div>
    );
};

export default InputClient;