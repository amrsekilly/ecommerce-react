import React, { useState, useEffect } from "react";
import Loader from "react-loader-spinner";
import { get as axiosGet } from "axios";

export function ProductPage() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    let pathname = window.location.pathname.substr(1).split("/")[1];
    axiosGet(`${process.env.REACT_APP_BASE_URL}/products/${pathname}`).then(
      ({ data: { name, price } }) => {
        setName(name);
        setPrice(price);
        setIsLoaded(true);
      }
    );
  });

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
