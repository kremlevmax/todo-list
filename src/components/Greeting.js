import React from "react";
import TodosCount from "./TodosCount";
import "./Greeting.css";
import plus from "../images/plus.svg";
import { signOut } from "firebase/auth";
import { auth } from "../services/firebase-config";
import logout from "../images/logout.svg";
import { useNavigate } from "react-router-dom";

const Greeting = ({ todos, onClickHandler, showForm, setIsAuth }) => {
  const opacity = showForm === true ? 0 : 1;
  const navigate = useNavigate();

  const logoutHandler = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      navigate("/");
    });
  };

  return (
    <div className='greeting__container'>
      <span className='greeting__text'>Hi, {auth.currentUser.displayName}</span>
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
