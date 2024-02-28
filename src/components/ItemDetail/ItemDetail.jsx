import { React, useState, useContext } from "react";
import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.css";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import Bulma from "@vizuaalog/bulmajs";

const ItemDetail = ({ id, image, title, description, price, stock }) => {
  const [quantity, setQuantity] = useState(0);
  const { addItem, getItemAddedQuantity } = useContext(CartContext);

  const handleOnAdd = (newQuantity) => {
    const addedQuantity = getItemAddedQuantity(id);

    if (addedQuantity + newQuantity > stock) {
      Bulma().alert({
        type: "danger",
        title: "Oh oh!",
        body: "La cantidad agregada supera el stock del producto.",
        confirm: {
          label: "Ok",
          classes: ["is-primary", "is-rounded", "is-small"],
        },
      });

      return;
    }

    setQuantity(newQuantity);
    const item = {
      id,
      title,
      price,
      image,
    };
    addItem(item, newQuantity);
  };

  return (
    <>
      {title == null ? (
        <p>No se ha cargado el item</p>
      ) : (
        <div className="card">
          <div className="card-content">
            <div className="columns">
              <div className="column is-one-third">
                <div className="box">
                  <figure>
                    <img src={image} alt={title} height={350} width={350} />
                  </figure>
                </div>
              </div>
              <div className="column">
                <div className="media">
                  <div className="media-left">
                    <p className="title is-4">{title}</p>
                  </div>
                </div>
                <div className="content">
                  <div className="media-left">
                    <p>{description}</p>
                    <p className="title is-4">${price}</p>
                    <div className="is-flex">
                      <p>Stock: {stock}</p>
                    </div>
                    <div className="is-flex ">
                      {quantity > 0 ? (
                        <Link
                          to="/cart"
                          className="button is-info is-small mt-5"
                        >
                          Ir al carrito
                        </Link>
                      ) : stock > 0 ? (
                        <ItemCount
                          stock={stock}
                          initial={1}
                          onAdd={handleOnAdd}
                        />
                      ) : (
                        <p>
                          <strong>Producto agotado</strong>
                        </p>
                      )}
                    </div>
                    <div className="is-flex">
                      <Link className="button is-info is-small mt-5" to={"/"}>
                        Volver
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ItemDetail;
