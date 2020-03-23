import React from "react";

import Button from "../button/button";

import "./mini-cart.scss";

const MiniCart = () => (
  <div className="mini-cart">
    <div className="cart-items" />
    <Button>Checkout</Button>
  </div>
);

export default MiniCart;
