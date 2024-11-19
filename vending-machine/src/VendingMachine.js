import React from "react";
import { NavLink } from "react-router-dom";
import "./VendingMachine.css";

function VendingMachine() {
  return (
    <div className="vending-machine">
      <div className="screen">
        <h1>Welcome to the Vending Machine!</h1>
        <p>Click an item to select.</p>
      </div>
      <div className="grid">
        <NavLink to="/snack" className="slot">
          <img src="/images/snack.jpg" alt="Snack" />
          <span>Snack</span>
        </NavLink>
        <NavLink to="/candy" className="slot">
          <img src="/images/candy.jpg" alt="Candy" />
          <span>Candy</span>
        </NavLink>
        <NavLink to="/soda" className="slot">
          <img src="/images/soda.jpg" alt="Soda" />
          <span>Soda</span>
        </NavLink>
      </div>
    </div>
  );
}

export default VendingMachine;
