// App.js
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./assets/lib/animate/animate.min.css";
import "./assets/lib/owlcarousel/assets/owl.carousel.min.css";
import "./assets/css/bootstrap.min.css";
import "./assets/css/style.css";
import FrontOffice from './pages/FrontOffice';
import Inscription from './pages/Authentification/Inscription';
import Login from './pages/Authentification/Login';
//import "./assets/lib/wow/wow.min.js";
//import "./assets/lib/waypoints/waypoints.min.js";
//import "./assets/lib/owlcarousel/owl.carousel.min.js";
//import "./assets/js/main.js";

function App() {  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<FrontOffice />} />
        <Route path="/inscription" element={<Inscription />}/>
        <Route path="/login" element={<Login />} />
        {/* The "/*" is important to indicate that BackOffice has nested routes */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;