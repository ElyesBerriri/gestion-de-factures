import React, {useState,useEffect} from "react";
import ClientDemandeur from "../components/ClientDemandeur";
import DonnéesDossier from "../components/DonnéesDossier";
import Taches from "../components/Taches";

const Creation =()=>{

    const [active,setActive] = useState("first");

    //données dossier

    const [dossier_id, setIdd] = useState(0);
    const [typee, setType] = useState("*");
    const [mission, setMission] = useState("*");
    const [emplacement,setEmplacement] = useState("*");
    const [lieu, setLieux] = useState("*");
    const [numaff, setNum] = useState("*");
    const [servicee, setService] = useState("*");
    const [code1,setCode1]= useState("*");
    const [code2,setCode2]= useState("*");
    const [observation,setObservation]= useState("*");
    const [calendar,setCalendar]= useState("*");
    const [adversaire,setadversaire]= useState("berriri");
    const [client_id,setclient_id]= useState(0);
    const [collab_id,setcollab_id]= useState(10);
    const [client,setclient]= useState("*");
    const [honoraire,sethonoraire]= useState(10);
    const [net,setnet]= useState(10);
    const [tel,settel]= useState("*");
    const [parent_id,setparent_id]= useState(10);


    const getdossierid = async () => {
        try {
          const response = await fetch(`/dossierss/list/number`);
          const jsonData = await response.json();
          setIdd(parseInt(jsonData , 10 ) + 1);
          console.log(typeof `${dossier_id}`);
        } catch (err) {
          console.error(err.message);
        }
      };


      const onSubmitForm = async (e) => {
        e.preventDefault();
        try {

          const body = {code1,code2,typee,mission,emplacement,lieu,numaff,servicee,observation,calendar,client,tel,adversaire,honoraire,net,client_id,collab_id, parent_id} ;
          await fetch("/dossierss/list", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body)
          });

          window.location.reload();
        } catch (err) {
          console.error(err.message);
        }
      };


      useEffect(() => {
        getdossierid();
      }, []);

    return(
        <>
        <nav>
            <button onClick={()=>setActive("first")}>Client et Demandeur</button>
            <button onClick={()=>setActive("second")}>Données Dossier</button>
            <button onClick={()=>setActive("third")}>Taches</button>
        </nav>
        <h1>dossier n°{dossier_id}</h1>
        <div>
            {active==="first" && <ClientDemandeur
            changeclient_id={(client_id)=>setclient_id(client_id)} client_id={client_id} 
            changeclient={(client)=>setclient(client)} client={client} 
                        />}
            {active==="second" && <DonnéesDossier 
            idd={dossier_id}
            changetype={(type)=>setType(type)} type={typee} 
            changemission={(mission)=>setMission(mission)} mission={mission} 
            changeemplacement={(emplacement)=>setEmplacement(emplacement)} emplacement={emplacement} 
            changelieu={(lieu)=>setLieux(lieu)} lieu={lieu} 
            changenumaff={(numaff)=>setNum(numaff)} numaff={numaff} 
            changeservice={(service)=>setService(service)} service={servicee} 
            changecode1={(code1)=>setCode1(code1)} code1={code1} 
            changecode2={(code2)=>setCode2(code2)} code2={code2} 
            changeobservation={(observation)=>setObservation(observation)} observation={observation} 
            changecalendar={(calendar)=>setCalendar(calendar)} calendar={calendar}/>}
            
            {active==="third" && <Taches/>}

        </div>
        {console.log( calendar)}

        {console.log(client_id)}
        <button onClick={onSubmitForm} type="submit" class="btn btn-success">Valider</button>
        </>

         
    )

};

export default Creation;