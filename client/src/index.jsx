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
    
    this.increaseQ = this.increaseQ.bind(this);
    this.decreaseQ = this.decreaseQ.bind(this);
    this.remove = this.remove.bind(this);
  }
  
  increaseQ (itemId) {
    //increase the quantity of an item by 1
    var list = this.state.list;
    var newList = list.map((item) => {
      if (item.id !== itemId) {
        return item;
      } else {
        item.quantity = item.quantity + 1;
        return item; 
      }
    });
    this.setState({list: newList});
  }
  
  decreaseQ (itemId) {
    var list = this.state.list;
    var newList = list.map((item) => {
      if (item.id !== itemId) {
        return item;
      } else {
        item.quantity = item.quantity - 1;
        if (item.quantity === 0) {
          // LAUNCH REMOVE FUNCTION
        }
        return item; 
      }
    });
    
    this.setState({list: newList});
  }
  
  remove (removedItem) {
    console.log('remove event triggered', event);
    var objId = removedItem.id;
    var list = this.state.list;
    var newList = list.filter((object) => {
      return object.id !== removedItem.id;
    });
    
    newList = newList.map((item) => {
      if (item.id > objId) {
        item.id = item.id - 1;
      }
      return item;
    })
    
    this.setState({list: newList});
  }
  
  addItem (itemName) {
    // add new item to list, set default quanity to 1
    console.log()
  }

  
  render () {
    return (
    <div>
      <div id="addGrocery">
        <AddGrocery />
      </div>
        <div id="groceryList">
          <GroceryList 
          list={this.state.list} 
          increaseQ={this.increaseQ} 
          decreaseQ={this.decreaseQ}
          remove={this.remove}
          />
        </div>
    </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));