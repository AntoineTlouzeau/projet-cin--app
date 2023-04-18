import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [navSearch, setNavSearch] = useState("");

  const handleSearch = () => {
    navigate("/searchresult", { state: { navSearch: navSearch } });
  };

  const signOut = () => {
    document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    localStorage.removeItem("userId");
    navigate("/signin");
  };
  return (
    <div>
      <input type="checkbox" id="check" />
      <nav className="navbar">
        <div className="logo">
          <NavLink to="/">LOGO</NavLink>
        </div>
        <form className="search-box" onSubmit={handleSearch}>
          <input
            type="search"
            placeholder="Entrer le titre d'un film"
            id="search-input"
            onChange={(e) => setNavSearch(e.target.value)}
          />
          <span
            className="fa fa-search"
            type="submit"
            onClick={handleSearch}
          ></span>
        </form>
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
          <li>
            <button
              className="fa fa-power-off"
              onClick={() => signOut()}
            ></button>
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
