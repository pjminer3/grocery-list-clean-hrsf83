import React from 'react';

const GroceryItem = (props) => (
  <div className="listItem">
    {/* We   want idx, name, and Quantity */}
    {props.item.id}. {props.item.description}: {props.item.quantity}  
    <button className="increaseQ" onClick={() => {props.increaseQ(props.item.id)} }>+</button>
    <button className="decreaseQ" onClick={() => {props.decreaseQ(props.item.id)} }>-</button>
  </div>
)

export default GroceryItem;