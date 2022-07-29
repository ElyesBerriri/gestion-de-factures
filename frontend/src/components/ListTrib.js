import React, { Fragment, useEffect, useState } from "react";
import EditTrib from "./EditTrib";
import Button from 'react-bootstrap/Button';

const ListTrib = () => {
  const [trib, settrib] = useState([]);
  const [tribb, settribb] = useState({});
  const [id, setID] = useState("");
  const [row, setRow] = useState("");


  const deletetrib = async id => {
    setRow("");
    document.getElementById("clbtnr").className="btn btn-dark disabled";
    document.getElementById("clbtnm").className="btn btn-light mx-3 disabled";
    try {
      await fetch(`/tribunaux/list/${id}`, {
        method: "DELETE"
      });

      settrib(trib.filter(trib => trib.trib_id !== id));
    } catch (err) {
      console.error(err.message);
    }
  };

  const gettrib = async () => {
    try {
      const response = await fetch("/tribunaux/list");
      const jsonData = await response.json();
      
      settrib(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    gettrib();
  }, []);


  return (
    <Fragment>
      <div className="table-responsive mytable mytable-56dossier ">
        <table className="table table-hover text-center">
          <thead className="table-secondary text-secondary mytableheader">
          <tr>
            <th scope="col">Tribunaux</th>
          </tr>
        </thead>
        <tbody>
          {trib.map(trib => (

            <tr key={trib.trib_id} id={`trib${trib.trib_id}`} onClick={()=>{ setID(trib.trib_id);
             settribb(trib);
             let e = document.getElementById(`trib${trib.trib_id}`);
             if (e.className !== "table-secondary") {
               if (row !== "") document.getElementById(row).className = "";
               e.className = "table-secondary";
               setRow(`trib${trib.trib_id}`);
               document.getElementById("clbtnr").className="btn btn-dark";
               document.getElementById("clbtnm").className="btn btn-light mx-3";
              }}}>
             <td>{trib.lieux}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>

      <div className="modifsupp">
      <EditTrib trib={tribb} id={id}/>
      <Button variant="dark" id="clbtnr" className="disabled"  onClick={() => deletetrib(id)}>
      Supprimer
        </Button>
 </div>
    </Fragment>
  );
};

export default ListTrib;