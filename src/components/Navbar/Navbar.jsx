import "./Navbar.css";
import { Link } from "react-router-dom";
import logo from "../../assets/img/logo.svg";

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
      <Link to={"/"}>
        <img className="myLogo" src={logo} alt="" />
      </Link>
      <nav className="menu">
        <ul className="menu__lista">
          <li className="menu__item" onClick={handleClickScroll}>
            <a className="menu__link">projetos</a>
          </li>
          <li className="menu__item" onClick={handleClickScroll}>
            <a className="menu__link">habilidades</a>
          </li>
          <li className="menu__item" onClick={handleClickScroll}>
            <a className="menu__link">contato</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
