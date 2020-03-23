import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { ReactComponent as CartIconLogo } from "../../assets/cart.svg";
import { toggleMiniCart } from "../../redux-store/cart/cart.actions";

import "./cart-icon.scss";

const CartIcon = ({ toggleMiniCart }) => (
  <div className="cart-icon" onClick={toggleMiniCart}>
    <CartIconLogo className="cart-icon-logo" />
    <div className="item-count">0</div>
  </div>
);

CartIcon.propTypes = {
  toggleMiniCart: PropTypes.func
};

export default connect(null, { toggleMiniCart })(CartIcon);
