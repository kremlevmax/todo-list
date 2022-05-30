import axios from "axios";
const baseURL = "http://localhost:3001/api/todos/";

let token = null;

const setToken = (newToken) => {
  token = `bearer ${newToken}`;
};

const getAll = async () => {
  const config = {
    headers: { Authorization: token },
  };
  const request = await axios.get(baseURL, config);
  return request;
};

const create = async (todoItem) => {
  const config = {
    headers: { Authorization: token },
  };

  const response = await axios.post(baseURL, todoItem, config);
  return response.data;
};

const remove = async (todoItem) => {
  const URL = baseURL + todoItem.id;
  await axios.delete(URL, todoItem);
};

const update = async (todoItem) => {
  const URL = baseURL + todoItem.id;
  const config = {
    headers: { Authorization: token },
  };

  const response = await axios.put(URL, todoItem, config);
  return response.data;
};

const todoServices = { getAll, create, update, remove, setToken };

export default todoServices;
