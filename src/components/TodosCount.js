import React from "react";
import "./TodosCount.css";

const TaskCount = ({ todos }) => {
  return (
    <div className='task-count__container'>
      <span className='task-count__text'>{todos.length} tasks</span>
    </div>
  );
};

export default TaskCount;
