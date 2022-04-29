import React from "react";
import Task from "./Task";
import "./TaskList.css";

const TaskList = () => {
  return (
    <div className='task-list__container'>
      <Task />
      <Task />
      <Task />
      <Task />
    </div>
  );
};

export default TaskList;
