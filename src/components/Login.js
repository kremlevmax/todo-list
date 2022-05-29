import React, { useState } from "react";
import loginService from "../services/login";
import userService from "../services/users";

const Login = ({ setUser }) => {
  const [isLoginMode, setIsLoginMode] = useState(true);
  const [loginCredentials, setLoginCredentials] = useState({});
  const [registerCredentials, setRegisterCredentials] = useState({});
  const [errorMessage, setErrorMessage] = useState(null);

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const user = await loginService.login(loginCredentials);
      setUser(user);
      setLoginCredentials({});
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
      {isLoginMode && (
        <>
          <div>
            <span>Login</span>
          </div>
          <input
            placeholder='Username'
            onChange={(event) =>
              setLoginCredentials((prev) => ({
                ...prev,
                username: event.target.value,
              }))
            }
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
          />
          <button onClick={handleLogin}>Login</button>
        </>
      )}
      {!isLoginMode && (
        <>
          <div>
            <span>Sign Up</span>
          </div>
          <input
            placeholder='Name'
            onChange={(event) =>
              setRegisterCredentials((prev) => ({
                ...prev,
                name: event.target.value,
              }))
            }
          />
          <input
            placeholder='Username'
            onChange={(event) =>
              setRegisterCredentials((prev) => ({
                ...prev,
                username: event.target.value,
              }))
            }
          />
          <input
            type='password'
            placeholder='Password'
            onChange={(event) =>
              setRegisterCredentials((prev) => ({
                ...prev,
                password: event.target.value,
              }))
            }
          />
          <button onClick={handleRegister}>Sign Up</button>
        </>
      )}
    </>
  );
};
export default Login;
