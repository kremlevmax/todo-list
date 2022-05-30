import React from "react";
import "./MainArea.css";

const MainArea = (props) => {
  return <div className='main-area__container'>{props.children}</div>;
};

export default MainArea;
