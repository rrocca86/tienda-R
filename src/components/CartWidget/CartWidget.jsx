import React, { useContext } from "react";
import cart from "./assets/cart-shopping-solid.svg";
import "./CartWidget.css";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
  const { totalQuantity } = useContext(CartContext);

  return (
    <div className="navbar-item">
      <Link to="/cart">
        <img src={cart} alt="" height="30" width="30" />{" "}
      </Link>
      <p>{totalQuantity == null ? 0 : totalQuantity}</p>
    </div>
  );
};

export default CartWidget;
