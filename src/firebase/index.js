import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAjQmeUvsFZ7uxWxid7xL9-2mffXXtRYmc",
  authDomain: "ecommerce-1deea.firebaseapp.com",
  projectId: "ecommerce-1deea",
  storageBucket: "ecommerce-1deea.appspot.com",
  messagingSenderId: "592239979874",
  appId: "1:592239979874:web:ee3da2770059353a8f503b",
  measurementId: "G-5L9JVPY2E2"
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);


