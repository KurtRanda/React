import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ColorList from "./ColorList";
import ColorDetails from "./ColorDetails";
import NewColorForm from "./NewColorForm";

function App() {
  const [colors, setColors] = useState([
    { name: "red", code: "#FF0000" },
    { name: "green", code: "#00FF00" },
    { name: "blue", code: "#0000FF" },
  ]);

  function addColor(newColor) {
    setColors([newColor, ...colors]);
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/colors" element={<ColorList colors={colors} />} />
        <Route path="/colors/new" element={<NewColorForm addColor={addColor} />} />
        <Route path="/colors/:color" element={<ColorDetails colors={colors} />} />
        <Route path="/" element={<Navigate to="/colors" />} />
        <Route path="*" element={<Navigate to="/colors" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
