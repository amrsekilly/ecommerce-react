import { combineReducers } from "redux";
import { shoppingCart } from "./shoppingCart";
import { products } from "./products";

const rootReducer = combineReducers({
  shoppingCart,
  products,
});

export default rootReducer;
