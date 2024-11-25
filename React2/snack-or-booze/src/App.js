import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import SnackOrBoozeApi from "./Api";
import NavBar from "./NavBar";
import Menu from "./FoodMenu";
import Snack from "./FoodItem";
import AddItemForm from "./AddItemForm";
import FoodMenu from "./FoodMenu";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [snacks, setSnacks] = useState([]);
  const [drinks, setDrinks] = useState([]);

  useEffect(() => {
    async function getItems() {
      let snacks = await SnackOrBoozeApi.getSnacks();
      let drinks = await SnackOrBoozeApi.getDrinks();
      setSnacks(snacks);
      setDrinks(drinks);
      setIsLoading(false);
    }
    getItems();
  }, []);

  async function addItem(type, newItem) {
    const addedItem = await SnackOrBoozeApi.addItem(type, newItem);
    if (type === "snacks") {
      setSnacks((snacks) => [...snacks, addedItem]);
    } else if (type === "drinks") {
      setDrinks((drinks) => [...drinks, addedItem]);
    }
  }

  if (isLoading) {
    return <p>Loading &hellip;</p>;
  }

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <main>
          <Switch>
            {/* Home Route */}
            <Route exact path="/">
              <Home snacks={snacks} drinks={drinks} />
            </Route>

            {/* Snacks Routes */}
            <Route exact path="/snacks">
              <FoodMenu items={snacks} title="Snacks" />
            </Route>
            <Route path="/snacks/:id">
              <Snack items={snacks} cantFind="/snacks" />
            </Route>

            {/* Drinks Routes */}
            <Route exact path="/drinks">
              <FoodMenu items={drinks} title="Drinks" />
            </Route>
            <Route path="/drinks/:id">
              <Snack items={drinks} cantFind="/drinks" />
            </Route>

            {/* Add New Item Route */}
            <Route path="/add">
              <AddItemForm addItem={addItem} />
            </Route>

            {/* Not Found Route */}
            <Route>
              <p>Hmmm. I can't seem to find what you want.</p>
            </Route>
          </Switch>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
