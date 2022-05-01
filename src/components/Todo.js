import React from "react";
import "./Todo.css";

const Todo = ({ todoData, opacity }) => {
  return (
    <div className='todo__container' style={{ opacity }}>
      <span>{todoData.content}</span>
    </div>
  );
};

export default Todo;
