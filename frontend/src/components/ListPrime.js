import React, { useEffect, useState } from "react";
import EditPrime from "./EditPrime";
import InputPrime from "./InputPrime";
import { Button } from "react-bootstrap";

const ListPrime = () => {
  const [primes, setPrimes] = useState([]);
  const [row, setRow] = useState("");
  const [doc, setDoc] = useState({
    "libelle": "",
    "montant": "",
    "dissociable": false,
    "impot": false,
    "mensuel": false
  });

  const deletePrime = async id => {
    setRow("");
    setDoc({
      "libelle": "",
      "montant": "",
      "dissociable": false,
      "impot": false,
      "mensuel": false
    });
    document.getElementById("lpbtne").className = "btn btn-light mx-3 mb-3 disabled";
    document.getElementById("lpbtnd").className = "btn btn-dark mb-3 disabled";
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
      <InputPrime />
      <div className="table-responsive   mytable-56prime">
        <table className="table table-hover text-center">
          <thead className="table-secondary text-secondary mytableheader">
            <tr>
              <th>Libellé</th>
              <th>Montant</th>
              <th>Dissociable</th>
              <th>Impot</th>
              <th>Mensuel</th>
            </tr>
          </thead>
          <tbody>
            {primes.map(prime => (
              <tr key={prime.id} id={`pr${prime.id}`} onClick={() => {
                let e = document.getElementById(`pr${prime.id}`);
                if (e.className !== "table-secondary") {
                  if (row !== "") document.getElementById(row).className = "";
                  e.className = "table-secondary";
                  setRow(`pr${prime.id}`);
                  setDoc(prime);
                  document.getElementById("lpbtne").className = "btn btn-light mx-3 mb-3";
                  document.getElementById("lpbtnd").className = "btn btn-dark mb-3";
                }
              }}>
                <td data-label="Libellé">{prime.libelle}</td>
                <td data-label="Montant">{prime.montant}</td>
                {prime.dissociable ? <td data-label="Dissociable">oui</td> : <td data-label="Dissociable">non</td>}
                {prime.impot ? <td data-label="Impot">oui</td> : <td data-label="Impot">non</td>}
                {prime.mensuel ? <td data-label="Mensuel">oui</td> : <td data-label="Mensuel">non</td>}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <EditPrime prime={doc} />
      <Button
        variant="dark" id="lpbtnd" className="mb-3 disabled"
        onClick={() => deletePrime(doc.id)}>
        Supprimer
      </Button>
    </>
  );
};

export default ListPrime;