import { useState, useEffect } from "react";
import Greeting from "./components/Greeting";
import Login from "./components/Login";
import MainArea from "./components/MainArea";
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
    const loggedUserJSON = window.localStorage.getItem("loggedUser");
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON);
      setUser(user.data);
      todoServices.setToken(user.data.token);
      getTodoList();
    }
  }, []);

  return (
    <>
      {user === null ? (
        <MainArea>
          <Login setUser={setUser} getTodoList={getTodoList} />
        </MainArea>
      ) : (
        <MainArea>
          <Greeting
            todos={todos}
            onClickHandler={() => setShowForm(true)}
            showForm={showForm}
            user={user}
            setUser={setUser}
          />
          <TodoList
            todos={todos}
            setTodos={setTodos}
            showForm={showForm}
            user={user}
          />
          <AddNewTodo
            showForm={showForm}
            setTodos={setTodos}
            hideForm={() => setShowForm(false)}
            user={user}
          />
        </MainArea>
      )}
    </>
  );
}

export default App;
