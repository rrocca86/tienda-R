import React from "react";
import "./Item.css";
import { Link } from "react-router-dom";

const Item = ({ id, title, image, stock }) => {
  return (
    <div className="column is-one-third myItem">
      <div className="card card-equal-height mb-4">
        <div className="card-image">
          <Link to={`/item/${id}`}>
            <figure className="image is-square">
              <img src={image} alt={title} />
            </figure>
          </Link>
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <p className="title is-4">{title}</p>
            </div>
          </div>
        </div>
        <div className="is-flex is-align-items-center is-justify-content-center mb-2">
          <p>Stock: {stock}</p>
        </div>
        <div className="is-flex is-align-items-center is-justify-content-center">
          <Link className="button is-info mb-3" to={`/item/${id}`}>
            Ver detalle
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Item;
