import React, { useState, useEffect } from "react";
import Loader from "react-loader-spinner";
import { get as axiosGet } from "axios";

export function ProductPage() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);
  const [count, setCount] = useState(0);

  // Similar to ComponentDidMount
  useEffect(function () {
    let pathname = window.location.pathname.substr(1).split("/")[1];
    axiosGet(`${process.env.REACT_APP_BASE_URL}/products/${pathname}`).then(
      ({ data: { name, price } }) => {
        setName(name);
        setPrice(price);
        setIsLoaded(true);
      }
    );

    // ComponentWillUnmount
    return function () {
      console.log("Component will unmount");
    };
  }, []);

  if (isLoaded) {
    return (
      <div>
        <h1>Product: {name}</h1>
        <b>Price: ${price}</b>
        <p>Counter: {count}</p>
        <button onClick={() => setCount(count + 1)}>+1</button>
      </div>
    );
  }
  return (
    <div style={{ display: "block", margin: "auto" }}>
      <Loader type="ThreeDots" color="#00BFFF" height={80} width={80} />
    </div>
  );
}
