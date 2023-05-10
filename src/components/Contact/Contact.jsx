import { Link } from "react-router-dom";
import "./Contact.css";

function Contact() {
  return (
    <section id="contato" className="contact">
      <h3 className="contact__title">Entre em contato comigo</h3>
      <p>
        Faça contato comigo e conheça melhor meu trabalho. Vai ser um prazer te
        atender!
      </p>
      <Link to="/contactme">
        <button className="btn">Contato</button>
      </Link>
    </section>
  );
}

export default Contact;
