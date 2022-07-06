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
import Collab from './routes/Collab';
import Tribetadmini from './routes/Tribetadmini';

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
          <Route path="Empdossier" element={<Empdossier />} />
          <Route path="Collab" element={<Collab />} />
        </Routes>
        </div>
        </div>
      </BrowserRouter>
      
    );
   
}

 

export default App;
