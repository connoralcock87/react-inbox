import React from 'react';

const Message = ({message, star, selecting}) => {
  const starredClass = "star fa fa-star";
  const unstarredClass = "star fa fa-star-o";
  // let starClass = "";
  // if (message.starred) {
  //   starClass = starredClass;
  // } else {
  //   starClass = unstarredClass;
  // }
  const starClass = message.starred ? starredClass : unstarredClass
  const selectedClass = message.selected ? 'isSelected' : 'notSelected';
  return (
    <div className="row message unread">
  <div className="col-xs-1">
    <div className="row">
      <div className="col-xs-2">
        <input type="checkbox" checked={selectedClass} onChange={ => selecting(message) } />
      </div>
      <div className="col-xs-2">
        <i className={starClass} onClick={() => star(message)}></i>
      </div>
    </div>
  </div>
  <div className="col-xs-11">
    <a href="#">
      {message.subject}
    </a>
  </div>
</div>
  )
}

export default Message
