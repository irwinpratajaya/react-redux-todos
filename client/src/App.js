import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Input from './components/Input'
import Todos from './components/Todos'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          Todo List
        </p>


        <Input />

        <Todos />
      </div>
    );
  }
}

export default App;
