import ItemList from "../ItemList/ItemList";
import { getItems, getItemsByCategory } from "../../../public/data";
import { useLoading, Grid } from "@agney/react-loading";
import { React, useState, useEffect } from "react";
import { useParams } from "react-router-dom";

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
        const itemsData = categoryId
          ? await getItemsByCategory(categoryId)
          : await getItems();
        setItems(itemsData);
      } catch (error) {
        console.error("Error fetching items", error);
      }
    };

    fetchData();
  }, [categoryId]);

  return (
    <div>
      <h3 className="title is-4 has-text-centered mt-5">{greeting}</h3>
      {items.length == 0 ? (
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
