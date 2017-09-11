import React, { Component } from 'react';
import './App.css';
import MessageList from './components/MessageList.js';
import Toolbar from './components/Toolbar.js';
import Data from './components/Data.js';

class App extends Component {
  state = {messages: Data}
  star =(selectedMessage) => {
    const newMessages = this.state.messages.map(message => {
      if (message.id === selectedMessage.id){
        message.starred = !message.starred
      }
      return message;
    })
    this.setState({messages: newMessages})
  }
  selecting =(selectedMessage) => {
    const newMessages = this.state.messages.map(message => {
      if (message.id === selectedMessage.id){
        message.selected = !message.selected
      }
      return message;
    })
    this.setState({messages: newMessages})
  }
  render() {
    return (
      <div className="App">
        <Toolbar />
        <MessageList messages={this.state.messages} star={this.star} selecting={this.selecting}/>
      </div>
    );
  }
}

export default App;
