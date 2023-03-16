import React from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";
import { setSidebarOn } from "../../store/SidebarSlice";
import { useSelector, useDispatch } from "react-redux";
import { getSidebarStatus } from "../../store/SidebarSlice";
import { getAllCategories } from "../../store/CategorySlice";
import {
  getAllCarts,
  getCartItemsCount,
  getCartTotal,
} from "../../store/CartSlice";
import { useEffect } from "react";
import CartModal from "../CartModal/CartModal";
import { useState } from "react";
const Navbar = () => {
  const dispatch = useDispatch();
  const temp = useSelector(getSidebarStatus);
  // console.log(temp); // toggling of sidebar test
  const categories = useSelector(getAllCategories);
  // console.log(categories);

  const carts = useSelector(getAllCarts);
  const itemsCount = useSelector(getCartItemsCount);
  const [searchTerm, setSearchTerm] = useState("");
 
  // console.log(itemsCount);
  // console.log(carts);
  useEffect(() => {
    dispatch(getCartTotal());
  });

  const handleSearchTerm = (e) => {
    e.preventDefault();
    setSearchTerm(e.target.value);
    // console.log(searchTerm);
  };
 
  return (
    <>
      <nav className="Navbar ">
        <div className="Navbar-content flex justify-between">
          <div className="brand-and-toggle flex">
            <button
              type="button"
              className="sidebar-show-btn text-whitesmoke"
              onClick={() => dispatch(setSidebarOn())}
            >
              <i className="fas fa-bars"></i>
            </button>
            <Link to="/" className="navbar-brand flex align-center">
              <span className="navbar-brand-icon mx-2 ">
                <i className="fa-solid fa-bag-shopping fa-xl"></i>
              </span>
              <span className="navbar-brand-txt fs-xl">
                <span className="fw-7 text-bold">Shopping</span>Cart.
              </span>
            </Link>
          </div>

          <div className="Navbar-Collapse w-100">
            <div className="Navbar-Search flex align-center">
              <input
                type="text"
                className="form-control fs-sm"
                placeholder="Search your preferred items here"
                value={searchTerm}
                onChange={(e) => handleSearchTerm(e)}
              />
              <Link
                to={`search/${searchTerm}`}
                className="text-white search-btn flex align-center justify-center"
              >
                <i
                  className="fa-solid fa-magnifying-glass fa-lg"
                  aria-label="Search"
                ></i>
              </Link>
            </div>

            <ul className="Navbar-nav flex align-center px-4 my-2">
              {categories.slice(0, 8).map((category, index) => {
                return (
                  <li
                    key={index}
                    className="Navbar-nav-listItems mx-2 fs-base text-bold"
                  >
                    <Link to={`category/${category}`}>{category}</Link>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="Navbar-cart flex align-center">
            <Link to="/cart" className="cart-btn ">
              <i
                className="fa-solid fa-cart-shopping fa-xl"
                aria-label="cart"
              ></i>
              <div className="cart-items-value fs-sm text-danger">
                {itemsCount}
              </div>
              <CartModal carts={carts} />
            </Link>
          </div>
        </div>
      </nav>
      
    </>
  );
};

export default Navbar;
