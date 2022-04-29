import { useState, useEffect } from "react";
import "./App.css";
import Greeting from "./components/Greeting";
import Login from "./components/Login";
import Popup from "./components/Popup";
import TodoList from "./components/TodoList";
import todoServices from "./services/todos";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const getTodoList = async () => {
      try {
        const response = await todoServices.getAll();
        setTodos(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getTodoList();
  }, []);

  return (
    <div className='App'>
      <div className='main-area'>
        <Popup>
          <Login />
        </Popup>
        <Greeting />
        <TodoList todos={todos} />
      </div>
    </div>
  );
}

export default App;
