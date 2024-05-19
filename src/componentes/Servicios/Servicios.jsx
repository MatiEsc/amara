import "./Servicios.css";

const Servicios = () => {
  return (
    <section className="services">
      <h3>Servicios</h3>
      <div class="containerService">
        <div class="imagen1">imagen1</div>
        <div class="descripcion1">
          <h4>REFILL DE VELAS Y DIFUSORES AROMATICOS</h4>
          <p>
            Reciclá el envase de vela o difusor que tenés en tu hogar, renovando el aroma y la
            decoración a muy bajo costo.
          </p>
        </div>
        <div class="descripcion2">
          <h4>SERVICIO PERSONALIZADO Y SOUVENIRS</h4>
          <p>
            Ofrece a tus invitados velitas, bombones o difusores aromáticos, para que se lleven de
            recuerdo. Se les ofrece el diseño personalizado del sticker o cartel para incluir en la
            vela o difusor.
          </p>
        </div>
        <div class="imagen2">imagen2</div>
      </div>
    </section>
  );
};

export default Servicios;
