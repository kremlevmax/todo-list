import React from "react";
import TodosCount from "./TodosCount";
import "./Greeting.css";
import plus from "../images/plus.svg";

const Greeting = ({ todos, onClickHandler, showForm }) => {
  const opacity = showForm === true ? 0 : 1;

  return (
    <div className='greeting__container'>
      <span className='greeting__text'>Todo List</span>
      <div
        className='greeting__plus-icon-container'
        onClick={onClickHandler}
        style={{ opacity }}
      >
        <img src={plus} alt='plus-button' className='greeting__plus-icon' />
      </div>
      <TodosCount todos={todos} />
    </div>
  );
};

export default Greeting;
