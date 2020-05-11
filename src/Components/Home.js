import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { get as axiosGet, post as axiosPost } from "axios";
import { ProductsList } from "./ProductsList.js";
import { AddProduct } from "./AddProduct";
import { ProductPage } from "./ProductPage";
import { Cart } from "./Cart";
import { NavbarComponent } from "./Navbar";
import { NavCart } from "./NavCart";

// Renders all products to the screen
export class Home extends React.Component {
  state = {
    count: 0,
  };

  render() {
    return (
      <Router>
        <div>
          <NavbarComponent>
            <NavCart count={this.state.count} />
          </NavbarComponent>

          <div className="home">
            <Switch>
              <Route path="/products/:id">
                <ProductPage />
              </Route>
              <Route path="/add-product">
                <AddProduct />
              </Route>
              <Route path="/cart">
                <Cart count={this.state.count} />
              </Route>
              <Route path="/">
                <ProductsList handleProductClick={this.handleProductClick} />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}
