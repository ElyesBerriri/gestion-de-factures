import React, { useState } from "react";

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

  return (
    <>
      <button type="button" className="btn btn-primary" data-bs-toggle="modal" 
        data-bs-target={`#id${client.client_id}`}>
          Modifier
      </button>
      <div className="modal" id={`id${client.client_id}`}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Modification d'un client</h4>
              <button type="button" className="btn-close" data-bs-dismiss="modal"
                onClick={() => {
                  setCollaborateur(client.collaborateur);
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
              </button>
            </div>
            <div className="modal-body">
              <div className="row">
                  <label className="col-form-label">
                  Collaborateur
                    <input type="text" className="form-control"
                      placeholder="collaborateur"
                      value={collaborateur}
                      onChange={e => setCollaborateur(e.target.value)} />
                  </label>
              </div>

              <div className="row">
                  <label className="col-form-label">
                    Code Client
                    <input type="text" className="form-control"
                        placeholder="code client"
                        value={code_client}
                        onChange={e => setCode_client(e.target.value)} />
                  </label>
              </div>

              <div className="row">
                  <label className="col-form-label">
                    Raison
                    <div >
                        <input type="text" className="form-control" 
                        placeholder="raison"
                        value={raison}
                        onChange={e => setRaison(e.target.value)} />
                    </div>
                  </label>
              </div>

              <div className="row">
                  <label className="col-form-label">Situation Fiscale</label>
                  <div className="form-check">
                      <label className="form-check-label" >
                          <input className="form-check-input" type="radio" name={`situationfiscale${client.client_id}`}
                          value="Non Assujetie" 
                          defaultChecked={client.situation_fiscale==='Non Assujetie'}
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
                          value="Assujetie" 
                          defaultChecked={client.situation_fiscale==='Assujetie'}
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
                          value="Exonoré" 
                          defaultChecked={client.situation_fiscale==='Exonoré'}
                          onChange={e => {
                              if(e.target.checked)
                                setSituation_fiscale(e.target.value)
                          }} />
                          Exonoré
                      </label>
                  </div>
              </div>

              <div className="row">
                  <label className="col-form-label">Type Client</label>
                  <div className="form-check">
                      <label className="form-check-label">
                          <input className="form-check-input" type="radio" name={`typeclient${client.client_id}`}
                            defaultChecked={client.type_client==='Personne Physique'}
                            onChange={e => {
                              setType_client((e.target.checked) ? 'Personne Physique' : 'Personne Morale');
                            }} />
                          Personne Physique
                      </label>
                  </div>
                  <div className="form-check">
                      <label className="form-check-label">
                          <input className="form-check-input" type="radio" name={`typeclient${client.client_id}`}
                          defaultChecked={client.type_client==='Personne Morale'}
                          onChange={e => {
                            setType_client((e.target.checked) ? 'Personne Morale' : 'Personne Physique');
                          }} />
                          Personne Morale
                      </label>
                  </div>
              </div>

              <div className="row">
                  <label className="col-form-label">
                    Matricule
                    <div >
                        <input type="text" className="form-control"
                        placeholder="matricule"
                        value={matricule}
                        onChange={e => setMatricule(e.target.value)} />
                    </div>
                  </label>
              </div>

              <div className="row">
                  <label className="col-form-label">
                    Ville
                    <div >
                        <input type="text" className="form-control" 
                        placeholder="ville"
                        value={ville}
                        onChange={e => setVille(e.target.value)} />
                    </div>
                  </label>
              </div>

              <div className="row">
                  <label className="col-form-label">
                    Rue
                    <div>
                      <input type="text" className="form-control"
                      placeholder="rue"
                      value={rue}
                      onChange={e => setRue(e.target.value)} />
                    </div>
                  </label>
              </div>

              <div className="row">
                  <label className="col-form-label">
                    Numéro
                    <div >
                      <input type="number" className="form-control"
                      placeholder="numéro"
                      value={num}
                      onChange={e => setNum(e.target.value)} />
                    </div>
                  </label>
              </div>

              <div className="row">
                  <label className="col-form-label">
                    Code Postale
                    <div>
                      <input type="number" className="form-control"
                      placeholder="code postale"
                      value={code_postale}
                      onChange={e => setCode_postale(e.target.value)} />
                    </div>
                  </label>
              </div>

              <div className="row">
                  <label className="col-form-label">
                    Adresse
                    <div >
                      <input type="text" className="form-control"
                      placeholder="adresse"
                      value={adresse}
                      onChange={e => setAdresse(e.target.value)} />
                    </div>
                  </label>
              </div>

              <div className="row">
                  <label className="col-form-label">
                    Activité
                    <div >
                        <input type="text" className="form-control"
                        placeholder="activité"
                        value={activite}
                        onChange={e => setActivite(e.target.value)} />
                    </div>
                  </label>
              </div>

              <div className="row">
                  <label className="col-form-label">
                    Téléphone
                    <div >
                      <input type="text" className="form-control"
                      placeholder="téléphone"
                      value={tel}
                      onChange={e => setTel(e.target.value)} />
                    </div>
                  </label>
              </div>

              <div className="row">
                  <label className="col-form-label">
                    Fax
                    <div >
                      <input type="text" className="form-control"
                      placeholder="fax"
                      value={fax}
                      onChange={e => setFax(e.target.value)} />
                    </div>
                  </label>
              </div>

              <div className="row">
                  <label className="col-form-label">
                    Email
                    <div >
                      <input type="email" className="form-control"
                      placeholder="email"
                      value={email}
                      onChange={e => setEmail(e.target.value)} />
                    </div>
                  </label>
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-primary" data-bs-dismiss="modal"
              onClick={e => updateClient(e)}>
                Valider
              </button>
              <button type="button" className="btn btn-danger" data-bs-dismiss="modal"
                onClick={() => {
                  setCollaborateur(client.collaborateur);
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