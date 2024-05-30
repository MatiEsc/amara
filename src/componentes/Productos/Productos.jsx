import React from "react";
import productosData from "../../data/productos.json";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Productos.css";
import Card from "../Card/Card";

const Productos = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
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
            <Card key={index} producto={producto} /> // Usa el componente Card
          ))}
        </Slider>
      </div>

      <h4>AROMA</h4>
      <div className="contenedorCards">
        <Slider {...settings}>
          {productosData.aroma.map((producto, index) => (
            <Card key={index} producto={producto} /> // Usa el componente Card
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
