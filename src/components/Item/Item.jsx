import React from "react";
import ItemCount from "../ItemCount/ItemCount";
import "./Item.css";

const Item = ({ id, title, image, stock }) => {
  return (
    <div className="column is-one-third myItem">
      <div className="card card-equal-height mb-4">
        <div className="card-image">
          <figure className="image is-square">
            <img src={image} alt={title} />
          </figure>
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <p className="title is-4">{title}</p>
            </div>
          </div>
        </div>
        <div className="is-flex is-align-items-center is-justify-content-center">
          <p>Stock: {stock}</p>
        </div>
        <div className="is-flex is-align-items-center is-justify-content-center">
          <button className="button is-info">Ver detalle</button>
        </div>
      </div>
    </div>
  );
};

export default Item;
