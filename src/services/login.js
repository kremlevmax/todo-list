import axios from "axios";
import todoServices from "./todos";

const baseURL = "http://localhost:3001/api/login/";

const login = async (userCredentials) => {
  const response = await axios.post(baseURL, userCredentials);
  console.log(response);
  return response;
};

const loginService = { login };
export default loginService;
