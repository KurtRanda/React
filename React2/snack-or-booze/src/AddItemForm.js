import React, { useState } from "react";

function AddItemForm({ addItem }) {
  const [type, setType] = useState("snacks");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  function handleSubmit(evt) {
    evt.preventDefault();
    addItem(type, { name, description });
    setName("");
    setDescription("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Add a New Item</h1>
      <label>Type:</label>
      <select value={type} onChange={(e) => setType(e.target.value)}>
        <option value="snacks">Snack</option>
        <option value="drinks">Drink</option>
      </select>

      <label>Name:</label>
      <input value={name} onChange={(e) => setName(e.target.value)} />

      <label>Description:</label>
      <input value={description} onChange={(e) => setDescription(e.target.value)} />

      <button>Add Item</button>
    </form>
  );
}

export default AddItemForm;
