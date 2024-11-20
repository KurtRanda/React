import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function NewColorForm({ addColor }) {
  const [formData, setFormData] = useState({ name: "", code: "#000000" });
  const navigate = useNavigate();

  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData((data) => ({
      ...data,
      [name]: value,
    }));
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    addColor(formData);
    navigate("/colors");
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Color Name:</label>
      <input
        id="name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
      />

      <label htmlFor="code">Color Code:</label>
      <input
        id="code"
        name="code"
        type="color"
        value={formData.code}
        onChange={handleChange}
      />

      <button>Add Color</button>
    </form>
  );
}

export default NewColorForm;
