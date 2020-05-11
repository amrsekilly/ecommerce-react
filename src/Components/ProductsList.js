import React, { Component } from "react";
import { connect } from "react-redux";
import { Container, Row } from "react-bootstrap";
import { Product } from "./Product.js";
import { getProducts } from "../Store/Requests/products";

export class UnwrappedProductsList extends Component {
  componentDidMount() {
    this.props.getProducts();
  }

  render() {
    const { productList } = this.props;
    return (
      <Container className="products">
        <Row>
          {!!productList.length &&
            productList.map((product) => (
              <Product key={product.id} product={product} />
            ))}
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = ({ products: { productList } }) => ({
  productList,
});

const mapDispatchToProps = (dispatch) => {
  return {
    getProducts: () => dispatch(getProducts(dispatch)),
  };
};

export const ProductsList = connect(
  mapStateToProps,
  mapDispatchToProps
)(UnwrappedProductsList);
