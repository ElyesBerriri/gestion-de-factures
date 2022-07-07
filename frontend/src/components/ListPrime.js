import React, { useEffect, useState } from "react";
import EditPrime from "./EditPrime";

const ListPrime = () => {
  const [primes, setPrimes] = useState([]);

  const deletePrime = async id => {
    try {
      await fetch(`/primes/list/${id}`, {
        method: "DELETE"
      });

      setPrimes(primes.filter(prime => prime.id !== id));
    } catch (err) {
      console.error(err.message);
    }
  };

  const getPrimes = async () => {
    try {
      const response = await fetch("/primes/list");
      const jsonData = await response.json();
      
      setPrimes(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getPrimes();
  }, []);

  return (
    <>
      {" "}
      <table className="table table table-hover mt-5 text-center">
        <thead  className="table-dark">
          <tr>
            <th>Libellé</th>
            <th>Montant</th>
            <th>Dissociable</th>
            <th>Impot</th>
            <th>Mensuel</th>
            <th>Modifier</th>
            <th>Supprimer</th>
          </tr>
        </thead>
        <tbody>
          {primes.map(prime => (
            <tr key={prime.id}>
              <td>{prime.libelle}</td>
              <td>{prime.montant}</td>
              {prime.dissociable ? <td>oui</td> : <td>non</td>}
              {prime.impot ? <td>oui</td> : <td>non</td>}
              {prime.mensuel ? <td>oui</td> : <td>non</td>}
              <td>
                <EditPrime prime={prime} />
              </td>
              <td>
              <button
                className="btn btn-danger"
                onClick={() => deletePrime(prime.id)}>
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

export default ListPrime;