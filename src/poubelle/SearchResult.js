import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "../components/Card";

export default function SearchResult() {
  const [moviesData, setMoviesData] = useState([]);
  const [search, setSearch] = useState("a");

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=c33414545f69279dbdd28af3020ce178&query=${search}&language=fr-FR`
      )
      .then((res) => setMoviesData(res.data.results));
  }, [search]);

  return (
    <div className="searchResult-container">
      <div className="form-container">
        <form>
          <input
            type="text"
            placeholder="Entrez le titre d'un film"
            id="search-input"
            onChange={(e) => setSearch(e.target.value)}
          />
          <input type="submit" value="Rechercher" />
        </form>
      </div>
      <div className="results">
        {moviesData.map((movie) => (
          <Card movieData={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
}

{
  /* {moviesData.map((movie) => (
        <div key={movie.id}>
          <h3>{movie.title}</h3>
          <p>{movie.overview}</p>
        </div>
      ))} */
}
