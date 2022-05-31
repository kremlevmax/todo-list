import React, { useState } from "react";
import Todo from "./Todo";
import "./TodoList.css";

const TodoList = ({ todos, setTodos, user }) => {
  const [opacity, setOpacity] = useState(0);

  let todoList = todos.map((todo) => (
    <Todo todoData={todo} key={todo.id} setTodos={setTodos} user={user} />
  ));

  setTimeout(() => setOpacity(1), 500);

  return (
    <div className='todo-list__container' style={{ opacity }}>
      {todoList}
    </div>
  );
};

export default TodoList;
