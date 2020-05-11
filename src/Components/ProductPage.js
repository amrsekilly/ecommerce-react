import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "react-loader-spinner";
import { getProduct } from "../Store/Requests/products";

export function ProductPage() {
  const dispatch = useDispatch();

  const isLoaded = useSelector((state) => state.products.isLoaded);
  const name = useSelector(
    (state) =>
      state.products.selectedProduct && state.products.selectedProduct.name
  );
  const price = useSelector(
    (state) =>
      state.products.selectedProduct && state.products.selectedProduct.price
  );

  // Similar to ComponentDidMount
  useEffect(function () {
    const id = window.location.pathname.substr(1).split("/")[1];
    dispatch(getProduct(dispatch, id));
  }, []);

  if (isLoaded) {
    return (
      <div>
        <h1>Product: {name}</h1>
        <b>Price: ${price}</b>
      </div>
    );
  }
  return (
    <div style={{ display: "block", margin: "auto" }}>
      <Loader type="ThreeDots" color="#00BFFF" height={80} width={80} />
    </div>
  );
}
