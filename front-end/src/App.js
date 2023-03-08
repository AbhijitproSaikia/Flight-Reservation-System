import './App.css';
import React from 'react';
import { useState } from 'react';
import Registration from './registration';
import Userlogin from './userlogin';
import Home from './Home/Home';
import { BrowserRouter as Router, Route, Routes, RouteElement,Navigate } from 'react-router-dom';
import Userdashboard from './Userdashboard';



function App() {



  return (
    <Router>
        <Routes>

          <Route path="/login" element={<Userlogin/>} />
          <Route path="/reg" element={<Registration/>} />
          <Route path="/Home" element={<Home/>} />
        
        </Routes>
    </Router>
  );
}

export default App;
