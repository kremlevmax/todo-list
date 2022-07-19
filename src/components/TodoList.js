import React, { useState } from "react";
import Todo from "./Todo";
import "./TodoList.css";

const TodoList = ({ todos, deleteTodo, updateTodo }) => {
  const [opacity, setOpacity] = useState(0);

  let todoList = todos.map((todo) => (
    <Todo
      todoData={todo}
      key={todo.id}
      deleteTodo={deleteTodo}
      updateTodo={updateTodo}
    />
  ));

  setTimeout(() => setOpacity(1), 1000);

  return (
    <div className='todo-list__container' style={{ opacity }}>
      {todoList}
    </div>
  );
};

export default TodoList;
