import "./Technologies.css";
import html from "../../assets/img/logo-html.png";
import css from "../../assets/img/logo-css3.png";
import javascript from "../../assets/img/logo-javascript.png";
import bootstrap from "../../assets/img/logo-bootstrap.png";
import react from "../../assets/img/logo-react.png";

function Technologies() {
  return (
    <section class="techs">
      <div class="techs__content">
        <h3 class="techs__title">Tecnologias utilizadas no seu projeto</h3>
        <div className="logos">
          <img src={html} alt="Logo HTML" />
          <img src={css} alt="Logo CSS" />
          <img src={javascript} alt="Logo JavaScript" />
          <img src={bootstrap} alt="Logo Bootstrap" />
          <img src={react} alt="Logo React" />
        </div>
      </div>
    </section>
  );
}

export default Technologies;
