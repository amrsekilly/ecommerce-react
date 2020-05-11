import React from "react";
import { useSelector } from "react-redux";

const renderCartItem = (item) => (
  <React.Fragment>
    <h3>
      {item.name} <b>Qty: {item.count}</b> <b>Price: ${item.price}</b>
    </h3>
    <hr />
  </React.Fragment>
);

export function Cart() {
  const cartItems = useSelector((state) => state.shoppingCart.cartItems);

  let computedCartItems = cartItems.map((item) => {
    const count = cartItems.reduce(
      (counter, { id }) => (id == item.id ? counter + 1 : counter),
      0
    );
    return { ...item, count };
  });

  const result = [];
  const map = new Map();
  for (const item of computedCartItems) {
    if (!map.has(item.id)) {
      map.set(item.id, true); // set any value to Map
      result.push({
        id: item.id,
        name: item.name,
        price: item.price,
        count: item.count,
      });
    }
  }

  computedCartItems = result;

  console.log("Cart -> computedCartItems", computedCartItems);

  return (
    <div className="cart">
      <h1>items</h1>
      {computedCartItems &&
        computedCartItems.map((item) => renderCartItem(item))}
    </div>
  );
}
