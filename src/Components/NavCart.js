import React, { Component } from "react";
import { connect } from "react-redux";

class UnwrappedNavCart extends Component {
  render() {
    return <span>Count: {this.props.count}</span>;
  }
}

const mapStateToProps = (state) => ({
  count: state.shoppingCart.count,
});

export const NavCart = connect(mapStateToProps)(UnwrappedNavCart);
