import React, { Component } from "react";
import { connect } from "react-redux";
import { submitProduct } from "../Store/Requests/products";

export class UnwrappedAddProduct extends Component {
  state = {
    name: "",
    price: "",
  };

  handlePriceChange = (e) => {
    this.setState({
      price: e.target.value,
    });
  };

  handleNameChange = (e) => {
    this.setState({
      name: e.target.value,
    });
  };

  render() {
    return (
      <div className="create-product">
        <label>
          Product Name:
          {/* Controlled vs uncontrolled input fields */}
          {/* this is an controlled input field */}
          <input
            type="text"
            onChange={this.handleNameChange}
            placeholder="Product Name"
            value={this.state.name}
          />
        </label>
        <label>
          Price:{" "}
          <input
            type="text"
            onChange={this.handlePriceChange}
            value={this.state.price}
            placeholder="Price"
          />
        </label>
        <button
          onClick={() =>
            this.props.submitProduct(this.state.name, this.state.price)
          }
        >
          Submit Product
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  submitProduct: (name, price) =>
    dispatch(submitProduct(dispatch, name, price)),
});

export const AddProduct = connect(
  null,
  mapDispatchToProps
)(UnwrappedAddProduct);
