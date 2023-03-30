import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <input type="checkbox" id="check" />
      <nav className="navbar">
        <div className="logo">
          <NavLink to="/">LOGO</NavLink>
        </div>
        <div className="search-box">
          <input type="search" placeholder="Entrer le titre d'un film" />
          <span className="fa fa-search"></span>
        </div>
        <ul>
          <li>
            <NavLink to="/watchlist">Watchlist</NavLink>{" "}
          </li>
          <li>
            <NavLink to="/forum">Forum</NavLink>{" "}
          </li>
          <li>
            <NavLink to="/users">
              <span className="fa fa-user"></span>
            </NavLink>
          </li>
        </ul>
        <label htmlFor="check" className="bar">
          <span className="fa fa-bars" id="bars"></span>
          <span className="fa fa-times" id="times"></span>
        </label>
      </nav>
    </div>
  );
};

export default Navbar;
