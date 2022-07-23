import React, { useEffect, useState } from "react";
import EditUtilisateurs from "./EditUtilisateurs";

const ListUtilisateur = () => {
  const [users, setUsers] = useState([]);
  const [user,setUser] = useState({"login":"","pwd":"","domaine":""});
  const [row,setRow] = useState("");

  const deleteUser = async id => {
    setRow("");
    setUser({});
    try {
      await fetch(`/utilisateurs/list/${id}`, {
        method: "DELETE"
      });

      setUsers(users.filter(user => user.utilisateur_id !== id));
    } catch (err) {
      console.error(err.message);
    }
  };

  const getUsers = async () => {
    try {
      const response = await fetch("/utilisateurs/list");
      const jsonData = await response.json();
      
      setUsers(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      {" "}
      <EditUtilisateurs user={user} />
                <button
                    className="btn btn-danger"
                    onClick={() => {(row!=="") ? deleteUser(user.utilisateur_id) : alert("Vous devez choisir un dossier");}}>
                    Supprimer
                </button>
      <table className="table table table-hover mt-5 text-center">
        <thead  className="table-dark">
          <tr>
            <th>Login</th>
            <th>PWD</th>
            <th>Domaine</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.utilisateur_id} id={`u${user.utilisateur_id}`} onClick={()=>{
              let e = document.getElementById(`u${user.utilisateur_id}`);
              if(e.className !== "table-primary"){
                  if(row!=="") document.getElementById(row).className = "";
                  e.className = "table-primary";
                  setRow(`u${user.utilisateur_id}`);
                  setUser(user);
              }
          }}>
              <td>{user.login}</td>
              <td>{user.pwd}</td>
              <td>{user.domaine}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default ListUtilisateur;