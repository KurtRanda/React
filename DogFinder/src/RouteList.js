import React from "react";
import { Routes, Route } from "react-router-dom";
import DogList from "./DogList";
import DogDetails from "./DogDetails";

function RouteList({ dogs }) {
  return (
    <Routes>
      <Route path="/" element={<DogList dogs={dogs} />} />
      <Route path="/dogs" element={<DogList dogs={dogs} />} />
      <Route path="/dogs/:name" element={<DogDetails dogs={dogs} />} />
    </Routes>
  );
}

export default RouteList;
