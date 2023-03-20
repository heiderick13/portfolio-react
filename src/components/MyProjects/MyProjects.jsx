import "./MyProjects.css";
import Card from "../Card/Card";
import calculator from "../../assets/img/calculator.png";
import ecommerce from "../../assets/img/ecommerce-product.png";
import shortUrl from "../../assets/img/shortening-url.png";
import geniusGame from "../../assets/img/genius-game.png";
import weather from "../../assets/img/weather-app.png";
import todoApp from "../../assets/img/todo-app.png";

function MyProjects() {
  return (
    <section id="projects" className="projects">
      <h2 className="projects__title">Meus últimos projetos</h2>
      <div className="projects__list">
        <Card
          name="Calculadora"
          foto={calculator}
          description="Calculadora desenvolvida com o paradigma de orientação a objetos, método muito popular e requisitado no mundo da programação."
          deploy={"https://heiderick13.github.io/calculator-oop/"}
        />
        <Card
          name="
          Página de Produto"
          foto={ecommerce}
          description="Página de produto em site de e-commerce onde é possível adicionar e excluir item do carrinho. Além disso é possível mudar a foto do produto em display."
          deploy={"https://ecommerce-product-page-green.vercel.app/"}
        />
        <Card
          name="Aplicativo Lista de Tarefas"
          foto={todoApp}
          description="Aplicação para controle de tarefas diárias. É possível adicionar e editar novas tarefas. marcá-las como concluídas e excluir."
          deploy={"https://trackyourtasks.vercel.app/"}
        />
        <Card
          name="Lading page com API"
          foto={shortUrl}
          description="Landing page de uma empresa fictícia de serviço onde usuário pode encurtar urls de forma rápida e fácil."
          deploy={"https://heiderick13.github.io/shorten-url-landing-page/"}
        />
        <Card
          name="Jogo Genius"
          foto={geniusGame}
          description="Clone do famoso jogo Genius. Usuário deve clicar nos botões na sequência correta."
          deploy={"https://genius-game-gray.vercel.app/"}
        />
        <Card
          name="Weather App"
          foto={weather}
          description="Aplicativo de pesquisa do tempo ao redor do mundo onde o usuário pode buscar pelo nome de qualquer local que desejar."
          deploy={"https://heiderick13.github.io/weather-app/"}
        />
      </div>
    </section>
  );
}

export default MyProjects;
