import "./MyProjects.css";
import Card from "../Card/Card";
import countries from "../../assets/img/countries.png";
import ecommerce from "../../assets/img/ecommerce-product.png";
import shortUrl from "../../assets/img/shortening-url.png";
import spaceTourism from "../../assets/img/space-tourism.png";
import kanban from "../../assets/img/kanban.png";
import todoApp from "../../assets/img/todo-app.png";

function MyProjects() {
  return (
    <section id="projetos" className="projects">
      <h2 className="projects__title">Meus últimos projetos</h2>
      <div className="projects__list">
        <Card
          name="Turismo Espacial"
          foto={spaceTourism}
          description="Página de uma agência de turismo espacial. São apresentados os destinos, tripulação e tecnologias utilizadas na sua viagem ao espaço."
          deploy={"https://space-project-rho.vercel.app/"}
        />
        <Card
          name="pesquisa de países"
          foto={countries}
          description="Nesse site é possível ver uma lista com todos os países do mundo além de buscar um país por nome (apenas em inglês) e filtrar por continente."
          deploy={"https://countries-api-eight-kohl.vercel.app/"}
        />
        <Card
          name="KanBan App"
          foto={kanban}
          description="Aplicação para organizar as tarefas do dia a dia ou da semana. Você pode marcar cada tarefa de acordo com o status atual, conforme for avançando em cada uma."
          deploy={"https://kanban-react-two.vercel.app/"}
        />
        <Card
          name="
          Página de Produto"
          foto={ecommerce}
          description="Página de produto em site de e-commerce onde é possível adicionar e excluir item do carrinho. Além disso é possível mudar a foto do produto em display."
          deploy={"https://ecommerce-product-page-green.vercel.app/"}
        />
        <Card
          name="Lading page com API"
          foto={shortUrl}
          description="Landing page de uma empresa fictícia de serviço onde usuário pode encurtar urls de forma rápida e fácil."
          deploy={"https://heiderick13.github.io/shorten-url-landing-page/"}
        />
        <Card
          name="Aplicativo Lista de Tarefas"
          foto={todoApp}
          description="Aplicação para controle de tarefas diárias. É possível adicionar e editar novas tarefas. marcá-las como concluídas e excluir."
          deploy={"https://trackyourtasks.vercel.app/"}
        />
      </div>
    </section>
  );
}

export default MyProjects;
