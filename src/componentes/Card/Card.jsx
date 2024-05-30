import React from "react";
import "./Card.css";

const Card = ({ producto }) => {
  return (
    <div className="card">
      <img className="cardImagen" src={producto.imagen} alt={producto.nombre} />
      <h5>{producto.nombre}</h5>
      <p>Material: {producto.material}</p>
      <p>Variantes: {producto.variantes.join(", ")}</p>
      <p>Medidas: {producto.medidas}</p>
    </div>
  );
};

export default Card;
