import React, { Component } from "react";

export class AddProduct extends Component {
  render() {
    const {
      handleNameChange,
      handlePriceChange,
      handleSubmit,
      name,
      price,
    } = this.props;
    return (
      <div className="create-product">
        <label>
          Product Name:
          {/* Controlled vs uncontrolled input fields */}
          {/* this is an controlled input field */}
          <input
            type="text"
            onChange={handleNameChange}
            placeholder="Product Name"
            value={name}
          />
        </label>
        <label>
          Price:{" "}
          <input
            type="text"
            onChange={handlePriceChange}
            value={price}
            placeholder="Price"
          />
        </label>
        <button onClick={handleSubmit}>Submit Product</button>
      </div>
    );
  }
}
