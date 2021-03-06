import React, { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';


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
    if(code_client.substr(code_client.search("/")+1)!=""){
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
    } else {
      alert("Tu dois entrer un code client");
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

  const getCode_client = async () => {
    let s=code_client.substr(code_client.search("/")+1);
    if(s==client.code_client.substr(code_client.search("/")+1)){
      setCode_client(client.code_client.substr(0,code_client.search("/"))+"/"+s);
    } else if(s!=""){
        try {
            const response = await fetch(`/clients/list2/?q=${s}`);
            const jsonData = await response.json();
            setCode_client((parseInt(jsonData,10)+1)+"/"+s);
        } catch (err) {
            console.error(err.message);
        }
    } else {
        setCode_client(0+"/"+s);
    }
  };

  useEffect(() => {
    getCode_client();
  }, [code_client]);

  return (
    <>
    <Button variant="light" data-bs-toggle="modal"
        data-bs-target={`#id${client.client_id}`}
        onClick={() => {
          if(client.situation_fiscale==='Non Assujetie')
            document.getElementById(`situation1fiscale${client.client_id}`).checked = true;
          else if(client.situation_fiscale==='Assujetie')
            document.getElementById(`situation2fiscale${client.client_id}`).checked = true;
          else if(client.situation_fiscale==='Exonor??')
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
        }}>Modifier</Button>
    
      <div className="modal fade" id={`id${client.client_id}`} data-bs-backdrop="static">
        <div className="modal-dialog modal-dialog-scrollable" >
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title ">Modification d'un client</h4>
              <button type="button" className="btn-close" data-bs-dismiss="modal" />
            </div>
            <div className="modal-body">
              <div className="row">
                  <div className="input-group mb-3">
                    <span  className="input-group-text text-secondary ">Collaborateur :</span>
                    <select className="form-select" aria-label="Default select example"
                      onChange={e => setCollaborateur(e.target.options[e.target.selectedIndex].value)}>
                      {collab.map(collab => {
                        if (collab.nom===client.collaborateur)
                          return (<option value={collab.nom} defaultChecked 
                            id={"collabSelector"+client.client_id} key={`cs${collab.collab_id}`}
                            onLoad={() => setSelectTest(true)}>{collab.nom}</option> )
                        else
                          return (<option value={collab.nom} key={`cs${collab.collab_id}`}>{collab.nom}</option>)
                      })}
                      {(selectTest===false) ? <option value="--" defaultChecked 
                      id={"collabSelector"+client.client_id} key={'cs0'}>--</option> : <option value="--">--</option>}
                    </select>
                  </div>
              </div>

              <div className="row">
                  <div className="input-group mb-3">
                    <span className="input-group-text text-secondary">Code Client :</span>
                    <input type="text" className="form-control" disabled
                        value={code_client.substr(0,code_client.search("/"))} />
                    <span className="input-group-text">/</span>
                    <input type="text" className="form-control"
                        placeholder="code client"
                        defaultValue={code_client.substr(code_client.search("/")+1)}
                        onChange={e => setCode_client(
                          code_client.substr(0,code_client.search("/"))+"/"+e.target.value.trim()
                          )} />
                  </div>
              </div>

              <div className="row">
                  <div className="input-group mb-3">
                    <span className="input-group-text text-secondary">Raison :</span>
                    <input type="text" className="form-control" 
                        placeholder="raison"
                        value={raison}
                        onChange={e => setRaison(e.target.value)} />
                  </div>
              </div>

              <div className="row">
                  <div className="input-group mb-3">
                    <span className="input-group-text text-secondary">Situation fiscale :</span>
                    <div className="radio">
                  
                          <input className="form-check-input" type="radio" name={`situationfiscale${client.client_id}`}
                          id={`situation1fiscale${client.client_id}`} value="Non Assujetie"
                          onChange={e => {
                              if(e.target.checked)
                                  setSituation_fiscale(e.target.value)
                          }} />
                          {" "} Non Assujetie
                   
                          <input className="form-check-input" type="radio" name={`situationfiscale${client.client_id}`}
                          id={`situation2fiscale${client.client_id}`} value="Assujetie"
                          onChange={e => {
                              if(e.target.checked)
                                setSituation_fiscale(e.target.value)
                          }} />
                          Assujetie
                    
                
                          <input className="form-check-input" type="radio" name={`situationfiscale${client.client_id}`}
                          id={`situation3fiscale${client.client_id}`} value="Exonor??"
                          onChange={e => {
                            if(e.target.checked)
                              setSituation_fiscale(e.target.value)
                          }} />
                          Exonor?? 
              </div>
              </div>
</div>
              <div className="row">
                  <div className="input-group mb-3">
                    <span className="input-group-text text-secondary">Type client :</span>
                    <div className="radio">

              
                          <input className="form-check-input" type="radio" name={`typeclient${client.client_id}`}
                          id={`type1client${client.client_id}`}
                            onChange={e => {
                              setType_client((e.target.checked) ? 'Personne Physique' : 'Personne Morale');
                            }} />
                          Personne Physique
                   
                          <input className="form-check-input" type="radio" name={`typeclient${client.client_id}`}
                          id={`type2client${client.client_id}`}
                          onChange={e => {
                            setType_client((e.target.checked) ? 'Personne Morale' : 'Personne Physique');
                          }} />
                          Personne Morale
               
              </div>
              </div>
</div>

              <div className="row">
                  <div className="input-group mb-3">
                    <span className="input-group-text text-secondary">Matricule :</span>
                    <input type="text" className="form-control"
                        placeholder="matricule"
                        value={matricule}
                        onChange={e => setMatricule(e.target.value)} />
                  </div>
              </div>

              <div className="row">
                  <div className="input-group mb-3">
                    <span className="input-group-text text-secondary">Ville :</span>
                    <input type="text" className="form-control" 
                        placeholder="ville"
                        value={ville}
                        onChange={e => setVille(e.target.value)} />
                  </div>
              </div>

              <div className="row">
                  <div className="input-group mb-3">
                    <span className="input-group-text text-secondary">Rue :</span>
                    <input type="text" className="form-control"
                      placeholder="rue"
                      value={rue}
                      onChange={e => setRue(e.target.value)} />
                  </div>
              </div>

              <div className="row">
                  <div className="input-group mb-3">
                    <span className="input-group-text text-secondary">Num??ro :</span>
                    <input type="number" className="form-control"
                      placeholder="num??ro"
                      value={num}
                      onChange={e => setNum(e.target.value)} />
                  </div>
              </div>

              <div className="row">
                  <div className="input-group mb-3">
                    <span className="input-group-text text-secondary">Code Postale :</span>
                    <input type="number" className="form-control"
                      placeholder="code postale"
                      value={code_postale}
                      onChange={e => setCode_postale(e.target.value)} />
                  </div>
              </div>

              <div className="row">
                  <div className="input-group mb-3">
                    <span className="input-group-text text-secondary">Adresse :</span>
                    <input type="text" className="form-control"
                      placeholder="adresse"
                      value={adresse}
                      onChange={e => setAdresse(e.target.value)} />
                  </div>
              </div>

              <div className="row">
                  <div className="input-group mb-3">
                    <span className="input-group-text text-secondary">Activit?? :</span>
                    <input type="text" className="form-control"
                        placeholder="activit??"
                        value={activite}
                        onChange={e => setActivite(e.target.value)} />
                  </div>
              </div>

              <div className="row">
                  <div className="input-group mb-3">
                    <span className="input-group-text text-secondary">T??l??phone :</span>
                    <input type="text" className="form-control"
                      placeholder="t??l??phone"
                      value={tel}
                      onChange={e => setTel(e.target.value)} />
                  </div>
              </div>

              <div className="row">
                  <div className="input-group mb-3">
                    <span className="input-group-text text-secondary">Fax :</span>
                    <input type="text" className="form-control"
                      placeholder="fax"
                      value={fax}
                      onChange={e => setFax(e.target.value)} />
                  </div>
              </div>

              <div className="row">
                  <div className="input-group mb-3">
                    <span className="input-group-text text-secondary">Email :</span>
                    <input type="email" className="form-control"
                      placeholder="email"
                      value={email}
                      onChange={e => setEmail(e.target.value)} />
                  </div>
              </div>
            </div>
            <div className="modal-footer">
            <Button variant="light" id="valider" onClick={e => updateClient(e)}>Valider</Button>{' '}
            <Button variant="dark" data-bs-dismiss="modal">Fermer</Button>{' '}

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditClient;