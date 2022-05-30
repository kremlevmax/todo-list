import axios from "axios";

const baseURL = "http://localhost:3001/api/login/";

const login = async (userCredentials) => {
  const response = await axios.post(baseURL, userCredentials);
  return response;
};

const loginService = { login };
export default loginService;
