import logo from "../../assets/Ecommerce_Logo.png";
import CartWidget from "../CartWidget/CartWidget";
import "bulma/css/bulma.css";

const NavBar = () => {
  return (
    <nav className="navbar has-shadow is-info">
      <div className="navbar-item">
        <div className="navbar-item" to="/">
          <span className="navbar-item">
            <img src={logo} alt="logo" />
          </span>
        </div>
      </div>
      <div className="navbar-menu" id="nav-links">
        <ul className="navbar-end">
          <li className="navbar-item">
            <a className="navbar-item" href="/">
              Hombre
            </a>
          </li>
          <li className="navbar-item">
            <a className="navbar-item" href="/">
              Mujer
            </a>
          </li>
          <li className="navbar-item">
            <a className="navbar-item" href="/">
              Bijouteri
            </a>
          </li>
        </ul>
      </div>
      <CartWidget />
    </nav>
  );
};

export default NavBar;
