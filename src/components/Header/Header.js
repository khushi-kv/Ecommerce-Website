import React from "react";
import "./Header.scss";
import {useLocation } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import { getAuth } from "firebase/auth";
const Header = ()=>{
  const location=useLocation()
  // console.log(location.pathname);
  const auth = getAuth();
  
  return (
    <>
       {location.pathname!=="/login" && location.pathname!=="/signup" ? (
         <header className="header text-whitesmoke">
         <div className="container">
           <div className="header-content flex justify-between align-center">
             <div className="header-content-left ">
               <div className="py-4 ">
                 <ul className="flex align-center fs-sm text-bold">
                   <li className="flex align-center">
                     <span>Follow us on</span>
                     <ul className="flex align-center ">
                       <li className="mx-2">

                         <a href="https://www.facebook.com/"
                         aria-label="Facebook"
                         >
                           <i className="fab fa-facebook"></i>
                         </a>
                       </li>
                       <li className="mx-2">
                         <a href="https://www.instagram.com/"
                          aria-label="Instagram"
                         >
                           <i className="fab fa-instagram"></i>
                         </a>
                       </li>
                     </ul>
                   </li>
                 </ul>
               </div>
             </div>
             <div className="header-cnt-top-r">
              
               <button
                 className="text-white fw-5"
                 onClick={(e) => {
                   e.preventDefault();
                   auth.signOut();
                  alert("You have been logged out!");
                 }}
               >
                 Logout
               </button>
             </div>
           </div>
  
           <div>
             <Navbar />
           </div>
         </div>
       </header>
      
       ):" "}
        
    </>
  );
};

export default Header;
