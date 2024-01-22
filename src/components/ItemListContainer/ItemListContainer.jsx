import ItemCount from "../ItemCount/ItemCount";

const ItemListContainer = ({ greeting }) => {

    return (
        <div>
            <h3 className="title is-4 has-text-centered mt-5">{greeting}</h3>
            <ItemCount stock={5} initial={0} />
        </div>
    )

}

export default ItemListContainer;