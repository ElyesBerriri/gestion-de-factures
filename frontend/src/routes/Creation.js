import React, {useState} from "react";
import ClientDemandeur from "../components/ClientDemandeur";
import DonnéesDossier from "../components/DonnéesDossier";
import Taches from "../components/Taches";

const Creation =()=>{

    const [active,setActive] = useState("first");

    return(
        <>
        <nav>
            <button onClick={()=>setActive("first")}>Client et Demandeur</button>
            <button onClick={()=>setActive("second")}>Données Dossier</button>
            <button onClick={()=>setActive("third")}>Taches</button>
        </nav>
        <div>
            {active==="first" && <ClientDemandeur/>}
            {active==="second" && <DonnéesDossier/>}
            {active==="third" && <Taches/>}

        </div>
        </>
    )

};

export default Creation;