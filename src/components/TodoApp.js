import React, { useState, useEffect } from "react";
import MainArea from "./MainArea";
import Greeting from "./Greeting";
import TodoList from "./TodoList";
import AddNewTodo from "./AddNewTodo";
import { useNavigate } from "react-router-dom";
import { create, getAll, remove, update } from "../services/todos";

export const TodoApp = ({ isAuth, setIsAuth }) => {
  const [todos, setTodos] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [content, setContent] = useState("");

  const navigate = useNavigate();

  const createTodo = async () => {
    await create(content);
    const data = await getAll();
    setTodos(data);
    setContent("");
    setShowForm(false);
  };

  const deleteTodo = async (id) => {
    await remove(id);
    const data = await getAll();
    setTodos(data);
  };

  const updateTodo = async (todo) => {
    await update(todo);
    const data = await getAll();
    setTodos(data);
  };

  useEffect(() => {
    if (!isAuth) {
      navigate("/");
    }
  });

  useEffect(() => {
    const fetchData = async () => {
      const data = await getAll();
      setTodos(data);
    };
    fetchData();
  }, []);

  return isAuth ? (
    <MainArea>
      <Greeting
        todos={todos}
        onClickHandler={() => setShowForm(true)}
        showForm={showForm}
        setIsAuth={setIsAuth}
      />
      <TodoList todos={todos} deleteTodo={deleteTodo} updateTodo={updateTodo} />
      <AddNewTodo
        showForm={showForm}
        content={content}
        setContent={setContent}
        createTodo={createTodo}
      />
    </MainArea>
  ) : (
    <></>
  );
};

export default TodoApp;
