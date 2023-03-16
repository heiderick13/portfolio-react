import "./Navbar.css";
import logo from "../../assets/img/logo-mobile.png";

function Navbar() {
  return (
    <header>
      <img className="myLogo" src={logo} alt="" />
      <nav className="menu">
        <ul className="menu__lista">
          <li className="menu__item">
            <a className="menu__link" href="#projetos">
              Projetos
            </a>
          </li>
          <li className="menu__item">
            <a className="menu__link" href="#habilidades">
              habilidades
            </a>
          </li>
          <li className="menu__item">
            <a className="menu__link" href="#contato">
              contato
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
