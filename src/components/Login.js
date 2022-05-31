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

  const regularStyles = {
    border: "1px solid #bedfff",
    color: "#024689",
  };

  const errorStyles = { border: "1px solid #fe0000", color: "#fe0000" };

  const [emailStyle, setEmailStyle] = useState(regularStyles);
  const [passwordStyle, setPasswordStyle] = useState(regularStyles);

  const validateEmail = (email) => {
    return email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const user = await loginService.login(loginCredentials);
      todoServices.setToken(user.data.token);
      setUser(user.data);
      setLoginCredentials({});
      getTodoList();
    } catch (exception) {
      setErrorMessage("Wrong email or password");

      setEmailStyle(errorStyles);
      setPasswordStyle(errorStyles);

      setTimeout(() => {
        setEmailStyle(regularStyles);
        setPasswordStyle(regularStyles);
        setErrorMessage(null);
      }, 5000);
    }
  };

  const handleRegister = async (event) => {
    event.preventDefault();
    if (!validateEmail(registerCredentials.email)) {
      setErrorMessage("Wrong email format");
      setEmailStyle(errorStyles);

      setTimeout(() => {
        setErrorMessage(null);
        setEmailStyle(regularStyles);
      }, 5000);
    } else if (registerCredentials.password.length !== 8) {
      setErrorMessage("Password has to be at least 8 symbols long");
      setPasswordStyle(errorStyles);

      setTimeout(() => {
        setErrorMessage(null);
        setPasswordStyle(regularStyles);
      }, 5000);
    } else {
      try {
        const user = await userService.register(registerCredentials);
        todoServices.setToken(user.data.token);
        setUser(user.data);
        setRegisterCredentials({});
      } catch (exception) {
        setErrorMessage("All fields has to be filled");
        setTimeout(() => {
          setErrorMessage(null);
        }, 5000);
      }
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
            placeholder='Email'
            onChange={(event) =>
              setLoginCredentials((prev) => ({
                ...prev,
                email: event.target.value,
              }))
            }
            className='login-input'
            style={{ border: emailStyle.border, color: emailStyle.color }}
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
            style={{ border: passwordStyle.border, color: passwordStyle.color }}
          />

          <div className='login__error-message-container'>
            <span className='login__error-message'>{errorMessage}</span>
          </div>

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
            placeholder='Email'
            onChange={(event) =>
              setRegisterCredentials((prev) => ({
                ...prev,
                email: event.target.value,
              }))
            }
            style={{ border: emailStyle.border, color: emailStyle.color }}
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
            style={{ border: passwordStyle.border, color: passwordStyle.color }}
          />

          <div className='login__error-message-container'>
            <span className='login__error-message'>{errorMessage}</span>
          </div>

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
