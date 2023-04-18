import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { useLocation, useParams } from "react-router-dom";
import axios from "axios";
import ReviewCard from "../components/ReviewCard";

export default function MovieInfo() {
  const { id } = useParams();
  const location = useLocation();
  const movieData = location.state ? location.state.movie : null;

  const [reviewData, setReviewData] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=c33414545f69279dbdd28af3020ce178&language=en-US&page=1`
      )
      .then((res) => setReviewData(res.data.results));
  }, [id]);

  console.log(reviewData);

  return (
    <div className="movieInfo-container">
      <Navbar />
      <h1>MovieInfo</h1>
      <img src={`https://image.tmdb.org/t/p/w500${movieData.poster_path}`} alt="" />
      
      <h3>{ movieData.title }</h3>
      { movieData.vote_average }⭐ / { movieData.vote_count } votes
      <div className="overview">
        {movieData.overview}
      </div>
      {reviewData.length > 0 &&
      <div className="review-container">
      <h2>Reviews</h2>
      {reviewData.map((review) => {
            return <ReviewCard key={review.id} reviewData={review} />;
          })}
      </div>}
    </div>
  );
}
