import {
  addDoc,
  getDocs,
  deleteDoc,
  updateDoc,
  doc,
  collection,
} from "firebase/firestore";
import { db, auth } from "./firebase-config";

const todoCollectionRef = collection(db, "todos");

export const create = async (content) => {
  const data = await addDoc(todoCollectionRef, {
    content,
    status: false,
    authorId: auth.currentUser.uid,
  });

  return data;
};

export const getAll = async () => {
  const data = await getDocs(todoCollectionRef);
  const fixedData = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
  return fixedData;
};

export const remove = async (id) => {
  const deleteTodoRef = doc(db, "todos", id);
  await deleteDoc(deleteTodoRef);
};

export const update = async (todo) => {
  const updateTodoRef = doc(db, "todos", todo.id);
  await updateDoc(updateTodoRef, {
    status: !todo.status,
  });
};
