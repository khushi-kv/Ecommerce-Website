import React from "react";
import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Home,
  CategoryProduct,
  Cart,
  Search,
} from "./Pages/index";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Footer from "./components/Footer/Footer";
import store from "./store/store";
import { Provider } from "react-redux";
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";
import PrivateRoutes from "./utils/PrivateRoutes";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import ProductSinglePage from "./Pages/ProductSinglePage/ProductSinglePage";

function App() {
  const auth = getAuth();
  onAuthStateChanged(auth, (user) =>{
    if (user) {
      console.log(user.email);
    } else {
      console.log("User is logged out");
    }
  });

  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Header />
          <Sidebar />
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route
              path="/"
              element={
                <>
                  <PrivateRoutes Component={Home} />
                </>
              }
            />
            <Route
              path="product/:id"
              element={
                <>
                  <PrivateRoutes Component={ProductSinglePage} />
                </>
              }
            />
            <Route
              path="category/:category"
              element={
                <>
                  <PrivateRoutes Component={CategoryProduct} />
                </>
              }
            />
            <Route
              path="/cart"
              element={
                <>
                  <PrivateRoutes Component={Cart} />
                </>
              }
            />
            <Route
              path="/search/:searchTerm"
              element={
                <>
                  <PrivateRoutes Component={Search} />
                </>
              }
            />
          </Routes>
          <Footer />
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
