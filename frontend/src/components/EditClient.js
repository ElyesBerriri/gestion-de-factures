import React, { useState, useEffect } from "react";

const EditClient = ({client}) => {
  const [collaborateur,setCollaborateur] = useState(client.collaborateur);
  const [code_client,setCode_client] = useState(client.code_client);
  const [raison,setRaison] = useState(client.raison);
  const [situation_fiscale,setSituation_fiscale] = useState(client.situation_fiscale);
  const [type_client,setType_client] = useState(client.type_client);
  const [matricule,setMatricule] = useState(client.matricule);
  const [ville,setVille] = useState(client.ville);
  const [rue,setRue] = useState(client.rue);
  const [num,setNum] = useState(client.num);
  const [code_postale,setCode_postale] = useState(client.code_postale);
  const [adresse,setAdresse] = useState(client.adresse);
  const [activite,setActivite] = useState(client.activite);
  const [tel,setTel] = useState(client.tel);
  const [fax,setFax] = useState(client.fax);
  const [email,setEmail] = useState(client.email);
  const [collab, setCollab] = useState([]);
  const [selectTest, setSelectTest] = useState(false);

  const updateClient = async e => {
    e.preventDefault();
    try {
      const body = { collaborateur,code_client,raison,situation_fiscale,type_client,matricule,ville,rue,num,code_postale,adresse,activite,tel,fax,email } ;
      await fetch(
        `/clients/list/${client.client_id}`,
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

  const getCollab = async () => {
    try {
      const response = await fetch("/collaborateurs/list");
      const jsonData = await response.json();
      
      setCollab(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getCollab();
  }, []);

  return (
    <>
      <button type="button" className="btn btn-primary" data-bs-toggle="modal"
        data-bs-target={`#id${client.client_id}`}
        onClick={() => {
          if(client.situation_fiscale==='Non Assujetie')
            document.getElementById(`situation1fiscale${client.client_id}`).checked = true;
          else if(client.situation_fiscale==='Assujetie')
            document.getElementById(`situation2fiscale${client.client_id}`).checked = true;
          else if(client.situation_fiscale==='Exonoré')
            document.getElementById(`situation3fiscale${client.client_id}`).checked = true;
          if(client.type_client==='Personne Physique')
            document.getElementById(`type1client${client.client_id}`).checked = true;
          else if(client.type_client==='Personne Morale')
            document.getElementById(`type2client${client.client_id}`).checked = true;
          
            setCollaborateur(client.collaborateur);
            document.getElementById("collabSelector"+client.client_id).selected = true;
            setCode_client(client.code_client);
            setRaison(client.raison);
            setSituation_fiscale(client.situation_fiscale);
            setType_client(client.type_client);
            setMatricule(client.matricule);
            setVille(client.ville);
            setRue(client.rue);
            setNum(client.num);
            setCode_postale(client.code_postale);
            setAdresse(client.adresse);
            setActivite(client.activite);
            setTel(client.tel);
            setFax(client.fax);
            setEmail(client.email);
        }}>
          Modifier
      </button>
      <div className="modal fade" id={`id${client.client_id}`} data-bs-backdrop="static">
        <div className="modal-dialog modal-dialog-scrollable" >
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Modification d'un client</h4>
              <button type="button" className="btn-close" data-bs-dismiss="modal" />
            </div>
            <div className="modal-body">
              <div className="row">
                  <div className="input-group mb-3">
                    <span class="input-group-text">Collaborateur :</span>
                    <select class="form-select" aria-label="Default select example"
                      onChange={e => setCollaborateur(e.target.options[e.target.selectedIndex].value)}>
                      {collab.map(collab => {
                        if (collab.nom===client.collaborateur)
                          return (<option value={collab.nom} selected id={"collabSelector"+client.client_id} onLoad={() => setSelectTest(true)}>{collab.nom}</option> )
                        else
                          return (<option value={collab.nom}>{collab.nom}</option>)
                      })}
                      {(selectTest===false) ? <option value="--" selected id={"collabSelector"+client.client_id}>--</option> : <option value="--">--</option>}
                    </select>
                  </div>
              </div>

              <div className="row">
                  <div className="input-group mb-3">
                    <span class="input-group-text">Code Client :</span>
                    <input type="text" className="form-control"
                        placeholder="code client"
                        value={code_client.substr(0,code_client.search("/"))}
                        onChange={e => setCode_client(
                          e.target.value+"/"+code_client.substr(code_client.search("/")+1)
                        )} />
                    <span class="input-group-text">/</span>
                    <input type="text" className="form-control"
                        placeholder="code client"
                        value={code_client.substr(code_client.search("/")+1)}
                        onChange={e => setCode_client(
                          code_client.substr(0,code_client.search("/"))+"/"+e.target.value
                          )} />
                  </div>
              </div>

              <div className="row">
                  <div className="input-group mb-3">
                    <span class="input-group-text">Raison :</span>
                    <input type="text" className="form-control" 
                        placeholder="raison"
                        value={raison}
                        onChange={e => setRaison(e.target.value)} />
                  </div>
              </div>

              <div className="row mb-3">
                  <label className="col-form-label">Situation Fiscale</label>
                  <div className="form-check">
                      <label className="form-check-label" >
                          <input className="form-check-input" type="radio" name={`situationfiscale${client.client_id}`}
                          id={`situation1fiscale${client.client_id}`} value="Non Assujetie"
                          onChange={e => {
                              if(e.target.checked)
                                  setSituation_fiscale(e.target.value)
                          }} />
                          Non Assujetie
                      </label>
                  </div>
                  <div className="form-check">
                      <label className="form-check-label">
                          <input className="form-check-input" type="radio" name={`situationfiscale${client.client_id}`}
                          id={`situation2fiscale${client.client_id}`} value="Assujetie"
                          onChange={e => {
                              if(e.target.checked)
                                setSituation_fiscale(e.target.value)
                          }} />
                          Assujetie
                      </label>
                  </div>
                  <div className="form-check">
                      <label className="form-check-label">
                          <input className="form-check-input" type="radio" name={`situationfiscale${client.client_id}`}
                          id={`situation3fiscale${client.client_id}`} value="Exonoré"
                          onChange={e => {
                            if(e.target.checked)
                              setSituation_fiscale(e.target.value)
                          }} />
                          Exonoré
                      </label>
                  </div>
              </div>

              <div className="row mb-3">
                  <label className="col-form-label">Type Client</label>
                  <div className="form-check">
                      <label className="form-check-label">
                          <input className="form-check-input" type="radio" name={`typeclient${client.client_id}`}
                          id={`type1client${client.client_id}`}
                            onChange={e => {
                              setType_client((e.target.checked) ? 'Personne Physique' : 'Personne Morale');
                            }} />
                          Personne Physique
                      </label>
                  </div>
                  <div className="form-check">
                      <label className="form-check-label">
                          <input className="form-check-input" type="radio" name={`typeclient${client.client_id}`}
                          id={`type2client${client.client_id}`}
                          onChange={e => {
                            setType_client((e.target.checked) ? 'Personne Morale' : 'Personne Physique');
                          }} />
                          Personne Morale
                      </label>
                  </div>
              </div>

              <div className="row">
                  <div className="input-group mb-3">
                    <span class="input-group-text">Matricule :</span>
                    <input type="text" className="form-control"
                        placeholder="matricule"
                        value={matricule}
                        onChange={e => setMatricule(e.target.value)} />
                  </div>
              </div>

              <div className="row">
                  <div className="input-group mb-3">
                    <span class="input-group-text">Ville :</span>
                    <input type="text" className="form-control" 
                        placeholder="ville"
                        value={ville}
                        onChange={e => setVille(e.target.value)} />
                  </div>
              </div>

              <div className="row">
                  <div className="input-group mb-3">
                    <span class="input-group-text">Rue :</span>
                    <input type="text" className="form-control"
                      placeholder="rue"
                      value={rue}
                      onChange={e => setRue(e.target.value)} />
                  </div>
              </div>

              <div className="row">
                  <div className="input-group mb-3">
                    <span class="input-group-text">Numéro :</span>
                    <input type="number" className="form-control"
                      placeholder="numéro"
                      value={num}
                      onChange={e => setNum(e.target.value)} />
                  </div>
              </div>

              <div className="row">
                  <div className="input-group mb-3">
                    <span class="input-group-text">Code Postale :</span>
                    <input type="number" className="form-control"
                      placeholder="code postale"
                      value={code_postale}
                      onChange={e => setCode_postale(e.target.value)} />
                  </div>
              </div>

              <div className="row">
                  <div className="input-group mb-3">
                    <span class="input-group-text">Adresse :</span>
                    <input type="text" className="form-control"
                      placeholder="adresse"
                      value={adresse}
                      onChange={e => setAdresse(e.target.value)} />
                  </div>
              </div>

              <div className="row">
                  <div className="input-group mb-3">
                    <span class="input-group-text">Activité :</span>
                    <input type="text" className="form-control"
                        placeholder="activité"
                        value={activite}
                        onChange={e => setActivite(e.target.value)} />
                  </div>
              </div>

              <div className="row">
                  <div className="input-group mb-3">
                    <span class="input-group-text">Téléphone :</span>
                    <input type="text" className="form-control"
                      placeholder="téléphone"
                      value={tel}
                      onChange={e => setTel(e.target.value)} />
                  </div>
              </div>

              <div className="row">
                  <div className="input-group mb-3">
                    <span class="input-group-text">Fax :</span>
                    <input type="text" className="form-control"
                      placeholder="fax"
                      value={fax}
                      onChange={e => setFax(e.target.value)} />
                  </div>
              </div>

              <div className="row">
                  <div className="input-group mb-3">
                    <span class="input-group-text">Email :</span>
                    <input type="email" className="form-control"
                      placeholder="email"
                      value={email}
                      onChange={e => setEmail(e.target.value)} />
                  </div>
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-primary" data-bs-dismiss="modal"
              onClick={e => updateClient(e)}>
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

export default EditClient;