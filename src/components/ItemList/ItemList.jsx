import { React, useState, useEffect } from 'react'
import Item from '../Item/Item'
import "./ItemList.css"
import { getItems } from "../../../public/data";

const ItemList = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                console.log("Trying to get items")
                const itemsData = await getItems();
                setItems(itemsData);
            } catch (error) {
                console.error('Error fetching items', error);
            }
        };

        fetchData();
    }, []);

    return (
        <>
            <div className='container'>
                {items.length == 0
                    ?
                    <h1>CARGANDO..</h1>
                    :
                    <div className="columns is-multiline">
                        {items.map((p) => <Item key={p.id} {...p} />)}
                    </div>
                }
            </div>
        </>
    )
}

export default ItemList