import React from "react";
import "./Todo.css";

const Task = ({ todoData }) => {
  return (
    <div className='task__container'>
      <span>{todoData.content}</span>
    </div>
  );
};

export default Task;
