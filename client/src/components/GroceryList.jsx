import React from 'react';
import GroceryItem from './GroceryItem.jsx'

const GroceryList = (props) => (
  <div className="groceries">
  <h3>GROCERY LIST:</h3>
    {props.list.map((item, idx) => {
      return <GroceryItem item={item} key={idx} />;
    })}
  </div>
)


export default GroceryList;