import React from 'react';
import Message from './Message.js';

const MessageList = ({messages, star, selecting}) => {
  return (
    <div>
      {messages.map(message => {
        return <Message message={message} key={message.id} star={star} selecting={selecting}/>
      })}
    </div>
  )
}

export default MessageList
