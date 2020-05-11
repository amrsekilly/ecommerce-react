import {
  GET_PRODUCTS,
  SET_PRODUCT_LIST,
  ADD_PRODUCT_TO_PRODUCT_LIST,
} from "../Actions/products";

const initialState = {
  productList: [],
  selectedProduct: null,
};

// Pure function
export const products = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return state;
    case SET_PRODUCT_LIST:
      return {
        ...state,
        productList: action.payload,
      };
    case ADD_PRODUCT_TO_PRODUCT_LIST:
      return {
        ...state,
        productList: [...state.productList, action.payload],
      };
    default:
      return state;
  }
};
