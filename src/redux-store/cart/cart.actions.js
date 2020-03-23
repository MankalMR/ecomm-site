import { CartActionTypes } from './cart.types';

export const toggleMiniCart = () => ({
  type: CartActionTypes.TOGGLE_MINI_CART
});

export const addToCart = item => ({
  type: CartActionTypes.ADD_TO_CART,
  payload: item
});
