import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem";

const Cart = () => {
  const { cart, clearCart, total } = useContext(CartContext);

  return (
    <>
      {cart.length == 0 ? (
        <div>
          <h1>Tu carrito está vacío.</h1>
        </div>
      ) : (
        <div>
          {cart.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
          <div className="is-flex-direction-row p-4">
            <h1 className="media-content has-text-weight-bold is-size-5">
              Total: ${total}
            </h1>
          </div>
          <div className="is-flex is-justify-content-flex-end is-align-content-space-between mb-5">
            <button
              className="button is-danger is-small mr-5"
              onClick={() => clearCart()}
            >
              Vaciar Carrito
            </button>
            <Link className="button is-info is-small mr-5" to="/checkout">
              Finalizar Compra
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
