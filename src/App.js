import React, { Component } from 'react';
import { Filter } from './Filter';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    let jsx = <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>A list of Employees</h2>
      </div>
      <Filter />
    </div>;
    return (
      jsx
    );
  }
}

export default App;
