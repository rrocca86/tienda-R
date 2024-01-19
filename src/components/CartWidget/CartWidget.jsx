import React from 'react'
import cart from "./assets/cart-shopping-solid.svg"
import "./CartWidget.css"

const CartWidget = () => {
    return (
        <div className="navbar-item">
            <img src={cart} alt="" height="30" width="30" /> <p>0</p>
        </div>

    )
}

export default CartWidget