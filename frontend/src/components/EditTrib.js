import React, { Fragment, useState } from "react";

const EditTrib = ({trib}) => {
    const [lieux, setlieux] = useState(trib.lieux);

    const updatelieux = async e => {
      e.preventDefault();
      try {
        const body = {lieux};
         await fetch(
          `/tribunaux/list/${trib.trib_id}`,
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
      <Fragment>
        
  <button type="button" className="btn btn-primary" data-bs-toggle="modal" 
  data-bs-target={`#id${trib.trib_id}`}>
    Modifier
  </button>
  
   
  <div className="modal"
  onClick={() => setlieux(trib.lieux)}
   id={`id${trib.trib_id}`}>
    <div className="modal-dialog">
      <div className="modal-content">
  
     
        <div className="modal-header">
          <h4 className="modal-title">Modification de tribunal</h4>
          <button type="button" className="btn-close" data-bs-dismiss="modal"
            onClick={() => setlieux(trib.lieux)}
          ></button>
        </div>
  
      
        <div className="modal-body">
                <input
                  type="text"
                  className="form-control"
                  value={lieux}
                  onChange={e => setlieux(e.target.value)}
                />
              </div>
  
        
        <div className="modal-footer">
        <button type="button" className="btn btn-primary" data-bs-dismiss="modal"
        onClick={e => updatelieux(e)}
        >Valider</button>
          <button type="button" className="btn btn-danger" data-bs-dismiss="modal"
          onClick={() => setlieux(trib.lieux)}
          >Fermer</button>
        </div>
  
      </div>
    </div>
  </div>
  
      </Fragment>
    );

};

export default EditTrib;