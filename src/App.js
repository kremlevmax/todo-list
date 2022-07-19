import React, { useState } from "react";
import Login from "./components/Login";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import TodoApp from "./components/TodoApp";

function App() {
  const [isAuth, setIsAuth] = useState(false);

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login setIsAuth={setIsAuth} />} />
        <Route
          path='/todolist'
          element={<TodoApp isAuth={isAuth} setIsAuth={setIsAuth} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
