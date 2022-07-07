import React, { useEffect, useState } from "react";
import EditUtilisateurs from "./EditUtilisateurs";

const ListUtilisateur = () => {
  const [users, setUsers] = useState([]);

  const deleteUser = async id => {
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
      <table className="table table table-hover mt-5 text-center">
        <thead  className="table-dark">
          <tr>
            <th>Login</th>
            <th>PWD</th>
            <th>Domaine</th>
            <th>Modifier</th>
            <th>Supprimer</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.utilisateur_id}>
              <td>{user.login}</td>
              <td>{user.pwd}</td>
              <td>{user.domaine}</td>
              <td>
                <EditUtilisateurs user={user} />
              </td>
              <td>
              <button
                className="btn btn-danger"
                onClick={() => deleteUser(user.utilisateur_id)}>
                  Supprimer
              </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default ListUtilisateur;