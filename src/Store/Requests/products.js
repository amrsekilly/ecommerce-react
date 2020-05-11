import { get as axiosGet, post as axiosPost } from "axios";
import {
  setProductList,
  addProductToProductList,
  setProduct,
} from "../Actions/products";

export const getProducts = (dispatch) => () =>
  axiosGet(`${process.env.REACT_APP_BASE_URL}/products`).then((res) => {
    return dispatch(setProductList(res.data));
  });

export const getProduct = (dispatch, id) => () =>
  axiosGet(`${process.env.REACT_APP_BASE_URL}/products/${id}`).then((res) => {
    return dispatch(setProduct(res.data));
  });

export const submitProduct = (dispatch, name, price) => () => {
  return axiosPost(`${process.env.REACT_APP_BASE_URL}/products`, {
    name,
    price,
  }).then((res) => dispatch(addProductToProductList(res.data)));
};
