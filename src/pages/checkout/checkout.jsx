import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import CartItem from '../../components/cart-item/cart-item';
import StripeCheckoutButton from '../../components/stripe-checkout-button/stripe-checkout-button';

import './checkout.scss';

const Checkout = ({ cartItems, total }) => {
  return (
    <div className='checkout'>
      <div className='checkout-header'>
        <div className='header-block'>
          <span>Product</span>
        </div>
        <div className='header-block'>
          <span>Description</span>
        </div>
        <div className='header-block'>
          <span>Quantity</span>
        </div>
        <div className='header-block'>
          <span>Price</span>
        </div>
        <div className='header-block'>
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map(cartItem => (
        <CartItem key={cartItem.id} item={cartItem} classes='checkout-item' />
      ))}
      <div className='total'>TOTAL: ${total}</div>
      <div className='test-warning'>
        *Please use the following test credit card for payments*
        <br />
        4242 4242 4242 4242 - Exp: 01/20 - CVV: 123
      </div>
      <StripeCheckoutButton price={total} />
    </div>
  );
};

const mapStateToProps = ({ cart: { cartItems } }) => ({
  cartItems,
  total: cartItems.reduce(
    (total, currentCartItem) =>
      total + currentCartItem.price * currentCartItem.quantity,
    0
  )
});

Checkout.propTypes = {
  cartItems: PropTypes.array,
  total: PropTypes.number
};

export default connect(mapStateToProps)(Checkout);
