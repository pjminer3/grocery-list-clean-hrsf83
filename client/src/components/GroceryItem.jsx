import React from 'react';

const GroceryItem = ({item}) => (
  <div className="listItem">
    {/* We   want idx, name, and Quantity */}
    {item.id}. {item.description}: {item.quantity}  
    <button className="increaseQ">+</button>
    <button className="decreaseQ">-</button>
  </div>
)

export default GroceryItem;