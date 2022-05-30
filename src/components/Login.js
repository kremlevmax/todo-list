import React, { useState } from "react";
import loginService from "../services/login";
import userService from "../services/users";
import todoServices from "../services/todos";
import "./Login.css";

const Login = ({ setUser, getTodoList }) => {
  const [isLoginMode, setIsLoginMode] = useState(true);
  const [loginCredentials, setLoginCredentials] = useState({});
  const [registerCredentials, setRegisterCredentials] = useState({});
  const [errorMessage, setErrorMessage] = useState(null);

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const user = await loginService.login(loginCredentials);
      todoServices.setToken(user.data.token);
      setUser(user.data);
      setLoginCredentials({});
      getTodoList();
    } catch (exception) {
      setErrorMessage("Wrong credentials");
      setTimeout(() => {
        setErrorMessage(null);
      }, 5000);
    }
  };

  const handleRegister = async (event) => {
    event.preventDefault();
    try {
      const user = await userService.register(registerCredentials);
      todoServices.setToken(user.data.token);
      setUser(user.data);
      setLoginCredentials({});
    } catch (exception) {
      setErrorMessage("Wrong credentials");
      setTimeout(() => {
        setErrorMessage(null);
      }, 5000);
    }
  };

  return (
    <>
      {!isLoginMode && (
        <div className='login_container'>
          <div className='login-header_container'>
            <span className='login-header_text'>Login</span>
          </div>
          <input
            placeholder='Username'
            onChange={(event) =>
              setLoginCredentials((prev) => ({
                ...prev,
                username: event.target.value,
              }))
            }
            className='login-input'
          />
          <input
            type='password'
            placeholder='Password'
            onChange={(event) =>
              setLoginCredentials((prev) => ({
                ...prev,
                password: event.target.value,
              }))
            }
            className='login-input'
          />
          <button onClick={handleLogin} className='login-submit-button'>
            Login
          </button>
          <div className='login-switch'>
            <span
              className='login-switch-text'
              onClick={() => setIsLoginMode((prev) => !prev)}
            >
              Do you need an account?
            </span>
          </div>
        </div>
      )}
      {isLoginMode && (
        <div className='login_container'>
          <div className='login-header_container'>
            <span className='login-header_text'>Sign Up</span>
          </div>
          <input
            className='login-input'
            placeholder='Name'
            onChange={(event) =>
              setRegisterCredentials((prev) => ({
                ...prev,
                name: event.target.value,
              }))
            }
          />
          <input
            className='login-input'
            placeholder='Username'
            onChange={(event) =>
              setRegisterCredentials((prev) => ({
                ...prev,
                username: event.target.value,
              }))
            }
          />
          <input
            className='login-input'
            type='password'
            placeholder='Password'
            onChange={(event) =>
              setRegisterCredentials((prev) => ({
                ...prev,
                password: event.target.value,
              }))
            }
          />
          <button onClick={handleRegister} className='login-submit-button'>
            Sign Up
          </button>
          <div className='login-switch'>
            <span
              className='login-switch-text'
              onClick={() => setIsLoginMode((prev) => !prev)}
            >
              Already have an account?
            </span>
          </div>
        </div>
      )}
    </>
  );
};
export default Login;
