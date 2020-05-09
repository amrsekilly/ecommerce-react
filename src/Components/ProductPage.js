import React, { Component } from "react";
import Loader from "react-loader-spinner";
import { get as axiosGet } from "axios";

export class ProductPage extends Component {
  state = {
    name: "",
    price: "",
    isLoaded: false,
  };
  componentDidMount() {
    let pathname = window.location.pathname.substr(1).split("/")[1];
    axiosGet(`${process.env.REACT_APP_BASE_URL}/products/${pathname}`).then(
      ({ data: { name, price } }) =>
        this.setState({
          name,
          price,
          isLoaded: true,
        })
    );
  }

  render() {
    const { name, price, isLoaded } = this.state;
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
}
