import React from "react";
import Item from "../Item/Item";
import "./ItemList.css";

const ItemList = ({ items }) => {
  return (
    <>
      <div className="container">
        <div className="columns is-multiline">
          {items.map((p) => (
            <Item key={p.id} {...p} />
          ))}
        </div>
      </div>
    </>
  );
};

export default ItemList;
