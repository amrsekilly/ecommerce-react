import { ADD_PRODUCT_TO_CART } from "../Actions/shoppingCart";

const initialState = {
  count: 0,
  cartItems: [],
};

export const shoppingCart = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT_TO_CART:
      return {
        ...state,
        count: state.count + 1,
        cartItems: [...state.cartItems, action.payload],
      };

    default:
      return state;
  }
};
