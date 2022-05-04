import React from "react";
import Checkbox from "./Checkbox";
import "./Todo.css";

const Todo = ({ todoData, opacity }) => {
  return (
    <div className='todo__main-container'>
      <div className='todo__data-container'>
        <div className='todo__container' style={{ opacity }}>
          <span>{todoData.content}</span>
        </div>
        <div className='todo__checkbox-container'>
          <Checkbox />
        </div>
      </div>
    </div>
  );
};

export default Todo;
