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
          <div className="pdf">
            <div className="border border-2 m-3" style={{width: '21cm', height: '29.7cm'}} >
              <div ref={ref} className="text-start p-5">
                <h2 style={{textAlign:'center',paddingBottom:'1cm'}}>Dossier numéro : &nbsp;{from.dossier_id}</h2>
                <p style={{fontWeight:'500'}}><span style={{fontWeight:'700',fontSize:'1.2rem'}}>Numéro d'affaire : </span>&nbsp;{from.numaff}</p>
                <p style={{fontWeight:'500'}}><span style={{fontWeight:'700',fontSize:'1.2rem'}}>Emplacement : </span>&nbsp;{from.emplacement}</p>
                <p style={{fontWeight:'500'}}><span style={{fontWeight:'700',fontSize:'1.2rem'}}>Client : </span>&nbsp;{from.client}</p>
                <p style={{fontWeight:'500'}}><span style={{fontWeight:'700',fontSize:'1.2rem'}}>Téléphone : </span>&nbsp;{from.tel}</p>
                <p style={{fontWeight:'500'}}><span style={{fontWeight:'700',fontSize:'1.2rem'}}>Mission : </span>&nbsp;{from.mission}</p>
                <p style={{fontWeight:'500'}}><span style={{fontWeight:'700',fontSize:'1.2rem'}}>Adversaires : </span>&nbsp;{from.adversaire}</p>
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
