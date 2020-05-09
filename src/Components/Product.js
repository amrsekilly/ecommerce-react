import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Product extends Component {
  render() {
    return (
      <div className="product">
        <h1>{this.props.product.name}</h1>
        <div>
          <img className="product-image" src={this.props.product.image} />
        </div>
        <b>Price: ${this.props.product.price}</b>
        <div className="btn-container">
          <button onClick={this.props.handleClick} className="btn">
            Add to Cart
          </button>
          <Link to={`/products/${this.props.product.id}`}>
            <button className="btn view-button">View Product</button>
          </Link>
        </div>
      </div>
    );
  }
}
