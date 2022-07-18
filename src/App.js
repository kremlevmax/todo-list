import React, { useState, useEffect } from "react";
import Greeting from "./components/Greeting";
import MainArea from "./components/MainArea";
import TodoList from "./components/TodoList";
import AddNewTodo from "./components/AddNewTodo";
import todoServices from "./services/todos";
import Login from "./components/Login";

function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [todos, setTodos] = useState([]);
  const [showForm, setShowForm] = useState(false);

  const getTodoList = async () => {
    try {
      const response = await todoServices.getAll();
      setTodos(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTodoList();
  }, []);

  return (
    <>
      <MainArea>
        <Login setIsAuth={setIsAuth} />
        <Greeting
          todos={todos}
          onClickHandler={() => setShowForm(true)}
          showForm={showForm}
        />
        <TodoList todos={todos} setTodos={setTodos} showForm={showForm} />
        <AddNewTodo
          showForm={showForm}
          setTodos={setTodos}
          hideForm={() => setShowForm(false)}
        />
      </MainArea>
    </>
  );
}

export default App;
