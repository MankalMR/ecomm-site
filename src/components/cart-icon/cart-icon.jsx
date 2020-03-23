import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { ReactComponent as CartIconLogo } from '../../assets/cart.svg';
import { toggleMiniCart } from '../../redux-store/cart/cart.actions';

import './cart-icon.scss';

const CartIcon = ({ toggleMiniCart, itemCount }) => (
  <div className='cart-icon' onClick={toggleMiniCart}>
    <CartIconLogo className='cart-icon-logo' />
    <div className='item-count'>{itemCount}</div>
  </div>
);

const mapStateToProps = ({ cart: { cartItems } }) => ({
  itemCount: cartItems.reduce(
    (total, currCartItem) => total + currCartItem.quantity,
    0
  )
});

CartIcon.propTypes = {
  toggleMiniCart: PropTypes.func,
  itemCount: PropTypes.number
};

export default connect(mapStateToProps, { toggleMiniCart })(CartIcon);
