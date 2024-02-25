import React, { useState, createContext, useEffect } from "react";

export const CartContext = createContext({
  cart: [],
});

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [totalQuantity, setTotalQuantity] = useState(0);

  useEffect(() => {
    getTotal();
    getItemsQuantity();
  }, [cart]);

  const addItem = (item, quantity) => {
    if (!itemAlreadyExists(item.id)) {
      setCart((prev) => [...prev, { ...item, quantity }]);
    } else {
      const existentItem = cart.find((p) => p.id === item.id);
      existentItem.quantity += quantity;
      setCart(cart);
    }
  };

  const deleteItem = (itemId) => {
    const updatedCart = cart.filter((p) => p.id != itemId);
    setCart(updatedCart);
  };

  const clearCart = () => {
    setCart([]);
  };

  const getTotal = () => {
    const initialValue = 0;
    const total = cart.reduce(
      (accumulator, currentValue) =>
        accumulator + currentValue.price * currentValue.quantity,
      initialValue
    );
    setTotal(Number.parseFloat(total).toFixed(2));
  };

  const getItemsQuantity = () => {
    const initialValue = 0;
    const totalItems = cart.reduce(
      (accumulator, currentValue) => accumulator + currentValue.quantity,
      initialValue
    );
    setTotalQuantity(totalItems);
  };

  const getItemAddedQuantity = (id) => {
    if (itemAlreadyExists(id)) {
      return cart.find((p) => p.id === id).quantity;
    }
    return 0;
  };

  const itemAlreadyExists = (id) => {
    return cart.some((p) => p.id === id);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        totalQuantity,
        total,
        addItem,
        deleteItem,
        clearCart,
        getItemAddedQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
