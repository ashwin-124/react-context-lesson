import React, { createContext, useEffect, useState } from 'react';

import {
  addItemToCart,
  removeItemFromCart,
  filterItemFromCart,
  getCartItemsCount,
  getCartTotal,
} from './cart.utils';

export const CartContext = createContext({
  hidden: true,
  toggleHidden: () => {},
  items: [],
  addItem: () => {},
  removeItem: () => {},
  clearItem: () => {},
  itemsCount: 0,
  total: 0,
});

const CartProvider = ({ children }) => {
  const [hidden, setHidden] = useState(true);
  const [items, setItems] = useState([]);
  const [itemsCount, setItemsCount] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setItemsCount(getCartItemsCount(items));
    setTotal(getCartTotal(items));
  }, [items]);

  const toggleHidden = () => setHidden(!hidden);
  const addItem = item => setItems(addItemToCart(items, item));
  const removeItem = item => setItems(removeItemFromCart(items, item));
  const clearItem = item => setItems(filterItemFromCart(items, item));

  return (
    <CartContext.Provider
      value={{
        hidden,
        toggleHidden,
        items,
        addItem,
        removeItem,
        clearItem,
        itemsCount,
        total,
      }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
