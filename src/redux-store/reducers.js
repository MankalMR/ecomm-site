import { combineReducers } from 'redux';

import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';
import categoryReducer from './category/category.reducer';
import productsReducer from './products/products.reducer'

export default combineReducers({
  user: userReducer,
  cart: cartReducer,
  categories: categoryReducer,
  products: productsReducer
});
