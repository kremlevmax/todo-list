import axios from "axios";

const baseURL = "http://localhost:3001/api/todos/";

const getAll = async () => {
  const request = await axios.get(baseURL);
  return request;
};

const create = async (todoItem) => {
  const response = await axios.post(baseURL, todoItem);
  return response.data;
};

const remove = async (todoItem) => {
  const URL = baseURL + todoItem.id;
  await axios.delete(URL, todoItem);
};

const update = async (todoItem) => {
  const URL = baseURL + todoItem.id;
  const response = await axios.put(URL, todoItem);
  return response.data;
};

const todoServices = { getAll, create, update, remove };

export default todoServices;
