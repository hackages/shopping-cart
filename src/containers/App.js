import React from "react";
import ProductsContainer from "./ProductsContainer";
import CartContainer from "./CartContainer";

const App = () => (
  <div>
    <h2 data-cy="header">Shopping Cart App</h2>
    <hr />
    <ProductsContainer />
    <hr />
    <CartContainer />
  </div>
);

export default App;
