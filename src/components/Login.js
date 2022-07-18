import React from "react";
import "./Login.css";

import { auth, provider } from "../services/firebase-config";
import { signInWithPopup } from "firebase/auth";

const Login = ({ setIsAuth }) => {
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
      localStorage.setItem("isAuth", true);
      setIsAuth(true);
    });
  };

  return (
    <>
      <div className='login__container'>
        <p>Sign In With Google to Continue</p>
        <button className='login__button' onClick={signInWithGoogle}>
          Sign in with Google
        </button>
      </div>
    </>
  );
};
export default Login;
