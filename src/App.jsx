import { useState } from "react";

import { BrowserRouter } from "react-router-dom";
import NavBar from "./componentes/NavBar/NavBar";
import Footer from "./componentes/Footer/Footer";
import Servicios from "./componentes/Servicios/Servicios";
import Contacto from "./componentes/Contacto/Contacto";
import Principal from "./componentes/Principal/Principal";
import Productos from "./componentes/Productos/Productos";
import SobreNosotros from "./componentes/SobreNosotros/SobreNosotros";
import WhatsAppButton from "./componentes/WhatsAppButton/WhatsAppButton";

import "./App.css";

function App() {
  return (
    <div>
      <NavBar />
      <Principal />
      <Productos />
      <Servicios />
      <SobreNosotros />
      <Contacto />
      <WhatsAppButton />
      <Footer />
    </div>
  );
}

export default App;
