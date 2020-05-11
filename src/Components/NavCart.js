import React, { Component } from "react";
import { connect } from "react-redux";

class UnwrappedNavCart extends Component {
  render() {
    return <span>Count: {this.props.count}</span>;
  }
}

const mapStateToProps = ({ shoppingCart: { count } }) => ({
  count,
});

export const NavCart = connect(mapStateToProps)(UnwrappedNavCart);
