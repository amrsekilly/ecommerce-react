import React, { Component } from "react";
import { Col, Card, Button } from "react-bootstrap";
import { connect } from "react-redux"; // HOC - Higher Order Component
import { Link } from "react-router-dom";
import { increaseCount } from "../Store/Actions/shoppingCart";

class UnwrappedProduct extends Component {
  render() {
    return (
      <Col xs={4} className="product">
        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title>{this.props.product.name}</Card.Title>
            <Card.Text>Price: ${this.props.product.price}</Card.Text>

            <Button variant="primary" onClick={this.props.increaseCount}>
              Add to Cart
            </Button>
            <Link to={`/products/${this.props.product.id}`}>
              <Button variant="success" className="btn view-button">
                View Product
              </Button>
            </Link>
          </Card.Body>
        </Card>
      </Col>
    );
  }
}

const mapDispatchToProps = {
  increaseCount,
};

export const Product = connect(null, mapDispatchToProps)(UnwrappedProduct);
