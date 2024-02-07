import React from "react";
import logo from "../../assets/Ecommerce_Logo.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="myFooter">
      <div>
        <p>
          <strong>Tienda R</strong> por Renzo Rocca
        </p>
        <p>
          Contáctanos al 444-444-444 o envía un correo a{" "}
          <strong>ayuda@tienda-r.com</strong>
        </p>
        <p>
          Para ver el aviso de privacidad, accede a{" "}
          <a href="">tienda-r.com/aviso</a>
        </p>
        <img src={logo} alt="logo" width="40px" height="40px" />
        <p>Copyright 2024©</p>
      </div>
    </footer>
  );
};

export default Footer;
