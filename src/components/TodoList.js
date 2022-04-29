import React from "react";
import Todo from "./Todo";
import "./TodoList.css";

const TodoList = ({ todos }) => {
  const todoList = todos.map((todo) => <Todo todoData={todo} key={todo.id} />);

  return <div className='task-list__container'>{todoList}</div>;
};

export default TodoList;
