import React from "react";
import { Link } from "react-router-dom";

function DogList({ dogs }) {
  return (
    <div>
      <h1>Meet Our Dogs!</h1>
      <ul>
        {dogs.map((dog) => (
          <li key={dog.name}>
            <Link to={`/dogs/${dog.name.toLowerCase()}`}>
              <img src={dog.image} alt={dog.name} />
              <h2>{dog.name}</h2>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DogList;
