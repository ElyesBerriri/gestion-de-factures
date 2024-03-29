import React, { useState, useEffect, useLocation } from "react";
import ClientDemandeur from "../components/ClientDemandeur";
import DonnéesDossier from "../components/DonnéesDossier";
import Taches from "../components/Taches";
import Sousdossier from "../components/sousdossier";
import Collaborateur from "../components/Collaborateur";
import Reglement from "../components/tables_amine/Reglement";
import { Nav, Navbar } from 'react-bootstrap';
import ScrollButton from '../components/ScrollButton';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';

const Creation = () => {

  const [active, setActive] = useState("first");

  //données dossier

  const [dossier_id, setIdd] = useState(0);
  const [typee, setType] = useState("-");
  const [mission, setMission] = useState("-");
  const [emplacement, setEmplacement] = useState("-");
  const [lieu, setLieux] = useState("-");
  const [numaff, setNum] = useState("-");
  const [servicee, setService] = useState("-");
  const [code1, setCode1] = useState("-");
  const [code2, setCode2] = useState("-");
  const [observation, setObservation] = useState("-");
  const [calendar, setCalendar] = useState("-");
  //Réglement
  //const [typee, setTypee] = useState("");
  const [bare, setBare] = useState("");
  const [num_operation, setNumOp] = useState("");
  const [banque, setBanque] = useState("");
  const [porteur, setPorteur] = useState("");
  const [echeance, setEcheance] = useState("");


  const [client_id, setclient_id] = useState(0);
  const [collab_id, setcollab_id] = useState(0);
  const [client, setclient] = useState("!");
  const [collab, setcollab] = useState("!");
  const [honoraire, sethonoraire] = useState(10);
  const [net, setnet] = useState(10);
  const [tel, settel] = useState("-");
  const [parent_id, setparent_id] = useState(10);
  const [mode_r, setmode_r] = useState("-");
  const [part_c, setpart_c] = useState(0);
  const [type_r, settype_r] = useState("-");
  const [demandeur, setdemandeur] = useState("-");
  //const [tache,settache]= useState("*");
  const [adversaires, setadversaires] = useState([]);
  const [reglements, setreglements] = useState([]);



  var adversaire = "";
  //tache 
  const getdossierid = async () => {
    try {
      const response = await fetch(`/dossierss/list/number`);
      const jsonData = await response.json();
      setIdd(parseInt(jsonData, 10) + 1);
    } catch (err) {
      console.error(err.message);
    }
  };

  const deleteadversaire = async id => {
    try {
      await fetch(`/adversaire/list/`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" }
      });

    } catch (err) {
      console.error(err.message);
    }
  };


  const deletereglement = async id => {
    try {
      await fetch(`/reglement/list/`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },

      });

    } catch (err) {
      console.error(err.message);
    }
  };


  const deletedemandeur = async id => {
    try {
      await fetch("/demandeurs/list/", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      });

    } catch (err) {
      console.error(err.message);
    }
  };

  const deletetache = async id => {
    try {
      await fetch("/tache/list/", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      });

    } catch (err) {
      console.error(err.message);
    }
  };

  const onSubmitForm = async (e) => {
    if (client !== "!") {
      adversaires.map((adv) => { adversaire += " , " + adv.nom });
      adversaire = adversaire.substr(3);
      e.preventDefault();
      try {
        const body = { code1, code2, typee, mission, emplacement, lieu, numaff, servicee, observation, calendar, client, tel, adversaire, honoraire, net, client_id, collab_id, parent_id, mode_r, part_c, type_r };
        await fetch("/dossierss/list", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body)
        });

      } catch (err) {
        console.error(err.message);
      }
      try {
        await fetch("/adversaire/list/", {
          method: "Put",
          headers: { "Content-Type": "application/json" },
        });

      } catch (err) {
        console.error(err.message);
      }

      try {
        await fetch("/demandeurs/list/", {
          method: "Put",
          headers: { "Content-Type": "application/json" },
        });

      } catch (err) {
        console.error(err.message);
      }

      try {
        await fetch("/reglement/list/", {
          method: "Put",
          headers: { "Content-Type": "application/json" },
        });
      } catch (err) {
        console.error(err.message);
      }
      window.location.href = "/Creation";
    }

    else {
      alert("Veuillez choisir un client avant de valider");
    }

  };

  useEffect(() => {
    getdossierid();
    deleteadversaire();
    deletedemandeur();
    deletetache();
    deletereglement();
  }, []);

  return (
    <>

      <Navbar variant="dark" fixed='bottom' expand="sm" collapseOnSelect>
        <Navbar.Toggle className="coloring" />
        <Navbar.Collapse className="navvv">
          <Nav>
            <Nav.Item>
              <Nav.Link href='#client'>Client et Demandeur</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href='#donnees'>Données Dossier</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href='#tache'> Tâche </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href='#collaborateur'> Collaborateur</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href='#reglement'> Réglement</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href='#sousdossier'> Sous Dossier</Nav.Link>
            </Nav.Item>


          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <div>
        <ClientDemandeur
          changeclient_id={(client_id) => setclient_id(client_id)} client_id={client_id}
          changeclient={(client) => setclient(client)} client={client}
          idd={dossier_id}
          changedemandeur={(demandeur) => setdemandeur(demandeur)} demandeur={demandeur}
        />
        <DonnéesDossier
          idd={dossier_id}
          changetype={(type) => setType(type)} type={typee}
          changemission={(mission) => setMission(mission)} mission={mission}
          changeemplacement={(emplacement) => setEmplacement(emplacement)} emplacement={emplacement}
          changelieu={(lieu) => setLieux(lieu)} lieu={lieu}
          changenumaff={(numaff) => setNum(numaff)} numaff={numaff}
          changeservice={(service) => setService(service)} service={servicee}
          changecode1={(code1) => setCode1(code1)} code1={code1}
          changecode2={(code2) => setCode2(code2)} code2={code2}
          changeobservation={(observation) => setObservation(observation)} observation={observation}
          changeadversaires={(adversaires) => setadversaires(adversaires)}
          changecalendar={(calendar) => setCalendar(calendar)} calendar={calendar} />
        <Taches
          idd={dossier_id} />
        <Collaborateur
          changecollab_id={(collab_id) => setcollab_id(collab_id)} collab_id={collab_id}
          changecollab={(collab) => setcollab(collab)} collab={collab}
          changemode_r={(mode_r) => setmode_r(mode_r)} mode_r={mode_r}
          changepart_c={(part_c) => setpart_c(part_c)} part_c={part_c}
          changetype_r={(type_r) => settype_r(type_r)} type_r={type_r} />


        <Reglement
          idd={dossier_id}
          changereglements={(reglements) => setreglements(reglements)}
        />
        <Sousdossier />

      </div>
      <Button variant="dark" data-bs-dismiss="modal" className="valider" id="valider"
        onClick={(e) => { onSubmitForm(e) }}>Valider</Button>


      <ScrollButton />
    </>
  )

};

export default Creation;