import React from "react";

const Comment = ({ text, votes, id, thumbUpComment, thumbDownComment, removeComment }) => (
  <li>
    {text} <span>votes: {votes}</span> 
    <button onClick={() => thumbUpComment(id)}>+</button>
    <button onClick={() => thumbDownComment(id)}>-</button>
    <button onClick={() => removeComment(id)}>x</button>
  </li>
);

export default Comment;
