import React from "react";
import {Link, useLocation} from "react-router-dom";
import "./Footer.scss";
const Footer = () => {
  const location = useLocation();
  // console.log(location.pathname);
  return (
    <>
      {location.pathname !== "/login" && location.pathname !== "/signup" ? (
        <footer className="footer ">
          <div className="container py-5">
            <div className="flex align-center justify-center text-whitesmoke fs-sm ">
              <Link to="/">Privacy&nbsp;Policy</Link>
              <div className="vert-line"></div>
              <Link to="/">Term&nbsp;Of&nbsp;Service</Link>
              <div className="vert-line"></div>
              <Link to="/">About&nbsp;ShoppingCart</Link>
            </div>
            <div className=" text-manrope flex align-center justify-center text-whitesmoke fs-sm my-2 text-bold">
              ©2023 ShoppingCart.All Rights Reserved.
            </div>
          </div>
        </footer>
       ) : (
        " "
      )} 
    </>
  );
};

export default Footer;
