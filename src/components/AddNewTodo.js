import React, { useState } from "react";
import "./AddNewTodo.css";
import add from "../images/add.svg";

const AddNewTodo = ({ showForm, content, setContent, createTodo }) => {
  const [focus, setFocus] = useState(false);

  const inputOpacity = showForm === true ? 1 : 0;
  const plusOpacity = focus === true ? 1 : 0.5;
  const inputVisibility = showForm === true ? "visible" : "hidden";

  return (
    <div
      className='add-new-todo__container'
      style={{ opacity: inputOpacity, visibility: inputVisibility }}
    >
      <form
        className='add-new-todo__input-form'
        onSubmit={(e) => {
          e.preventDefault();
          createTodo();
        }}
      >
        <input
          className='add-new-todo__input'
          value={content}
          onChange={({ target }) => setContent(target.value)}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          placeholder='Enter a new ToDo here'
        ></input>
      </form>
      <div className='add-new-todo__add-button-container'>
        <img
          src={add}
          alt='Add button'
          className='add-new-todo__add-button'
          style={{ opacity: plusOpacity }}
          onClick={createTodo}
        />
      </div>
    </div>
  );
};

export default AddNewTodo;
