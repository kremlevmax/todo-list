import React from "react";
import "./Login.css";

import { auth, provider } from "../services/firebase-config";
import { signInWithPopup } from "firebase/auth";
import MainArea from "./MainArea";
import { useNavigate } from "react-router-dom";
import googleLogo from "../images/google_logo.png";

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
          <img className='login__google-logo' src={googleLogo} alt='' /> Sign in
          with Google
        </button>
      </div>
    </MainArea>
  );
};
export default Login;
