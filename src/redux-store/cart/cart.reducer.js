import { CartActionTypes } from "./cart.types";

const INITIAL_STATE = {
  showMiniCart: false
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_MINI_CART:
      return {
        ...state,
        showMiniCart: !state.showMiniCart
      };
    default:
      return state;
  }
};

export default cartReducer;
