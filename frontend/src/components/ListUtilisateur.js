import React, { useEffect, useState } from "react";
import EditUtilisateurs from "./EditUtilisateurs";
import InputUtilisateur from "./InputUtilisateur";
import { Button } from "react-bootstrap";

const ListUtilisateur = () => {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({ "login": "", "pwd": "", "domaine": "" });
  const [row, setRow] = useState("");

  const deleteUser = async id => {
    setRow("");
    setUser({});
    document.getElementById("lubtne").className = "btn btn-light mx-3 mb-3 disabled";
    document.getElementById("lubtnd").className = "btn btn-dark mb-3 disabled";
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
      <div className="table-responsive m-3 mytable mytable-68">
        <table className="table table-hover text-center">
          <thead className="table-secondary text-secondary mytableheader">
            <tr>
              <th>Login</th>
              <th>Pwd</th>
              <th>Domaine</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.utilisateur_id} id={`u${user.utilisateur_id}`} onClick={() => {
                let e = document.getElementById(`u${user.utilisateur_id}`);
                if (e.className !== "table-secondary") {
                  if (row !== "") document.getElementById(row).className = "";
                  e.className = "table-secondary";
                  setRow(`u${user.utilisateur_id}`);
                  setUser(user);
                  document.getElementById("lubtne").className = "btn btn-light mx-3 mb-3";
                  document.getElementById("lubtnd").className = "btn btn-dark mb-3";
                }
              }}>
                <td data-label="Login">{user.login}</td>
                <td data-label="Pwd">{user.pwd}</td>
                <td data-label="Domaine">{user.domaine}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <InputUtilisateur />
      <EditUtilisateurs user={user} />
      <Button
        className="mb-3 disabled" variant="dark" id="lubtnd"
        onClick={() => { deleteUser(user.utilisateur_id) }}>
        Supprimer
      </Button>
    </>
  );
};

export default ListUtilisateur;