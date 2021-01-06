import React from 'react';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import './cart-icon.styles.scss';

import { CartContext } from '../../providers/cart/cart.provider';

const CartIcon = () => (
  <CartContext.Consumer>
    {({ toggleHidden, itemsCount }) => (
      <div className='cart-icon' onClick={toggleHidden}>
        <ShoppingIcon className='shopping-icon' />
        <span className='item-count'>{itemsCount}</span>
      </div>
    )}
  </CartContext.Consumer>
);

export default CartIcon;
