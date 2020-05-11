import { get as axiosGet } from "axios";
import { setProductList } from "../Actions/products";

export const getProducts = (dispatch) => () =>
  axiosGet(`${process.env.REACT_APP_BASE_URL}/products`).then((res) => {
    return dispatch(setProductList(res.data));
  });
