import "./Servicios.css";

const Servicios = () => {
  return (
    <section id="servicios" className="services">
      <h3>Servicios</h3>
      <div className="containerService">
        <div className="imagen1">
          <img
            src="/img/servicios/refill.png"
            srcSet="/img/servicios/refillMobile.png 600w, /img/servicios/refill.png 1200w"
            sizes="(max-width: 768px) 600px, 1200px"
            alt="refill"
          />
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
          <img
            src="/img/servicios/BackgroundBorder.png"
            srcSet="/img/servicios/souvenirsMobile.png 600w, /img/servicios/BackgroundBorder.png 1200w"
            sizes="(max-width: 768px) 600px, 1200px"
            alt="backgroundBorder"
          />
        </div>
      </div>
    </section>
  );
};

export default Servicios;
