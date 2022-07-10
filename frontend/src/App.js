import './App.css';
import Nav from './components/Nav';
import React from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from "./routes/Home";
import Clients from './routes/Clients';
import Empdossier from './routes/Empdossier';
import TypeDossier from './routes/TypeDossier';
import Utilisateurs from './routes/Utilisateurs';
import Collab from './routes/Collab';
import Tribetadmini from './routes/Tribetadmini';
import InputCollab from './components/InputCollab';
import Primes from './routes/Primes';
import ListServices from './routes/Services';
import InputClient from './components/InputClient';

function App() {

    return (
      <BrowserRouter>
        <div className='App'>
        <Nav></Nav>
          <div className='content'>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="Clients" element={<Clients />} />
              <Route path="TribetAdmini" element={<Tribetadmini />} />
              <Route path="type_dossiers" element={<TypeDossier />} />
              <Route path="Empdossier" element={<Empdossier />} />
              <Route path="Collab" element={<Collab />} />
              <Route path="Inputcollab" element={<InputCollab />} />
              <Route path="Utilisateurs" element={<Utilisateurs />} />
              <Route path="Primes" element={<Primes />} />
              <Route path="Services" element={<ListServices />} />
              <Route path="InputClient" element={<InputClient />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    );
}

export default App;