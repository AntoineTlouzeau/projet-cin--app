import React, { useState } from "react";
import { IoPlayCircleSharp } from "react-icons/io5";
import { BsCheck } from "react-icons/bs";
import { AiOutlineInfoCircle, AiOutlinePlus } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Card({ movieData }) {
  const [isHovered, setIsHovered] = useState(false);
  // const genres = useSelector((state) => state.netflix.genres)

  // console.log(genres);

  const navigate = useNavigate();

  const handleMoreInfoClick = () => {
    navigate(`/movieInfo/${movieData.id}`, { state: { movie: movieData } });
  };

  const handleMouseEnter = (event) => {
    if (event.clientX < window.innerWidth * 0.9) {
      setIsHovered(true);
    }
  };

  return (
    <div
      className="card-container"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}   
    >
      <img
        src={`https://image.tmdb.org/t/p/w500${movieData.backdrop_path}`}
        alt="movie"
      />

      {isHovered && (
        <div className="hover">
          <div className="image-video-container">
            <img
              src={`https://image.tmdb.org/t/p/w500${movieData.backdrop_path}`}
              alt="movie"
              onClick={handleMoreInfoClick}
            />
            {/* <video
              src={video}
              autoPlay
              loop
              muted
              onClick={() => navigate("/player")}
            /> */}
          </div>
          <div className="info-container">
            <h3
              className="name"
              onClick={handleMoreInfoClick}
            >
              {movieData.title}
            </h3>
            <div className="icons">
              <div className="controls">
                <IoPlayCircleSharp
                  title="Lecture"
                  //   onClick={() => navigate("/player")}
                />
               
                {/* {isLiked ? ( */}
                <BsCheck
                  title="Retirer de la liste"
                  // onClick={() =>
                  //   dispatch(
                  //     removeFromLikedMovies({ movieId: movieData.id, email })
                  //   )
                  // }
                />
                {/* ) : ( */}
                <AiOutlinePlus
                  title="Ajouter à ma liste"
                  // onClick={addToList}
                />
                {/* )} */}
              </div>
              <div className="info">
                <AiOutlineInfoCircle
                  title="Plus d'infos"
                  onClick={handleMoreInfoClick}
                />
              </div>
            </div>
            {/* <div className="genres">
              <ul>
                {movieData.genres.map((genre) => (
                  <li key={genre}>{genre}</li>
                ))}
              </ul>
            </div> */}
          </div>
        </div>
      )}
    </div>
  );
}
