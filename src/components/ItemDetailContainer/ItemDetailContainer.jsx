import { React, useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase/config";

const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);
  const { itemId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const docReference = doc(db, "products", itemId);
        getDoc(docReference).then((snapshot) => {
          if (snapshot.exists) {
            setItem({ id: snapshot.id, ...snapshot.data() });
          }
        });
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