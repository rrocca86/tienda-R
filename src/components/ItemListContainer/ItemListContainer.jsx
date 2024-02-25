import ItemList from "../ItemList/ItemList";
import { useLoading, Grid } from "@agney/react-loading";
import { React, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";

const ItemListContainer = ({ greeting }) => {
  const [items, setItems] = useState([]);
  const { categoryId } = useParams();

  const { containerProps, indicatorEl } = useLoading({
    loading: true,
    indicator: <Grid width="50" />,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const db = getFirestore();
        const itemsCollection = collection(db, "products");
        let snapshot = null;

        if (!categoryId) {
          snapshot = await getDocs(itemsCollection);
        } else {
          const categoryItemsQuery = query(
            itemsCollection,
            where("categoryId", "==", categoryId)
          );
          snapshot = await getDocs(categoryItemsQuery);
        }

        if (snapshot.size > 0) {
          setItems(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
        } else {
          setItems(null);
        }
      } catch (error) {
        console.error("Error fetching items", error);
      }
    };

    fetchData();
  }, [categoryId]);

  return (
    <div>
      <h3 className="title is-4 has-text-centered mt-5">{greeting}</h3>
      {items == null ? (
        <h1>No hay items para mostrar</h1>
      ) : items.length == 0 ? (
        <section {...containerProps}>
          {indicatorEl}
          <h1>Cargando</h1>
        </section>
      ) : (
        <ItemList items={items} />
      )}
    </div>
  );
};

export default ItemListContainer;
