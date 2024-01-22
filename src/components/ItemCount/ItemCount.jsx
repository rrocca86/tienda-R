import React from 'react'
import { useState } from 'react'
import "./ItemCount.css"

const ItemCount = ({ stock, initial, onAdd }) => {
    const [counter, setCounter] = useState(initial)

    const handleOnClick = (e) => {

        switch (e) {
            case "-":
                if (counter > 0) {
                    setCounter(counter - 1);
                }
                break;
            case "+":
                if (counter < stock) {
                    setCounter(counter + 1);
                }
                break;
            default:
                onAdd(counter);
        }
    }

    return (
        <>
            <div className='counter'>
                <button className='button' onClick={() => handleOnClick("-")}>-</button>
                <h3 className="has-text-dark">{counter}</h3>
                <button className='button' onClick={() => handleOnClick("+")}>+</button>
            </div>
            <div className='counter'>
                <button className='button' onClick={() => handleOnClick("addToCart")}>Agregar al carrito</button>
            </div>
        </>
    )
}

export default ItemCount