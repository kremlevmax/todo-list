import React from "react";
import "./Login.css";

import { auth, provider } from "../services/firebase-config";
import { signInWithPopup } from "firebase/auth";
import MainArea from "./MainArea";
import { useNavigate } from "react-router-dom";

const Login = ({ setIsAuth }) => {
  let navigate = useNavigate();

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
      localStorage.setItem("isAuth", true);
      setIsAuth(true);
      navigate("/todolist");
    });
  };

  return (
    <MainArea>
      <div className='login__container'>
        <p>Sign In With Google to Continue</p>
        <button className='login__button' onClick={signInWithGoogle}>
          Sign in with Google
        </button>
      </div>
    </MainArea>
  );
};
export default Login;
