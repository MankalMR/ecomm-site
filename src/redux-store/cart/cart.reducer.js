import { CartActionTypes } from './cart.types';
import { addToCart } from './cart.utils';

const INITIAL_STATE = {
  showMiniCart: false,
  cartItems: []
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_MINI_CART:
      return {
        ...state,
        showMiniCart: !state.showMiniCart
      };
    case CartActionTypes.ADD_TO_CART:
      return {
        ...state,
        cartItems: addToCart(state.cartItems, action.payload)
      };
    default:
      return state;
  }
};

export default cartReducer;