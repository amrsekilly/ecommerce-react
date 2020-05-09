import React, { Component } from "react";
import { Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export class Product extends Component {
  render() {
    return (
      <Col xs={4} className="product">
        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title>{this.props.product.name}</Card.Title>
            <Card.Text>Price: ${this.props.product.price}</Card.Text>

            <Button variant="primary" onClick={this.props.handleClick}>
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
