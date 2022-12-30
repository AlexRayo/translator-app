import {
    collection,
    addDoc,
    updateDoc,
    onSnapshot,
    deleteDoc,
    doc,
    getDoc,
    getDocs,
  } from "firebase/firestore";
  import { db } from "./config";
  
  const collectionName = "users";
  
  export const save = (data:Object) =>
    addDoc(collection(db, collectionName), data);
  
  export const update = (id:string, updatedFields:object) =>
    updateDoc(doc(db, collectionName, id), updatedFields);
  
  export const onGetItems = (callback:any) => {
    const unsub = onSnapshot(collection(db, collectionName), callback);
    return unsub;
  };
  
  export const fetchAll = () => getDocs(collection(db, collectionName));
  
  export const deleteItem = (id:string) => deleteDoc(doc(db, collectionName, id));
  
  export const getItem = (id:string) => getDoc(doc(db, collectionName, id));