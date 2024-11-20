import React from "react";
import { useParams, Navigate } from "react-router-dom";

function DogDetails({ dogs }) {
  const { name } = useParams();
  const dog = dogs.find((d) => d.name.toLowerCase() === name.toLowerCase());

  if (!dog) {
    return <Navigate to="/dogs" />;
  }

  return (
    <div>
      <h1>{dog.name}</h1>
      <img src={dog.image} alt={dog.name} />
      <h2>Age: {dog.age}</h2>
      <ul>
        {dog.facts.map((fact, idx) => (
          <li key={idx}>{fact}</li>
        ))}
      </ul>
    </div>
  );
}

export default DogDetails;
