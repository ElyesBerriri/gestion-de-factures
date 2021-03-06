import React, { Fragment, useState ,useEffect} from "react";
 import EditCollab from "./EditCollab";
 import InputCollab from "./InputCollab";
 
const ListCollab = () => {
    const [collab, setCollab] = useState([]);
    const [query, setQuery] = useState("");


    const deletecollab = async id => {
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
           <input
          className="search"
          placeholder="Recherche .."
          onChange={(e) => setQuery(e.target.value.toLowerCase())} />
  

      {" "}
      <table className="table table table-hover mt-5 text-center">
        <thead  className="table-dark">
                <tr className="bg-primary">
                    <th scope="col">ID</th>
                    <th scope="col">Nom</th>
                    <th scope="col">Cin</th>
                    <th scope="col">Ville</th>
                    <th scope="col">Rue</th>
                    <th scope="col">Numéro</th>
                    <th scope="col">Code_postale</th>
                    <th scope="col">Activité</th>
                    <th scope="col">Téléphone</th>
                    <th scope="col">Fax</th>
                    <th scope="col">Email</th>
                    <th scope="col">Matricule</th>
                    <th scope="col">Methode_de_paiement </th>
                    <th scope="col">Montant</th>
                    <th scope="col">Nombre_Dossier</th>
                    <th scope="col">Modifier</th>
                    <th scope="col">Supprimer</th>
            </tr>
            </thead>
            <tbody>

            {collab.map(collab => (
                  <tr key={collab.collab_id}>
      
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
      
                    <td>
                      <EditCollab collab={collab} />
                    </td>
      
                    <td>
                    <button
                        className="btn btn-danger"
                        onClick={() => deletecollab(collab.collab_id)}
                      >
                        Supprimer
                      </button>
                    </td>
                  </tr>
                ))}
        </tbody>
        </table>
         <InputCollab/>
      
    </Fragment>
    )
    
};

export default ListCollab;