import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { auth } from "../../firebase/firebase.utils";

import { ReactComponent as Logo } from "../../assets/logo.svg";
import CartIcon from "../cart-icon/cart-icon";
import MiniCart from "../mini-cart/mini-cart";
import "./header.scss";

const logUserOff = event => {
  event.preventDefault();
  auth.signOut();
};

const Header = ({ currentUser, showMiniCart }) => (
  <div className="header">
    <Link className="logo-container" to="/">
      <Logo className="logo" />
    </Link>
    <div className="options">
      <Link className="option" to="/shop">
        SHOP
      </Link>
      <Link className="option" to="/contact">
        CONTACT
      </Link>
      {currentUser ? (
        <div
          className="option logoff"
          onClick={logUserOff}
          title={currentUser.displayName}
        >
          SIGN OUT
        </div>
      ) : (
        <Link className="option" to="/login">
          SIGN IN
        </Link>
      )}
      <CartIcon />
    </div>
    {showMiniCart ? <MiniCart /> : null}
  </div>
);

Header.propTypes = {
  currentUser: PropTypes.object,
  showMiniCart: PropTypes.bool
};

const mapStateToProps = ({
  user: { currentUser },
  cart: { showMiniCart }
}) => ({ currentUser, showMiniCart });

export default connect(mapStateToProps)(Header);
