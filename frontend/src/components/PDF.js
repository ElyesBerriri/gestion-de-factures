import React from "react";
import Pdf from "react-to-pdf";
import { useLocation } from 'react-router-dom'
const ref = React.createRef();

function PDF() {
    const location = useLocation()
    const { from } = location.state;
    if(from.dossier_id!==undefined){
      let docName = `Dossier_${from.dossier_id}`;
      return (
        <>
          <Pdf targetRef={ref} filename={docName}>
            {({ toPdf }) => <button onClick={toPdf} className="mt-5">Télécharger le PDF</button>}
          </Pdf>
          <div style={{display:"flex",justifyContent: "center", minWidth:'21cm'}}>
            <div className="border border-2 m-3 " style={{width: '21cm', height: '29.7cm'}} >
              <div ref={ref} className="text-start p-5">
                <p>Dossier numéro : {from.dossier_id}</p>
                <p>Emplacement : {from.emplacement}</p>
                <p>Client : {from.client}</p>
                <p>Adversaires : {from.adversaire}</p>
              </div>
            </div>
          </div>
        </>
      );
    } else {
      return(<p className="text-danger mt-3">Vous n'avez pas choisi un dossier</p>)
    }
}

export default PDF;
