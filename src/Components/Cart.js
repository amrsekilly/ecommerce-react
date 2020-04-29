import React, { Component } from "react";

export class Cart extends Component {
  render() {
    return (
      <div className="cart">
        <h1>items</h1>
        <b>Count: {this.props.count}</b>
      </div>
    );
  }
}
