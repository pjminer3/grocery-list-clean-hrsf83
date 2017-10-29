import React from 'react';
import ReactDOM from 'react-dom';
import AddGrocery from './components/AddGrocery.jsx'
import GroceryItem from './components/GroceryItem.jsx'
import GroceryList from './components/GroceryList.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        {id: 1, quantity: 5, description: "frozen pizza"},
        {id: 2, quantity: 10, description: "greek yogurt"},
        {id: 3, quantity: 2, description: "wine"},
        {id: 4, quantity: 1, description: "iced coffee"}
      ]
    }
  }
  
  increaseQ () {
    // increase the quantity of an item by 1
  }
  
  decreaseQ () {
    // decrease teh quanity of an item by 1
    // if item's new quantity is 0 => remove item
  }

  
  render () {
    return (
    <div>
      <div id="addGrocery">
        <AddGrocery />
      </div>
        <div id="groceryList">
          <GroceryList list={this.state.list}/>
        </div>
    </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));