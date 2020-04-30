import React from "react";
import axios from "axios";
import { ProductsList } from "./ProductsList.js";
import { AddProduct } from "./AddProduct";
import { Cart } from "./Cart";

// Renders all products to the screen
export class Home extends React.Component {
  componentDidMount() {
    this.getProducts();
  }

  state = {
    count: 0,
    products: [],
  };

  getProducts = () => {
    axios
      .get("http://localhost:4000/products")
      .then((backendResponse) =>
        this.setState({ products: backendResponse.data })
      );
  };

  increaseCount = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  render() {
    return (
      <div className="home">
        <AddProduct />
        <ProductsList
          handleClick={this.increaseCount}
          products={this.state.products}
        />
        <Cart count={this.state.count} />
      </div>
    );
  }
}
