import "./Card.css";

function Card({ name, foto, description, deploy }) {
  return (
    <div className="projects__item">
      <div>
        <img className="projects__img" src={foto} alt="Project screenshot" />
      </div>
      <div className="projects__description">
        <h2>{name}</h2>
        <p>{description}</p>
      </div>
      <a href={deploy} target="_blank">
        <button className="btn">Confira</button>
      </a>
    </div>
  );
}

export default Card;
