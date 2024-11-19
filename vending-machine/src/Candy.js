import React from "react";
import { Link } from "react-router-dom";

function Candy() {
  return (
    <div>
      <h1>Candy: Chocolate!</h1>
      <p>Sweet, rich, and delicious.</p>
      <Link to="/">Go back to the vending machine</Link>
    </div>
  );
}

export default Candy;
