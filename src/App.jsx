import { useState } from "react";

import { BrowserRouter } from "react-router-dom";
import NavBar from "./componentes/NavBar/NavBar";
import Footer from "./componentes/Footer/Footer";
import Servicios from "./componentes/Servicios/Servicios";
import Contacto from "./componentes/Contacto/Contacto";
import Principal from "./componentes/Principal/Principal";

import "./App.css";
import Productos from "./componentes/Productos/Productos";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Principal />
      <Productos />
      <h1>AMARA</h1>
      <Servicios />
      <Contacto />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
