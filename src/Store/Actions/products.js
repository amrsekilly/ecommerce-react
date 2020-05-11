export const GET_PRODUCTS = "GET_PRODUCTS";
export const SET_PRODUCT = "SET_PRODUCT";
export const SET_PRODUCT_LIST = "SET_PRODUCT_LIST";
export const ADD_PRODUCT_TO_PRODUCT_LIST = "ADD_PRODUCT_TO_PRODUCT_LIST";

export const getProducts = () => ({
  type: GET_PRODUCTS,
});

export const setProduct = (payload) => ({
  type: SET_PRODUCT,
  payload,
});

export const setProductList = (payload) => ({
  type: SET_PRODUCT_LIST,
  payload,
});

export const addProductToProductList = (payload) => ({
  type: ADD_PRODUCT_TO_PRODUCT_LIST,
  payload,
});
