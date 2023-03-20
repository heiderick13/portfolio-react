import "./ContactForm.css";

function ContactForm() {
  return (
    <>
      <div class="contact-form">
        <form
          action="https://formsubmit.co/marceloheiderick@outlook.com"
          method="POST"
        >
          <label>
            Nome e Sobrenome*
            <input
              class="input__padrao"
              type="text"
              name="full-name"
              placeholder="Digite seu nome e sobrenome aqui"
              required
            />
          </label>

          <label>
            Email*
            <input
              class="input__padrao"
              type="email"
              name="email"
              placeholder="exemplo@email.com"
              required
            />
          </label>

          <label>
            Telefone*
            <input
              class="input__padrao"
              type="tel"
              name="tel"
              placeholder="(XX)XXXXX-XXXX"
              required
            />
          </label>

          <label>
            Deixe uma mensagem
            <textarea
              class="input__padrao"
              name="message"
              placeholder="Mensagem"
              rows="5 "
              cols="70"
            ></textarea>
          </label>

          <button class="btn">Enviar Formulário</button>
        </form>
      </div>
    </>
  );
}

export default ContactForm;
