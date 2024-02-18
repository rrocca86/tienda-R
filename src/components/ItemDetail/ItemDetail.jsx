import { React, useState, useContext } from "react";
import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.css";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

const ItemDetail = ({ id, image, title, description, price, stock }) => {
  const [quantity, setQuantity] = useState(0);
  const { addItem } = useContext(CartContext);

  const handleOnAdd = (newQuantity) => {
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
                        <Link to="/cart" className="button is-info">
                          Ir al carrito
                        </Link>
                      ) : (
                        <ItemCount
                          stock={stock}
                          initial={1}
                          onAdd={handleOnAdd}
                        />
                      )}
                    </div>
                    <div className="is-flex mt-5">
                      <Link className="button is-info mt-5" to={"/"}>
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
