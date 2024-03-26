// src/components/ClothingItemList.js
import React from 'react';
import './ClothingItemList.css'; // Import CSS file

const ClothingItemList = ({ items, onEdit, onDelete }) => {
  return (
    <div className="clothing-item-list">
      <h2>Clothing Items</h2>
      {items.map(item => (
        <div key={item.id} className="clothing-item">
          <img src={item.image} alt={item.name} className="item-image" />
          <div className="item-details">
            <h3>{item.name}</h3>
            <p>Category: {item.category}</p>
            <p>Color: {item.color}</p>
            <p>Size: {item.size}</p>
            {/* Add additional item details here */}
          </div>
          <div className="item-actions">
            <button onClick={() => onEdit(item)}>Edit</button>
            <button onClick={() => onDelete(item)}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ClothingItemList;
