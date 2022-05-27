import React, { useState } from "react";
import Checkbox from "./Checkbox";
import "./Todo.css";
import todoServices from "../services/todos";
import trash from "../images/trash.svg";

const Todo = ({ todoData }) => {
  const [opacity, setOpacity] = useState(todoData.status ? 0.4 : 1);
  const [textDecoration, setTextDecoration] = useState(
    todoData.status ? "line-through" : ""
  );

  const finishToDo = async (isChecked) => {
    const updatedtodo = {
      id: todoData.id,
      status: isChecked,
    };
    await todoServices.update(updatedtodo);
    setOpacity(isChecked ? 0.4 : 1);
    setTextDecoration(isChecked ? "line-through" : "");
  };

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
              finishToDo={finishToDo}
              checked={todoData.status}
              setOpacity={setOpacity}
            />
          </div>
          <div className='todo__trash-icon-container'>
            <img src={trash} alt='Delete' className='todo__trash-icon' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Todo;
