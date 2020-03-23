import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { removeFromCart } from '../../redux-store/cart/cart.actions';

import './cart-item.scss';

const CartItem = ({ item, classes, removeFromCart }) => {
  const { name, price, imageUrl, quantity } = item;
  return (
    <div className={classes}>
      <img src={imageUrl} alt='item' />
      <div className='item-details'>
        <span className='name'>{name}</span>
        <div className='qty-price'>
          <span className='quantity'>{quantity}</span>
          <span className='cross'>X</span>
          <span className='price'>${price}</span>
        </div>
      </div>
      <div className='remove-button' onClick={() => removeFromCart(item)}>
        &#10005;
      </div>
    </div>
  );
};

CartItem.propTypes = {
  item: PropTypes.object,
  classes: PropTypes.string,
  removeFromCart: PropTypes.func
};

export default connect(null, { removeFromCart })(CartItem);
