import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import Card from "../components/Card";

const SearchResult = () => {
  const navigate = useNavigate();
  const [moviesData, setMoviesData] = useState([]);

  const location = useLocation();
  const navSearch = location.state ? location.state.navSearch : null;
  const [search, setSearch] = useState(navSearch);

  console.log(navSearch);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/search/multi?api_key=c33414545f69279dbdd28af3020ce178&language=fr-FR&page=1&include_adult=false&media_type=movieormedia_type=tv&query=${search}`
      )
      .then((res) => setMoviesData(res.data.results));
  }, [search]);

  return (
    <div className="searchResult-container">
      <input type="checkbox" id="check" />
      <nav className="navbar">
        <div className="logo">
          <NavLink to="/">LOGO</NavLink>
        </div>
        <div className="search-box">
          <input
            type="search"
            placeholder="Entrer le titre d'un film"
            id="search-input"
            onChange={(e) => setSearch(e.target.value)}
          />
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

      <div className="results">
        {moviesData.map((movie) => (
          <Card movieData={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
};

export default SearchResult;


//https://api.themoviedb.org/3/search/movie?api_key=c33414545f69279dbdd28af3020ce178&query=${search}&language=fr-FR ${search}