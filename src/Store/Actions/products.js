export const GET_PRODUCTS = "GET_PRODUCTS";
export const SET_PRODUCT_LIST = "SET_PRODUCT_LIST";

export const getProducts = () => ({
  type: GET_PRODUCTS,
});

export const setProductList = (payload) => ({
  type: SET_PRODUCT_LIST,
  payload,
});
