import React from "react";
import { NavLink } from "react-router-dom";

function NavBar({ dogs }) {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      {dogs.map((dog) => (
        <NavLink key={dog.name} to={`/dogs/${dog.name}`}>
          {dog.name}
        </NavLink>
      ))}
    </nav>
  );
}

export default NavBar;
