import React, { Component } from "react";
import { Container, Row } from "react-bootstrap";
import { Product } from "./Product.js";

export class ProductsList extends Component {
  render() {
    return (
      <Container className="products">
        <Row>
          {this.props.products.map((product) => (
            <Product
              key={product.id}
              handleClick={this.props.handleClick}
              product={product}
            />
          ))}
        </Row>
      </Container>
    );
  }
}
