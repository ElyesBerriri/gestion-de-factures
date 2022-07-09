import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Nav() {
  const [navLinks, setNavLinks] = useState([]);
  const [navLinks1, setNavLinks1] = useState([]);

  useEffect(() => {
    const navs = [
      {name:"Emplacement Dossier", path:"/Empdossier"},
      {name:"Tribunaux", path:"/Tribetadmini"},
      {name:"Administrations", path:"/Services"},
      {name:"Collaborateurs", path:"/Collab"},
      {name:"Utilisateurs", path:"/utilisateurs"},
      {name:"Primes", path:"/primes"},
      {name:"Types de dossiers", path:"/type_dossiers"}
      
    ];
    const navs1 = [
      { name: "clients", path: "/Clients" }
    ];
    setNavLinks(navs);
    setNavLinks1(navs1);
  }, []);

  return (
    <div>
        <div className="d-flex justify-content-center">
      
        <a class="navbar-brand" href="/">Accueil</a>
          <div class="btn-group">
            <button
              type="button"
              class="btn btn-primary dropdown-toggle"
              data-bs-toggle="dropdown"
              data-bs-display="static"
              aria-expanded="false"
            >
              Parametres
            </button>
            <ul class="dropdown-menu dropdown-menu-end">
              {navLinks.map((d, i) => (
                <li key={i}>
                  
                  <Link to={d.path}>
                    <button class="dropdown-item" type="button">
                      {d.name}
                    </button>
                  </Link> 
                 
                </li>
              ))}
            </ul>
          </div>
          <div class="btn-group">
            <button
              type="button"
              class="btn btn-primary dropdown-toggle"
              data-bs-toggle="dropdown"
              data-bs-display="static"
              aria-expanded="false"
            >
              Clients
            </button>
            <ul class="dropdown-menu dropdown-menu-end">
              {navLinks1.map((d, i) => (
                <li key={i}>
                  <Link to={d.path}>
                    <button class="dropdown-item" type="button">
                      {d.name}
                    </button>
                  </Link> 
                </li>
              ))}
            </ul>
          </div>
        </div>
    </div>
  );
}

export default Nav;