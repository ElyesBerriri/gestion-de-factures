import React, { Fragment, useState ,useEffect} from "react";
 import EditCollab from "./EditCollab";
 import InputCollab from "./InputCollab";
 import Button from 'react-bootstrap/Button';
 import Search from "./Search";

const ListCollab = () => {
    const [collab, setCollab] = useState([]);
    const [query, setQuery] = useState("");
    const [row, setRow] = useState("");
    const [collabb, setCollabb] = useState({});
    const [id,setID]=useState("");


    const deletecollab = async id => {
      setRow("");
      document.getElementById("clbtnm").className="btn btn-light mx-3 disabled";
      document.getElementById("clbtnr").className="btn btn-dark disabled";
      try {
        await fetch(`/collaborateurs/list/${id}`, {
          method: "DELETE"
        });
  
        setCollab(collab.filter(collab => collab.collab_id !== id));
      } catch (err) {
        console.error(err.message);
      }
    };

  

    const getCollab = async (query) => {
        try {
          const response = await fetch(`/collaborateurs/list/?q=${query}`);
          const jsonData = await response.json();
          setCollab(jsonData);
        }
         catch (err) {
          console.error(err.message);
        }
      };

    
      useEffect(() => {
        getCollab(query);
      }, [query]);


    return(
        <Fragment>
         <div className="rechercheajout">
         <InputCollab/>
         <Search setQuery={(e) => setQuery(e)} />
      </div>

     
      <div className="table-responsive m-3 mytable mytable-56">
        <table className="table table-hover text-center">
          <thead className="table-secondary text-secondary mytableheader">
                <tr className="bg-primary">
                    <th scope="col">ID</th>
                    <th scope="col">Nom</th>
                    <th scope="col">CIN</th>
                    <th scope="col">Ville</th>
                    <th scope="col">Rue</th>
                    <th scope="col">Numéro</th>
                    <th scope="col">Code postale</th>
                    <th scope="col">Activité</th>
                    <th scope="col">Téléphone</th>
                    <th scope="col">Fax</th>
                    <th scope="col">Email</th>
                    <th scope="col">Matricule</th>
                    <th scope="col">Methode de paiement </th>
                    <th scope="col">Montant</th>
                    <th scope="col">Nombre Dossier</th>
            </tr>
            </thead>
            <tbody>

            {collab.map(collab => (
                  <tr key={collab.collab_id} id={`collab${collab.collab_id}`} onClick={()=>{ setID(collab.collab_id); 
                    setCollabb(collab);
                    let e = document.getElementById(`collab${collab.collab_id}`);
                        if (e.className !== "table-secondary") {
                          if (row !== "") document.getElementById(row).className = "";
                          e.className = "table-secondary";
                          setRow(`collab${collab.collab_id}`);
                          document.getElementById("clbtnr").className="btn btn-dark";
                          document.getElementById("clbtnm").className="btn btn-light mx-3";
                         }}}>
      
                    <td>{collab.collab_id}</td>
                    <td>{collab.nom}</td>
                    <td>{collab.cin}</td>
                    <td>{collab.ville}</td>
                    <td>{collab.rue}</td>
                    <td>{collab.num}</td>
                    <td>{collab.codepostale}</td>
                    <td>{collab.activite}</td>
                    <td>{collab.tel}</td>
                    <td>{collab.fax}</td>
                    <td>{collab.email}</td>
                    <td>{collab.matricule}</td>
                    <td>{collab.methodepaiment}</td>
                    <td>{collab.montant}</td>
                    <td>{collab.nombre_dossier}</td>
                  </tr>
                ))}
        </tbody>
        </table>
        </div>

        <div className="modifsupp">
        <EditCollab collab={collabb}  />
      <Button variant="dark" id="clbtnr" className="disabled" onClick={() => deletecollab(id)}>
      Supprimer
        </Button>
        </div>

       
    </Fragment>
    )
    
};

export default ListCollab;