import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import Card from "./Card";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

export default function CardSlider({ title, genreId }) {
  const [movies, setMovies] = useState([]);

  const [showControls, setShowControls] = useState(false);
  const [sliderPostion, setSliderPosition] = useState(0);
  const listRef = useRef();

  const handleDirection = (direction) => {
    let distance = listRef.current.getBoundingClientRect().x - 70;
    if (direction === "left" && sliderPostion > 0) {
      listRef.current.style.transform = `translateX(${230 + distance}px)`;
      setSliderPosition(sliderPostion - 1);
    }
    if (direction === "right" && sliderPostion < 4) {
      listRef.current.style.transform = `translateX(${-230 + distance}px)`;
      setSliderPosition(sliderPostion + 1);
    }
  };

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/discover/movie?api_key=c33414545f69279dbdd28af3020ce178&language=fr-FR&sort_by=popularity.desc&with_genres=${genreId}`
        
      )
      .then((res) => setMovies(res.data.results))
      .catch((err) => console.log(err));
  }, [genreId]);

  return (
    <div
      className="cardSlider-container"
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => setShowControls(false)}
    >
      <h2>{title}</h2>
      <div className="wrapper">
        <div className={`slider-action left ${!showControls ? "none" : ""}`}>
          <AiOutlineLeft onClick={() => handleDirection("left")} />
        </div>
        <div className="slider" ref={listRef}>
          {movies.map((movie) => {
            return <Card key={movie.id} movieData={movie} />;
          })}
        </div>
        <div className={`slider-action right ${!showControls ? "none" : ""}`}>
          <AiOutlineRight onClick={() => handleDirection("right")} />
        </div>
      </div>
    </div>
  );
}
