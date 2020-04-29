import React from "react";
import products from "../Data/products.json";
import { ProductsList } from "./ProductsList.js";
import { Cart } from "./Cart";

// Renders all products to the screen
export class Home extends React.Component {
  state = {
    count: 0,
  };

  increaseCount = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  render() {
    return (
      <div className="home">
        <ProductsList handleClick={this.increaseCount} products={products} />
        <Cart count={this.state.count} />
      </div>
    );
  }
}
