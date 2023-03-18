import "./Skills.css";
import foto from "../../assets/img/trabalhando.png";

function Skills() {
  return (
    <section id="skills" class="skills">
      <h3 class="skills__title">Minhas habilidades</h3>
      <div class="skills__content">
        <img class="skills__img" src={foto} alt="" />
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
