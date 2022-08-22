import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navv from './components/Nav';
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
import Rechercher from './components/tables_amine/Rechercher';
import EmplacementDossier from './components/EmplacementDossier';
import RecetteFinance from './routes/RecetteFinance';
import Timbre from './routes/Timbre';
import Greffier from './routes/Greffier';
import Hono from './routes/Hono';
import Creation from './routes/Creation';
import PDF from './components/PDF';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Navv ></Navv>
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
            <Route path="Rechercher" element={<Rechercher />} />
            <Route path="EmplacementDossier" element={<EmplacementDossier />} />
            <Route path="RecetteFinance" element={<RecetteFinance />} />
            <Route path="Timbre" element={<Timbre />} />
            <Route path="Hono" element={<Hono />} />
            <Route path="Greffier" element={<Greffier />} />
            <Route path="Creation" element={<Creation />} />
            <Route path="PDF" element={<PDF />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;