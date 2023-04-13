import React, { useState } from "react";
import { IoPlayCircleSharp } from "react-icons/io5";
import { RiThumbUpFill, RiThumbDownFill } from "react-icons/ri";
import { BsCheck } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";
import { BiChevronDown } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";

export default function Card({ movieData }) {
  const [isHovered, setIsHovered] = useState(false);

    const navigate = useNavigate();

  const handleMoreInfoClick = () => {
    navigate(`/movieInfo/${movieData.id}`, { state: { movie: movieData } });
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
              //   onClick={() => navigate("/player")}
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
              // onClick={() => navigate("/player")}
            >
              {movieData.title}
            </h3>
            <div className="icons">
              <div className="controls">
                <IoPlayCircleSharp
                  title="Lecture"
                  //   onClick={() => navigate("/player")}
                />
                <RiThumbUpFill title="J'aime" />
                <RiThumbDownFill title="Pas pour moi" />
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
                <BiChevronDown
                  title="Plus d'infos"
                  onClick={handleMoreInfoClick}
                />
              </div>
            </div>
            {/* <div className="genres flex">
              <ul className="flex">
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
