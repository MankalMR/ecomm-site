import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Button from '../button/button';
import CartItem from '../cart-item/cart-item';

import './mini-cart.scss';

const renderCartItems = cartItems =>
  cartItems.map(item => <CartItem key={item.id} item={item} classes='cart-item' />);

const MiniCart = ({ cartItems, history }) => (
  <div className={cartItems.length ? 'mini-cart' : 'mini-cart empty-cart'}>
    <div className='cart-items'>
      {renderCartItems(cartItems)}
      <span className='empty-message'>Your Cart is Empty</span>
    </div>
    <Button onClick={() => history.push('/checkout')}>Checkout</Button>
  </div>
);

const mapStateToProps = ({ cart: { cartItems } }) => ({
  cartItems
});

MiniCart.propTypes = {
  cartItems: PropTypes.array,
  history: PropTypes.object
};

export default withRouter(connect(mapStateToProps)(MiniCart));
