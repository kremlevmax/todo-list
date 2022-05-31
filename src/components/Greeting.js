import React from "react";
import TodosCount from "./TodosCount";
import "./Greeting.css";
import plus from "../images/plus.svg";
import logout from "../images/logout.svg";

const Greeting = ({ todos, onClickHandler, showForm, user, setUser }) => {
  const opacity = showForm === true ? 0 : 1;

  const logoutHandler = () => {
    setUser(null);
    window.localStorage.removeItem("loggedUser");
  };

  return (
    <div className='greeting__container'>
      <span className='greeting__text'>Hello, {user.name}</span>
      <div
        className='greeting__plus-icon-container'
        onClick={onClickHandler}
        style={{ opacity }}
      >
        <img src={plus} alt='plus-button' className='greeting__plus-icon' />
      </div>
      <div className='greeting__logout-container' onClick={logoutHandler}>
        <img src={logout} alt='plus-button' className='greeting__logout-icon' />
        <span className='greeting__logout-text'>Logout</span>
      </div>
      <TodosCount todos={todos} />
    </div>
  );
};

export default Greeting;
