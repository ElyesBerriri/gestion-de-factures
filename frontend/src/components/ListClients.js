import React, { Fragment, useState, useEffect } from "react";

const ListClients = () => {
  const [Clients, setClients] = useState([]);

  async function getClients() {
    const res = await fetch("/Clients");
    const ClientArray = await res.json();
    setClients(ClientArray);
  }

  useEffect(() => {
    getClients();
  }, []);

  return (
    <Fragment>
      {" "}
      <table>
        <thead>
          <tr>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {Clients.map((Client) => (
            <tr key={Client.Client_id}>
              <td>{Client.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
  );
};

export default ListClients;
