import React, { useState } from "react";
import Checkbox from "./Checkbox";
import "./Todo.css";
import todoServices from "../services/todos";

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
      <div className='todo__data-container' style={{ opacity }}>
        <div className='todo__container'>
          <span className='todo__text' style={{ textDecoration }}>
            {todoData.content}
          </span>
        </div>
        <div className='todo__checkbox-container'>
          <Checkbox
            finishToDo={finishToDo}
            checked={todoData.status}
            setOpacity={setOpacity}
          />
        </div>
      </div>
    </div>
  );
};

export default Todo;
