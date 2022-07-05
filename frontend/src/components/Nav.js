import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Nav() {
  const [navLinks, setNavLinks] = useState([]);

  useEffect(() => {
    const navs = [
      { name: "Accueil", path: "/" },
      { name: "clients", path: "/Clients" },
      {name:"Emplacement Dossier", path:"/Empdossier"},
      {name:"Tribunaux et Administrations", path:"/tribetadmini"},
      {name:"Collaborateurs", path:"/Collab"},
    ];
    setNavLinks(navs);
  }, []);

  return (
    <div>
        <div className="container">
      
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
        </div>
    
    </div>
  );
}

export default Nav;