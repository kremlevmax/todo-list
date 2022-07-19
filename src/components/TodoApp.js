import React, { useState, useEffect, useCallback } from "react";
import MainArea from "./MainArea";
import Greeting from "./Greeting";
import TodoList from "./TodoList";
import AddNewTodo from "./AddNewTodo";
import { useNavigate } from "react-router-dom";
import {
  addDoc,
  getDocs,
  deleteDoc,
  updateDoc,
  doc,
  collection,
} from "firebase/firestore";
import { db, auth } from "../services/firebase-config";

const todoCollectionRef = collection(db, "todos");

export const TodoApp = ({ isAuth, setIsAuth }) => {
  const [todos, setTodos] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [content, setContent] = useState("");
  const [refetch, setRefetch] = useState(false);

  const navigate = useNavigate();

  const createTodo = useCallback(async () => {
    await addDoc(todoCollectionRef, {
      content,
      status: false,
      authorId: auth.currentUser.uid,
    });
    setContent("");
    setShowForm(false);
  }, [content]);

  const deleteTodo = useCallback(
    async (id) => {
      const postDoc = doc(db, "todos", id);
      await deleteDoc(postDoc);
      setRefetch(!refetch);
    },
    [refetch]
  );

  const updateTodo = useCallback(
    async (todo) => {
      const updateTodoRef = doc(db, "todos", todo.id);
      await updateDoc(updateTodoRef, {
        status: !todo.status,
      });
      setRefetch(!refetch);
    },
    [refetch]
  );

  useEffect(() => {
    if (!isAuth) {
      navigate("/");
    }
  });

  useEffect(() => {
    const getTodoList = async () => {
      try {
        const data = await getDocs(todoCollectionRef);
        setTodos(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      } catch (error) {
        console.log(error);
      }
    };
    getTodoList();
  }, [createTodo, refetch]);

  return isAuth ? (
    <MainArea>
      <Greeting
        todos={todos}
        onClickHandler={() => setShowForm(true)}
        showForm={showForm}
        setIsAuth={setIsAuth}
      />
      <TodoList todos={todos} deleteTodo={deleteTodo} updateTodo={updateTodo} />
      <AddNewTodo
        showForm={showForm}
        content={content}
        setContent={setContent}
        createTodo={createTodo}
      />
    </MainArea>
  ) : (
    <></>
  );
};

export default TodoApp;
