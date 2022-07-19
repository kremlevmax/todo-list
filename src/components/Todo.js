import React from "react";
import Checkbox from "./Checkbox";
import "./Todo.css";
import trash from "../images/trash.svg";

const Todo = ({ todoData, deleteTodo, updateTodo }) => {
  const opacity = todoData.status ? 0.4 : 1;
  const textDecoration = todoData.status ? "line-through" : "";

  return (
    <div className='todo__main-container'>
      <div className='todo__data-container'>
        <div className='todo__container' style={{ opacity }}>
          <span className='todo__text' style={{ textDecoration }}>
            {todoData.content}
          </span>
        </div>
        <div className='todo__buttons'>
          <div className='todo__checkbox-container'>
            <Checkbox
              finishToDo={() => updateTodo(todoData)}
              isChecked={todoData.status}
            />
          </div>
          <div
            className='todo__trash-icon-container'
            onClick={() => deleteTodo(todoData.id)}
          >
            <img src={trash} alt='Delete' className='todo__trash-icon' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Todo;
