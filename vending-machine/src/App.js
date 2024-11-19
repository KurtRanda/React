import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import VendingMachine from "./VendingMachine";
import Snack from "./Snack";
import Candy from "./Candy";
import Soda from "./Soda";


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<VendingMachine />} />
          <Route path="/snack" element={<Snack />} />
          <Route path="/candy" element={<Candy />} />
          <Route path="/soda" element={<Soda />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

