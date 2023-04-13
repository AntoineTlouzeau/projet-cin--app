import React from "react";
import Navbar from "../components/Navbar";
import { useLocation, useParams } from "react-router-dom";

export default function MovieInfo() {
  const { id } = useParams();
  const location = useLocation();
  const movieData = location.state ? location.state.movie : null;

  // console.log(movieData);

  return (
    <div className="movieInfo-container">
      <Navbar />
      <h1>MovieInfo</h1>
      <img src={`https://image.tmdb.org/t/p/w500${movieData.poster_path}`} alt="" />
      
      <h3>{ movieData.title }</h3>
      <div className="overview">
        {movieData.overview}
      </div>
    </div>
  );
}
