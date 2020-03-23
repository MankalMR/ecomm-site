import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Button from '../button/button';
import CartItem from '../cart-item/cart-item';

import './mini-cart.scss';

const renderCartItems = cartItems =>
  cartItems.map(item => <CartItem key={item.id} item={item} />);

const MiniCart = ({ cartItems }) => (
  <div className={cartItems.length ? 'mini-cart' : 'mini-cart empty-cart'}>
    <div className='cart-items'>
      {renderCartItems(cartItems)}
      <span className='empty-message'>Your Cart is Empty</span>
    </div>
    <Button>Checkout</Button>
  </div>
);

const mapStateToProps = ({ cart: { cartItems } }) => ({
  cartItems
});

MiniCart.propTypes = {
  cartItems: PropTypes.array
};

export default connect(mapStateToProps)(MiniCart);
