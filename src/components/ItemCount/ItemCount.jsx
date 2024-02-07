import React from "react";
import { useState } from "react";
import "./ItemCount.css";

const ItemCount = ({ stock, initial, onAdd }) => {
  const [counter, setCounter] = useState(initial);

  const handleOnClick = (e) => {
    switch (e) {
      case "-":
        if (counter > 1) {
          setCounter(counter - 1);
        }
        break;
      case "+":
        if (counter < stock) {
          setCounter(counter + 1);
        }
        break;
      default:
        onAdd(counter);
    }
  };

  return (
    <>
      <div>
        <div className="counter">
          <button
            className="button is-info is-small mb-3"
            onClick={() => handleOnClick("-")}
          >
            -
          </button>
          <h3 className="has-text-dark">{counter}</h3>
          <button
            className="button is-info is-small mb-3"
            onClick={() => handleOnClick("+")}
          >
            +
          </button>
          <button
            className="button is-info is-small mb-3"
            onClick={() => handleOnClick("addToCart")}
            disabled={!stock}
          >
            Agregar al carrito
          </button>
        </div>
      </div>
    </>
  );
};

export default ItemCount;
