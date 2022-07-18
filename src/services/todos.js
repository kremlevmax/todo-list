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

const todoServices = { getAll, create, remove };

export default todoServices;
