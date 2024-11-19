import React from "react";
import { Link } from "react-router-dom";

function Snack() {
  return (
    <div>
      <h1>Snack: Chips!</h1>
      <p>Crunchy and salty, perfect for a quick bite.</p>
      <Link to="/">Go back to the vending machine</Link>
    </div>
  );
}

export default Snack;
