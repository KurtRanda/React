import React, { useState } from 'react';

function NewBoxForm({ addBox }) {
  const INITIAL_STATE = { color: '', width: '', height: '' };
  const [formData, setFormData] = useState(INITIAL_STATE);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((fData) => ({ ...fData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addBox({ ...formData, id: Date.now().toString() });
    setFormData(INITIAL_STATE);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="color">Color:</label>
      <input
        type="text"
        name="color"
        value={formData.color}
        onChange={handleChange}
      />
      <label htmlFor="width">Width:</label>
      <input
        type="number"
        name="width"
        value={formData.width}
        onChange={handleChange}
      />
      <label htmlFor="height">Height:</label>
      <input
        type="number"
        name="height"
        value={formData.height}
        onChange={handleChange}
      />
      <button type="submit">Add Box</button>
    </form>
  );
}

export default NewBoxForm;
