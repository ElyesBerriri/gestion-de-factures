 import ListCollab from "../components/ListCollab";
 import React, {useState,useEffect} from "react";

function Collab() {

  /*const [adversaire,setadversaire]= useState("berriri");

  const [dossier_id, setIdd] = useState(0);

  const getdossieridd = async () => {
    try {
      const response = await fetch(`/dossierss/list/number`);
      const jsonData = await response.json();
      setIdd(parseInt(jsonData , 10 ) + 1);
      console.log(dossier_id);
    } catch (err) {
      console.error(err.message);
    }
  };

  const getdossierid = async (id) => {
    try {
      const response = await fetch(`/adversaire/list/${id}`);
      const jsonData = await response.json();
      console.log(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getdossieridd();
    getdossierid(dossier_id);
  }, [dossier_id]);*/

    return (
      <>
          <h1 className="mt-5" >Liste des Collaborateurs</h1>
          <ListCollab/>
      </>
    );
  }
  
  export default Collab;