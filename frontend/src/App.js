import './App.css';
import Nav from './components/Nav';
import React from "react";
import {
  Route,
  NavLink,
  HashRouter,
  BrowserRouter,
  Link,
  Routes
} from "react-router-dom";
import Home from "./components/Home";
import Clients from './components/Clients';
import TribetAdmini from './components/tribetadmini';
import Empdossier from './components/Empdossier';
import Collab from './components/Collab';

function App() {
  return (
    <HashRouter>
    <div className="App">
      <Nav></Nav>
      <div className='content'>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/Clients" element={<Clients />}/>
          <Route path="/tribetadmini" element={<TribetAdmini />}/>
          <Route path="/tribetadmini" element={<TribetAdmini />}/>
          <Route path="/Empdossier" element={<Empdossier/>}/>
          <Route path="/Collab" element={<Collab/>}/>
        </Routes>
      </div>
    </div>
  </HashRouter>
  );
}

export default App;
