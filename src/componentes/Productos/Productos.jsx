import React from "react";
import productosData from "../../data/productos.json";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Productos.css";

const Productos = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section id="productos" className="products">
      <h3>Productos</h3>

      <h4>DECO</h4>
      <div className="contenedorCards">
        <Slider {...settings}>
          {productosData.deco.map((producto, index) => (
            <div key={index} className="cards">
              <div className="card">
                <img className="cardImagen" src={producto.imagen} alt={producto.nombre} />
                <h5>{producto.nombre}</h5>
                <p>Material: {producto.material}</p>
                <p>Variantes: {producto.variantes.join(", ")}</p>
                <p>Medidas: {producto.medidas}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <h4>AROMA</h4>
      <div className="contenedorCards">
        <Slider {...settings}>
          {productosData.aroma.map((producto, index) => (
            <div key={index} className="cards">
              <div className="card">
                <img src={producto.imagen} alt={producto.nombre} />
                <h5>{producto.nombre}</h5>
                <p>Material: {producto.material}</p>
                <p>Variantes: {producto.variantes.join(", ")}</p>
                <p>Medidas: {producto.medidas}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

const SampleNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "black",
        borderRadius: "50%",
        width: "20px",
        height: "20px",
      }}
      onClick={onClick}
    />
  );
};

const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "black",
        borderRadius: "50%",
        width: "20px",
        height: "20px",
      }}
      onClick={onClick}
    />
  );
};

export default Productos;
