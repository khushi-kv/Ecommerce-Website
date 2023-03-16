import { React, useEffect } from "react";
import {  useNavigate } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";
const PrivateRoutes = (props) => {
 
  const navigate = useNavigate();
  const { Component } = props;
  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate("/");
        console.log(user);
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User

        // ...
      } else {
        // User is signed out
        // ...
        navigate("/login");
      }
    });
  },[]);
  return (
    <>
      <Component />
    </>
  );
};

export default PrivateRoutes;
