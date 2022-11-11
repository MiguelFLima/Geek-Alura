import {
  getFirestore,
  collection,
  getDocs,
  getDoc,
  doc,
  writeBatch,
  query,
} from "firebase/firestore/lite";

import {
  getDatabase,
  ref,
  set,
  onValue,
  update,
  remove,
} from "firebase/database";

import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCGZ63fuopVdBGD1AWupM-a_JSmHxmFDuY",
  authDomain: "geek-a481d.firebaseapp.com",
  projectId: "geek-a481d",
  storageBucket: "geek-a481d.appspot.com",
  messagingSenderId: "945158972805",
  appId: "1:945158972805:web:6d8176c7a7bd895c82d0ec"
};

const app = initializeApp(firebaseConfig);

//=========== R E A L === T I M E === D A T A B A S E =======

export const db = getDatabase(app);

export const writeNewCall = async (call) => {
  try {
    await set(ref(db, "products/" + call.id), call);
  } catch (error) {
    console.log(error);
  }
};

export const removeExistingCall = async (call) => {
  try {
    await remove(ref(db, "products/" + call.id));
  } catch (error) {
    console.log(error);
  }
};
export const editExistingCall = async (call, oldId) => {
  try {
    await remove(ref(db, "products/" + oldId));
    await set(ref(db, "products/" + call.id), call);
  } catch (error) {
    console.log(error);
  }
};

const callsRef = ref(db, "products/");

export const callsListener = (callback) => {
  return onValue(callsRef, (callsSnapshot) => {
    const data = callsSnapshot.val();
    callback(data);
  });
};

export const proceduresListener = (callback, callId) => {
  const callRef = ref(db,"/products/" + callId)
  return onValue(callRef, (callSnapshot) => {
    const data = callSnapshot.val()
    callback(data)
  })
}

export default app;