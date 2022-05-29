import axios from "axios";

const baseURL = "http://localhost:3001/api/users/";

const register = async (userCredentials) => {
  const response = await axios.post(baseURL, userCredentials);
  return response;
};

const userService = { register };
export default userService;
