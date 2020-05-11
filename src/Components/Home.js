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
  render() {
    return (
      <Router>
        <div>
          <NavbarComponent>
            <NavCart />
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
                <Cart />
              </Route>
              <Route path="/">
                <ProductsList />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}
