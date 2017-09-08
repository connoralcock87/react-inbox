import React, { Component } from 'react';
import './App.css';
import MessageList from './components/MessageList.js';
import Toolbar from './components/Toolbar.js';
import Data from './components/Data.js';

class App extends Component {
  state = {messages: Data}
  render() {
    return (
      <div className="App">
        <Toolbar />
        <MessageList messages={this.state.messages}/>
      </div>
    );
  }
}

export default App;
