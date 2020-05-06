import React, { Component } from "react";
import { Product } from "./Product.js";

export class ProductsList extends Component {
  render() {
    return (
      <div className="products">
        {this.props.products.map((product) => (
          <Product
            key={product.id}
            handleClick={this.props.handleClick}
            product={product}
            handleProductClick={this.props.handleProductClick}
          />
        ))}
      </div>
    );
  }
}
