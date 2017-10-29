import React from 'react';

class AddGrocery extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 

    }
  }

  render () {
    return (
      <div className="addGrocery">
        <h3>Add Grocery Item: </h3>
        <input id="groceryInput" />
        <button>Submit</button>
      </div>
    ) 
  }
}

export default AddGrocery;

