import React from "react";
import "./TodosCount.css";

const TaskCount = ({ todos }) => {
  const message = () => {
    if (todos.length > 1) {
      return `${todos.length} tasks`;
    } else {
      if (todos.length === 1) {
        return `${todos.length} task`;
      } else {
        return "No tasks";
      }
    }
  };

  return (
    <div className='task-count__container'>
      <span className='task-count__text'>{message()}</span>
    </div>
  );
};

export default TaskCount;
