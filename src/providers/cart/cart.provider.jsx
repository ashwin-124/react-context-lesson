import React, { createContext, useState } from 'react';

export const CartContext = createContext({
  hidden: true,
  toggleHidden: () => {},
});

const CartProvider = ({ children }) => {
  const [hidden, setHidden] = useState(true);
  const toggleHidden = () => setHidden(!hidden);

  return (
    <CartContext.Provider
      value={{
        hidden,
        toggleHidden,
      }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
