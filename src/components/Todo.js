import React from "react";
import Checkbox from "./Checkbox";
import "./Todo.css";
import todoServices from "../services/todos";
import trash from "../images/trash.svg";

const Todo = ({ todoData, setTodos }) => {
  const finishToDo = async () => {
    const updatedtodo = {
      id: todoData.id,
      content: todoData.content,
      status: !todoData.status,
    };
    setTodos((prev) => [
      ...prev.filter((item) => item.id !== todoData.id),
      updatedtodo,
    ]);

    await todoServices.update(updatedtodo);
  };

  const opacity = todoData.status ? 0.4 : 1;
  const textDecoration = todoData.status ? "line-through" : "";

  const removeToDo = async () => {
    await todoServices.remove(todoData);
    setTodos((prev) => [...prev.filter((item) => item.id !== todoData.id)]);
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
            <Checkbox finishToDo={finishToDo} isChecked={todoData.status} />
          </div>
          <div className='todo__trash-icon-container' onClick={removeToDo}>
            <img src={trash} alt='Delete' className='todo__trash-icon' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Todo;
