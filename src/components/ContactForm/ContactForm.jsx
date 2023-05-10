import "./ContactForm.css";

function ContactForm() {
  return (
    <>
      <div className="contact-form">
        <form
          action="https://formsubmit.co/36bce0cac811085040d8364dde7c256e"
          method="POST"
        >
          <label>
            Nome e Sobrenome*
            <input
              className="input__padrao"
              type="text"
              name="full-name"
              placeholder="Digite seu nome e sobrenome aqui"
              required
            />
          </label>

          <label>
            Email*
            <input
              className="input__padrao"
              type="email"
              name="email"
              placeholder="exemplo@email.com"
              required
            />
          </label>

          <label>
            Telefone*
            <input
              className="input__padrao"
              type="tel"
              name="tel"
              placeholder="(XX)XXXXX-XXXX"
              required
            />
          </label>

          <label>
            Deixe uma mensagem
            <textarea
              className="input__padrao"
              name="message"
              placeholder="Mensagem"
              rows="5 "
              cols="70"
            ></textarea>
          </label>

          <button className="btn">Enviar Formulário</button>
        </form>
      </div>
    </>
  );
}

export default ContactForm;
