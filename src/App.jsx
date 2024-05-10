import { useState } from "react";

import { BrowserRouter } from "react-router-dom";
import NavBar from "./componentes/NavBar/NavBar";
import Footer from "./componentes/Footer/Footer";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <h1>AMARA</h1>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
