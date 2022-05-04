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
  const [updateTodoList, setUpdateTodoList] = useState(false);
  const [showForm, setShowForm] = useState(false);

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
  }, [updateTodoList]);

  return (
    <div className='App'>
      <div className='main-area'>
        <Popup>
          <Login />
        </Popup>
        <MainArea todos={todos}>
          <Greeting
            todos={todos}
            onClickHandler={() => setShowForm(true)}
            showForm={showForm}
          />
          <TodoList
            todos={todos}
            showForm={showForm}
            updateTodoList={updateTodoList}
          />
          <AddNewTodo
            showForm={showForm}
            updateList={() => setUpdateTodoList(!updateTodoList)}
            hideForm={() => setShowForm(false)}
          />
        </MainArea>
      </div>
    </div>
  );
}

export default App;
