import { React, useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { getItemById } from "../../../public/data";

const ItemDetailContainer = ({ id }) => {
  const [item, setItem] = useState(null);

  useEffect(() => {
    const fetchItem = async () => {
      try {
        console.log("Trying to get the item");
        const itemData = await getItemById(id);
        setItem(itemData);
      } catch (error) {
        console.error("Error fetching item", error);
      }
    };

    fetchItem();
  }, []);
  return (
    <>
      <ItemDetail item={item} />
    </>
  );
};

export default ItemDetailContainer;
