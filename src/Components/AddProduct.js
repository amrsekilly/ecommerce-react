import React, { Component } from "react";

export class AddProduct extends Component {
  render() {
    return (
      <div className="create-product">
        <label>
          Product Name:
          <input type="text" placeholder="Product Name" />
        </label>
        <label>
          Price: <input type="text" placeholder="Price" />
        </label>
        <button>Submit Product</button>
      </div>
    );
  }
}
