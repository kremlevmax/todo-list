import React from "react";
import "./MainArea.css";

const MainArea = (props) => {
  const height = props.todos.length === 0 ? 160 : props.todos.length * 56 + 160;
  return (
    <div className='main-area__container' style={{ height }}>
      {props.children}
    </div>
  );
};

export default MainArea;
