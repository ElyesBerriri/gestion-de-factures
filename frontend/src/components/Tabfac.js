import React, { Fragment, useState } from "react";
import Button from 'react-bootstrap/Button';
import Inputfacture from "./inputfacture";

const Tabfac = (props) => {
  const [id, setid] = useState(1);
  const [enqueteid, setenqueteid] = useState(0);
  const [row, setRow] = useState("");


  const deletedemandeur = (idd) => {
    setRow("");
    document.getElementById("clbtnrr").className="btn btn-dark disabled";
    props.setenquetes(props.enquetes.filter(enquete => enquete.enquete_id !== idd));
    props.enquetes.map(enquete =>{if (enquete.enquete_id>idd) 
    {enquete.enquete_id=enquete.enquete_id-1}});
    setid(id-1);
  };

return (
    <Fragment >
           
            <Inputfacture enquetes={props.enquetes} id={id} setid={setid} setenquetes={props.setenquetes}/>

      <div className="table-responsive m-3 mytable  mytable-56creation ">
        <table className="table table-hover text-center">
          <thead className="table-secondary text-secondary mytableheader">
            <tr>
              <th scope="col">المبلغ خارج الضريبة</th>
              <th scope="col">المرجع</th>
              <th scope="col">الموضوع</th>
              <th scope="col">رقم</th>
            </tr>
          </thead>

          <tbody>
            {props.enquetes.map(enquete => (
              <tr key={enquete.enquete_id} id={`enquete${enquete.enquete_id}`} onClick={() => {
                setenqueteid(enquete.enquete_id);
                let e = document.getElementById(`enquete${enquete.enquete_id}`);
                if (e.className !== "table-secondary") {
                  if (row !== "") document.getElementById(row).className = "";
                  e.className = "table-secondary";
                  setRow(`enquete${enquete.enquete_id}`);
                  document.getElementById("clbtnrr").className = "btn btn-dark";
                }
              }}
              >         
                <td  className="text-nowrap">{enquete.somme}</td>
                <td  className="text-nowrap">{enquete.resource}</td>
                <td  className="text-nowrap">{enquete.sujet}</td>
                <td  className="text-nowrap">{enquete.enquete_id}</td>

              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="modifsupp">
        <Button variant="dark" id="clbtnrr" className="disabled" onClick={() => deletedemandeur(enqueteid)}>
          Supprimer
        </Button>
      </div>
    </Fragment>
  )
}

export default Tabfac;