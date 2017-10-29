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
    
    // this.setState({list: 
    //   this.state.list.map(item => {
    //     if (item[id] !== item[id]) {
    //       return item;
    //     } else {
    //       for (var key in item) {
    //         if (item.key === itemId) {
    //           item[key] = item[key] + 1;
    //         }
    //       } 
    //       return item; 
    //     }
    //   });
    // });
    console.log('increase works', itemId, newList);
  }
  
  decreaseQ (itemId) {
    console.log('decrease works', itemId);
    // decrease teh quanity of an item by 1
    // if item's new quantity is 0 => remove item
  }
  
  addItem (itemName) {
    // add new item to list, set default quanity to 1
  }

  
  render () {
    return (
    <div>
      <div id="addGrocery">
        <AddGrocery />
      </div>
        <div id="groceryList">
          <GroceryList list={this.state.list} increaseQ={this.increaseQ} decreaseQ={this.decreaseQ}/>
        </div>
    </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));