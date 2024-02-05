import { React, useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { getItemById } from "../../../public/data";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);
  const { itemId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("Trying to get the item");
        const itemData = await getItemById(itemId);
        if (itemData) {
          setItem(itemData);
        }
      } catch (error) {
        console.error("Error fetching item", error);
      }
    };

    fetchData();
  }, [itemId]);

  return (
    <>
      <ItemDetail {...item} />
    </>
  );
};

export default ItemDetailContainer;
