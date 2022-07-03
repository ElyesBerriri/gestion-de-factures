import './App.css';
import React from "react";
import {
  Route,
  NavLink,
  HashRouter,
  Routes
} from "react-router-dom";
import Home from "./components/Home";
import Clients from './components/Clients';

function App() {
  return (
    <HashRouter>
      <div className="App">
        <ul>
          <li><NavLink to='/'>Home</NavLink></li>
          <li><NavLink to='/Clients'>Clients</NavLink></li>
        </ul>
        <div className='content'>
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/Clients" element={<Clients />}/>
          </Routes>
        </div>
      </div>
    </HashRouter>
  );
}

export default App;
