import React, { useContext } from "react";
import cart from "./assets/cart-shopping-solid.svg";
import "./CartWidget.css";
import { CartContext } from "../../context/CartContext";

const CartWidget = () => {
  const { totalQuantity } = useContext(CartContext);

  return (
    <div className="navbar-item">
      <img src={cart} alt="" height="30" width="30" />{" "}
      <p>{totalQuantity == null ? 0 : totalQuantity}</p>
    </div>
  );
};

export default CartWidget;
