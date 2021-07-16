import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { TiShoppingCart } from "react-icons/ti";
import { useSelector } from "react-redux";
import Product from "./Product";

const Navbar = () => {
  const { totalQuantity } = useSelector((state) => state.CartReducer);
  const [ searchTerm, setSearchTerm ] = useState("");
  console.log(searchTerm);

  const searchHendler = (e) =>{
    setSearchTerm(e.target.value);

  }

  
  
  return (
    <>
      <div className="header">
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container">
            <div className="logo">
              <NavLink to="/">
                <img src={`images/logo1.png`} alt="logo" />
              </NavLink>
            </div>

            <div className="search_bar">
              <input type="search" placeholder="Search for products, brand and More.." 
                onChange={searchHendler}
              />
            </div>
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <NavLink
                  exact
                  className="nav-link"
                  activeClassName="a_active"
                  to="/"
                >
                  Home
                </NavLink>
              </li>

              <li className="nav-item active">
                <NavLink
                  exact
                  className="nav-link"
                  activeClassName="a_active"
                  to="/Products"
                >
                  Products
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/cart">
                  <div className="cart_icon">
                    <span> {totalQuantity} </span> <TiShoppingCart />
                  </div>
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </div>
  
    </>
    
  );

};

export default Navbar;
