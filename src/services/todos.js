import axios from "axios";

const baseURL = "http://localhost:3001/api/todos";

const getAll = async () => {
  const request = await axios.get(baseURL);
  return request;
};

const todoServices = { getAll };

export default todoServices;
