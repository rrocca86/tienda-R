import { NavLink, Link } from "react-router-dom";
import logo from "../../assets/Ecommerce_Logo.png";
import CartWidget from "../CartWidget/CartWidget";
import "bulma/css/bulma.css";

const NavBar = () => {
  return (
    <nav className="navbar has-shadow is-info">
      <div className="navbar-item">
        <div className="navbar-item" to="/">
          <span className="navbar-item">
            <Link to={"/"}>
              <img src={logo} alt="logo" />
            </Link>
          </span>
        </div>
      </div>
      <div className="navbar-menu" id="nav-links">
        <ul className="navbar-end">
          <li className="navbar-item">
            <NavLink className="navbar-item has-text-white" to={"/category/1"}>
              Hombre
            </NavLink>
          </li>
          <li className="navbar-item">
            <NavLink className="navbar-item has-text-white" to={"/category/2"}>
              Mujer
            </NavLink>
          </li>
          <li className="navbar-item">
            <NavLink className="navbar-item has-text-white" to={"/category/3"}>
              Bijouterie
            </NavLink>
          </li>
        </ul>
      </div>
      <CartWidget />
    </nav>
  );
};

export default NavBar;
