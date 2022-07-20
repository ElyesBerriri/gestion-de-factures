import React from "react";
import Pdf from "react-to-pdf";
import { useLocation } from 'react-router-dom'
const ref = React.createRef();

function PDF() {
    const location = useLocation()
    const { from } = location.state;
  return (
    <div>
      <Pdf targetRef={ref} filename="code-example.pdf">
        {({ toPdf }) => <button onClick={toPdf}>Generate Pdf</button>}
      </Pdf>
      <div ref={ref} className="text-start">
        <pre>   Dossier numéro : {from.dossier_id}</pre>
        <pre>   Emplacement : {from.emplacement}</pre>
        <pre>   Client : {from.client}</pre>
        <pre>   Adversaire : {from.adversaire}</pre>
      </div>
    </div>
  );
}

export default PDF;
