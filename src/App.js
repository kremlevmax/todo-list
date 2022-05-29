import { useState, useEffect } from "react";
import "./App.css";
import Greeting from "./components/Greeting";
import Login from "./components/Login";
import MainArea from "./components/MainArea";
import Popup from "./components/Popup";
import TodoList from "./components/TodoList";
import AddNewTodo from "./components/AddNewTodo";
import todoServices from "./services/todos";

function App() {
  const [todos, setTodos] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [user, setUser] = useState(null);

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
  console.log(user);
  return (
    <>
      {user === null ? (
        <MainArea todos={todos}>
          <Login setUser={setUser} />
        </MainArea>
      ) : (
        <div className='main-area'>
          <MainArea todos={todos}>
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
        </div>
      )}
    </>
  );
}

export default App;
