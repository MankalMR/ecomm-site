import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import {
  removeFromCart,
  addToCart,
  clearFromCart
} from '../../redux-store/cart/cart.actions';

import './cart-item.scss';

const CartItem = ({
  item,
  classes,
  addToCart,
  removeFromCart,
  clearFromCart
}) => {
  const { name, price, imageUrl, quantity } = item;
  return (
    <div className={classes}>
      <img src={imageUrl} alt='item' />
      <div className='item-details'>
        <span className='name'>{name}</span>
        <div className='qty-price'>
          <div className='qty-grp'>
            <span className='arrow' onClick={() => removeFromCart(item)}>
              &#10094;
            </span>
            <span className='value'>{quantity}</span>
            <span className='arrow' onClick={() => addToCart(item)}>
              &#10095;
            </span>
          </div>
          <span className='cross'>X</span>
          <span className='price'>${price}</span>
        </div>
      </div>
      <div className='remove-button' onClick={() => clearFromCart(item)}>
        &#10005;
      </div>
    </div>
  );
};

CartItem.propTypes = {
  item: PropTypes.object,
  classes: PropTypes.string,
  addToCart: PropTypes.func,
  removeFromCart: PropTypes.func,
  clearFromCart: PropTypes.func
};

export default connect(null, { addToCart, removeFromCart, clearFromCart })(
  CartItem
);
