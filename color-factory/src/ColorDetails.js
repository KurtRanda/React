import React from "react";
import { useParams, Navigate, Link } from "react-router-dom";

function ColorDetails({ colors }) {
  const { color } = useParams();
  const selectedColor = colors.find((c) => c.name === color);

  if (!selectedColor) {
    return <Navigate to="/colors" />;
  }

  return (
    <div style={{ backgroundColor: selectedColor.code, height: "100vh" }}>
      <h1>This is {selectedColor.name}</h1>
      <p>Isn't it beautiful?</p>
      <Link to="/colors">Go Back</Link>
    </div>
  );
}

export default ColorDetails;
