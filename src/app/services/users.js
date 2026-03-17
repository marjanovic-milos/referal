import { collection, doc, getDoc, getDocs, setDoc, addDoc, updateDoc, deleteDoc, getFirestore } from "firebase/firestore";
import { app } from "@/firebase/db";

const db = getFirestore(app);
const usersCollection = collection(db, "users");

// Get single user
export const getUser = async (id) => {
  const snapshot = await getDoc(doc(db, "users", id));
  if (!snapshot.exists()) {
    return { status: false, data: {} };
  }
  return { data: { id: snapshot.id, ...snapshot.data() } };
};

// Get all users
export const getUsers = async () => {
  const snapshot = await getDocs(usersCollection);
  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
};

// Create user
export const createUser = async (data) => {
  const docRef = await addDoc(usersCollection, data);
  return { id: docRef.id, ...data };
};

// Update user
export const updateUser = async ({ id, data }) => {
  await updateDoc(doc(db, "users", id), data);
  return { id, ...data };
};

// Delete user
export const deleteUser = async (id) => {
  await deleteDoc(doc(db, "users", id));
  return id;
};
