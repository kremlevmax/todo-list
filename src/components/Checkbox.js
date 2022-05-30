import React from "react";
import "./Checkbox.css";

const Checkbox = ({ finishToDo, isChecked }) => {
  return (
    <label>
      <input type='checkbox' onChange={finishToDo} />
      <svg
        className='checkbox'
        aria-hidden='true'
        viewBox='0 0 15 11'
        fill='none'
      >
        <path
          d='M1 4.5L5 9L12 1'
          strokeWidth='2'
          stroke={isChecked ? "#6661c9" : "none"}
        />
      </svg>
    </label>
  );
};

export default Checkbox;
