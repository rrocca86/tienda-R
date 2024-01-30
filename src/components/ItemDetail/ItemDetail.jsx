import React from "react";
import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.css";

const ItemDetail = ({ item }) => {
  return (
    <>
      {item == null ? (
        <p>No se ha cargado el item</p>
      ) : (
        <div className="card">
          <div className="card-content">
            <div className="columns">
              <div className="column is-third">
                <div className="card-image">
                  <figure className="image is-square">
                    <img src={item.image} alt={item.title} />
                  </figure>
                </div>
              </div>
              <div className="column">
                <div className="media">
                  <div className="media-left">
                    <p className="title is-4">{item.title}</p>
                  </div>
                </div>
                <div className="content">
                  <div className="media-left">
                    <p>{item.description}</p>
                    <p className="title is-4">${item.price}</p>
                    <div className="is-flex">
                      <p>Stock: {item.stock}</p>
                    </div>
                    <div className="is-flex ">
                      <ItemCount stock={item.stock} initial={1} onAdd={null} />
                    </div>
                  </div>
                  <button className="button is-info mt-5" to={"/"}>
                    Volver
                  </button>
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
