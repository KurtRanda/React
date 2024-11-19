import React from "react";
import { Link } from "react-router-dom";

function Soda() {
  return (
    <div>
      <h1>Soda: Cola!</h1>
      <p>Fizzy, sweet, and refreshing.</p>
      <Link to="/">Go back to the vending machine</Link>
    </div>
  );
}

export default Soda;
