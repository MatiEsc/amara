import "./Servicios.css";

const Servicios = () => {
  return (
    <section id="servicios" className="services">
      <h3>Servicios</h3>
      <div className="containerService">
        <div className="imagen1">
          <img src="/public/img/servicios/refill.png" alt="refill" />
        </div>
        <div className="descripcion1">
          <h4>REFILL DE VELAS Y DIFUSORES AROMATICOS</h4>
          <p>
            Reciclá el envase de vela o difusor que tenés en tu hogar, renovando el aroma y la
            decoración a muy bajo costo.
          </p>
        </div>
        <div className="descripcion2">
          <h4>SERVICIO PERSONALIZADO Y SOUVENIRS</h4>
          <p>
            Ofrece a tus invitados velitas, bombones o difusores aromáticos, para que se lleven de
            recuerdo. Se les ofrece el diseño personalizado del sticker o cartel para incluir en la
            vela o difusor.
          </p>
        </div>
        <div className="imagen2">
          <img src="/public/img/servicios/BackgroundBorder.png" alt="backgroundBorder" />
        </div>
      </div>
    </section>
  );
};

export default Servicios;
