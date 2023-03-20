import { Link } from "react-router-dom";
import "./Contact.css";

function Contact() {
  return (
    <section id="contact" class="contact">
      <h3 class="contact__title">Entre em contato comigo</h3>
      <p>
        Faça contato comigo e conheça melhor meu trabalho. Vai ser um prazer te
        atender!
      </p>
      <button className="btn">
        <Link to="/contactme">Contato</Link>
      </button>
    </section>
  );
}

export default Contact;
