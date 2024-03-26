// src/components/AddItemForm.js
import React, { useState } from 'react';
import './AddItemForm.css'; // Import CSS file

const AddItemForm = ({ onAddItem }) => {
  const [formData, setFormData] = useState({
    name: '',
    category: '',
    color: '',
    size: ''
    // Add more fields as needed
  });

  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    // Call onAddItem function with form data
    onAddItem(formData);
    // Reset form fields
    setFormData({
      name: '',
      category: '',
      color: '',
      size: ''
      // Add more fields as needed
    });
  };

  return (
    <div className="add-item-form">
      <h2>Add New Item</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="category"
          placeholder="Category"
          value={formData.category}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="color"
          placeholder="Color"
          value={formData.color}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="size"
          placeholder="Size"
          value={formData.size}
          onChange={handleChange}
          required
        />
        {/* Add more input fields as needed */}
        <button type="submit">Add Item</button>
      </form>
    </div>
  );
};

export default AddItemForm;
