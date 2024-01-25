import ItemList from "../ItemList/ItemList";

const ItemListContainer = ({ greeting }) => {
    return (
        <div>
            <h3 className="title is-4 has-text-centered mt-5">{greeting}</h3>
            <ItemList />
        </div>
    )
}

export default ItemListContainer;