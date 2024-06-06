import React from "react";
import "./Card.css";

const Card = ({ producto }) => {
  return (
    <div className="card-container">
      {" "}
      {/* Nuevo contenedor */}
      <div className="card">
        <img className="cardImagen" src={producto.imagen} alt={producto.nombre} />
        <h5 translate="no">{producto.nombre}</h5>
        <p translate="no">Material: {producto.material}</p>
        <p translate="no">Variantes: {producto.variantes.join(", ")}</p>
        <p translate="no">Medidas: {producto.medidas}</p>
      </div>
    </div>
  );
};

export default Card;
