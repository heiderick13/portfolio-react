import "./AboutMe.css";
import profile from "../../assets/img/pfp.png";

function AboutMe() {
  return (
    <section className="about">
      <h2 className="about__title">Quem sou eu</h2>
      <div className="about__info">
        <img className="about__img" src={profile} alt="Marcelo sorrindo" />
        <p>
          Olá, eu sou o Marcelo! Nascido e criado na Zona Norte do Rio de
          Janeiro, apaixonado por tecnologia. Atuo como desenvolvedor Frontend,
          na construção de páginas web e sites dinâmicos.
        </p>
      </div>
    </section>
  );
}

export default AboutMe;
