import { useState } from "react";

import { BrowserRouter } from "react-router-dom";
import NavBar from "./componentes/NavBar/NavBar";
import Footer from "./componentes/Footer/Footer";
import Servicios from "./componentes/Servicios/Servicios";
import Contacto from "./componentes/Contacto/Contacto";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <h1>AMARA</h1>
      <Servicios />
      <Contacto />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
