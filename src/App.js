import React, { Component } from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import foodObjects from './data/foods.json';
import FoodBox from "./components/FoodBox.js";



class App extends Component {
  render() {
    return (
      <div className="App">
        {
          foodObjects.map((foodObj) => <FoodBox {...foodObj}  />)
        } 
        
      </div>
    );
  }
}

export default App;
