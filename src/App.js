import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Messages from './components/Messages.js';
import Toolbar from './components/Toolbar.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Toolbar />
        <Messages />
      </div>
    );
  }
}

export default App;
