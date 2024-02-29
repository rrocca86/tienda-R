import { React, useContext } from "react";
import { CartContext } from "../../context/CartContext";

const CartItem = ({ id, title, price, image, quantity }) => {
  const { cart, deleteItem } = useContext(CartContext);

  const handleOnClick = (prodId) => {
    deleteItem(prodId);
  };

  return (
    <div className="column">
      <div className="card mb-4">
        <div className="card-content is-flex px-5 is-justify-content-space-between">
          {/* Columna 1: Imagen */}
          <div className="media mgr-medium">
            <div className="card-image">
              <figure className="image is-96x96 px-2">
                <img src={image} alt={title} />
              </figure>
            </div>
          </div>

          {/* Columna 2: Título */}
          <div
            className="media-content px-4 is-flex is-align-items-flex-start"
            style={{ width: "50rem" }}
          >
            <div className="media-content title is-6">{title}</div>
          </div>

          {/* Columna 3: Precio y Cantidad */}
          <div className="media-content ml-auto px-6">
            <p>
              <strong>Precio:</strong> ${price}
            </p>
            <p>
              <strong>Cantidad:</strong> {quantity}
            </p>
            <p className="has-text-white has-background-info">
              <strong className="has-text-white">Subtotal:</strong> $
              {(quantity * price).toFixed(2)}
            </p>
          </div>

          {/* Columna 4: Botón Quitar */}
          <div className="media-content">
            <button
              className="button is-danger is-small"
              onClick={() => handleOnClick(id)}
            >
              Quitar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
