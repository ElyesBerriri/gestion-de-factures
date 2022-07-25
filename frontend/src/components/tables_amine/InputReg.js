import React, { Fragment,useState,useEffect }  from "react";


const InputReg = (props) => {
  const [dossier_id, setidd] = useState(10);
  const [hono_avo, setHonoAvo] = useState("");
  const [net_payer, setNetPayer] = useState("");
  const [montant, setMontant] = useState("");
  const [typee, setTypee] = useState("");
  const [bare, setBare] = useState("");
  const [num_operation, setNumOp] = useState("");
  const [banque, setBanque] = useState("");
  const [porteur, setPorteur] = useState("");
  const [echeance, setEcheance] = useState("");
  const [broui, setbroui] = useState("oui");

  const onSubmitForm = async (e) => {
    console.log(dossier_id);
    try {
      const body = { dossier_id,hono_avo,net_payer,montant,typee,bare,num_operation,banque,porteur,echeance,broui };
      await fetch("/reglement/list", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      });
      props.changereg(props.dossier_id);
    } catch (err) {
      console.error(err.message);
    }
  };
  useEffect(() => {
    setidd(props.dossier_id);
  }, [props.dossier_id]);

  return (

    <Fragment>
      
    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleAmine">
    Ajouter Réglement
    </button>
  
   
  <div className="modal fade" id="exampleAmine" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">Nouveau réglement :</h5>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
  
  
        <div className="modal-body">
        <div className="container ">
    <form  >



    <div className="row mb-3">
    <label  className="col-sm-2 col-form-label col-form-label-sm">Honoraire de l'avocat : </label>
    <div className="col-sm-10">
    <input
          type="number"
          className="form-control form-control-sm" id="colFormLabelSm"
          placeholder="Honoraire de l'avocat"
          value={hono_avo}
          onChange={e => setHonoAvo(e.target.value)}
        />
    </div>
    </div>



    <div className="row mb-3">
    <label  className="col-sm-2 col-form-label col-form-label-sm">Net à payer : </label>
    <div className="col-sm-10">
    <input
          type="number"
          className="form-control form-control-sm" id="colFormLabelSm"
          placeholder="Net à payer"
          value={net_payer}
          onChange={e => setNetPayer(e.target.value)}
        />
    </div>
    </div>


    <div className="row mb-3">
    <label  className="col-sm-2 col-form-label col-form-label-sm">Montant : </label>
    <div className="col-sm-10">
    <input
          type="number"
          className="form-control form-control-sm" id="colFormLabelSm"
          placeholder="Montant"
          value={montant}
          onChange={e => setMontant(e.target.value)}
        />
    </div>
    </div>

    <div className="row mb-3">
    <label  className="col-sm-2 col-form-label col-form-label-sm">Type :</label>
    <div className="col-sm-10">
    <input
          type="text"
          className="form-control form-control-sm" id="colFormLabelSm"
          placeholder="Type"
          value={typee}
          onChange={e => setTypee(e.target.value)}
        />
    </div>
    </div>

    <div className="row mb-3">
    <label  className="col-sm-2 col-form-label col-form-label-sm">Baré :</label>
    <div className="col-sm-10">
        <input
          type="text"
          className="form-control form-control-sm" id="colFormLabelSm"
          placeholder="Baré"
          value={bare}
          onChange={e => setBare(e.target.value)}
        />
    </div>
    </div>

    <div className="row mb-3">
    <label  className="col-sm-2 col-form-label col-form-label-sm">Numéro opération :</label>
    <div className="col-sm-10">
    <input
          type="text"
          className="form-control form-control-sm" id="colFormLabelSm"
          placeholder="Numéro opération"
          value={num_operation}
          onChange={e => setNumOp(e.target.value)}
        />
    </div>
    </div>

    <div className="row mb-3">
    <label  className="col-sm-2 col-form-label col-form-label-sm">Banque :</label>
    <div className="col-sm-10">
    <input
          type="text"
          className="form-control form-control-sm" id="colFormLabelSm"
          placeholder="Banque"
          value={banque}
          onChange={e => setBanque(e.target.value)}
        />
    </div>
    </div>

    <div className="row mb-3">
    <label  className="col-sm-2 col-form-label col-form-label-sm">Porteur :</label>
    <div className="col-sm-10">
    <input
          type="text"
          className="form-control form-control-sm" id="colFormLabelSm"
          placeholder="Porteur"
          value={porteur}
          onChange={e => setPorteur(e.target.value)}
        />
    </div>
    </div>

    <div className="row mb-3">
    <label  className="col-sm-2 col-form-label col-form-label-sm">Echéance :</label>
    <div className="col-sm-10">
    <input
          type="text"
          className="form-control form-control-sm" id="colFormLabelSm"
          placeholder="Echéance"
          value={echeance}
          onChange={e => setEcheance(e.target.value)}
        />
    </div>
    </div>

    </form>
    </div>

        </div>
        <div className="modal-footer">
          <button 
            type="button" className="btn btn-secondary" data-bs-dismiss="modal">Fermer</button>
             <button 
            type="button" className="btn btn-success" onClick={onSubmitForm} data-bs-dismiss="modal">Ajouter</button>
         </div>
      </div>
    </div>
  </div>


  </Fragment>

  );
};

export default InputReg;