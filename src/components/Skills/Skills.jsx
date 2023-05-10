import "./Skills.css";
import foto from "../../assets/img/trabalhando.png";

function Skills() {
  return (
    <section id="habilidades" className="skills">
      <h3 className="skills__title">Minhas habilidades</h3>
      <div className="skills__content">
        <img className="skills__img" src={foto} alt="" />
        <p>
          Acostumado a trabalhar com atendimento ao público, tenho facilidade em
          entender suas necessidades como cliente e traduzir isso para lhe
          entregar o melhor produto. Tenho capacidade de contornar imprevistos e
          encontrar soluções o mais rápido possível.
        </p>
      </div>
    </section>
  );
}

export default Skills;
