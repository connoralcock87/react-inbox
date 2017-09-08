import React from 'react';
import Message from './Message.js';

const MessageList = ({messages}) => {
  return (
    <div>
      {messages.map(message => {
        return <Message message={message} key={message.id}/>
      })}
    </div>
  )
}

export default MessageList
