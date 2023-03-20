import "./Navbar.css";
import logo from "../../assets/img/logo-mobile.png";

function Navbar() {
  const handleClickScroll = (e) => {
    const section = e.target.textContent.toLowerCase();
    const scrollTo = document.querySelector(`#${section}`);

    if (scrollTo) {
      scrollTo.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header>
      <img className="myLogo" src={logo} alt="" />
      <nav className="menu">
        <ul className="menu__lista">
          <li className="menu__item" onClick={handleClickScroll}>
            <a className="menu__link" href="#projetos">
              projects
            </a>
          </li>
          <li className="menu__item" onClick={handleClickScroll}>
            <a className="menu__link" href="#habilidades">
              skills
            </a>
          </li>
          <li className="menu__item" onClick={handleClickScroll}>
            <a className="menu__link" href="#contato">
              contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
