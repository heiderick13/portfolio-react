import "./MyProjects.css";
import Card from "../Card/Card";
import project1 from "../../assets/img/pfp.png";
import project2 from "../../assets/img/pfp.png";

function MyProjects() {
  return (
    <section className="projects">
      <h2 className="projects__title">Meus últimos projetos</h2>
      <div className="projects__list">
        <Card
          name="Product Preview"
          foto={project1}
          description="Página de preview de um perfume desenvolvida com HTML e CSS"
        />
        <Card
          name="Página de Login"
          foto={project2}
          description="Página de login com HTML e CSS"
        />
        <Card
          name="Página de Login"
          foto={project2}
          description="Página de login com HTML e CSS"
        />
      </div>
    </section>
  );
}

export default MyProjects;
