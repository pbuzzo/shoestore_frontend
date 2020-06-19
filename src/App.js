import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component{
  constructor(props) {
    super() // super() must be called before this. can be used
    this.state = {
      shoes: []
    }
  }
  componentDidMount() {
    fetch('http://localhost:8000/api/shoe/')
    .then(res => res.json())
    .then(data => this.setState({
      shoes: data
    }))
  }
  render() {
    return (
      <div>
        <ul>
          <h1>Most Popular Shoes of 2020 For Sale</h1>
          {this.state.shoes.map((s) => {
            return (
              <div>
                <li>Name: {s.name}</li>
                <li>Size: {s.size}</li>
                <li>Brand Name: {s.brand_name}</li>
                <li>Manufacturer: {s.manufacturer}</li>
                <li>Fasten Type: {s.fasten_type}</li>
                <li>Shoe Type: {s.shoe_type}</li>
                <li>Material: {s.material}</li>
                <br></br>
              </div>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default App;
