import React, { useState } from "react";
import Todo from "./Todo";
import "./TodoList.css";

const TodoList = ({ todos }) => {
  const [opacity, setOpacity] = useState(0);
  console.log(todos);
  let todoList = todos.map((todo) => (
    <Todo todoData={todo} key={todo.id} opacity={opacity} />
  ));

  setTimeout(() => setOpacity(1), 1000);

  return <div className='task-list__container'>{todoList}</div>;
};

export default TodoList;
