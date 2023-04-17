import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import Card from "./Card";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

export default function CardSlider() {
  const [actionMovies, setActionMovies] = useState([]);
  const [animationMovies, setAnimationMovies] = useState([]);

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
        `https://api.themoviedb.org/3/search/movie?api_key=c33414545f69279dbdd28af3020ce178&query=a&with_genres=28&language=fr-FR`
      )
      .then((res) => setActionMovies(res.data.results))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=c33414545f69279dbdd28af3020ce178&query=a&with_genres=16&language=fr-FR`
      )
      .then((res) => setAnimationMovies(res.data.results))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div
      className="cardSlider-container"
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => setShowControls(false)}
    >
      <h1>Action</h1>
      <div className="wrapper">
        <div className={`slider-action left ${!showControls ? "none" : ""}`}>
          <AiOutlineLeft onClick={() => handleDirection("left")} />
        </div>
        <div className="slider" ref={listRef}>
          {actionMovies.map((movie) => {
            return <Card key={movie.id} actionMovieData={movie} />;
          })}
        </div>
        <div className={`slider-action right ${!showControls ? "none" : ""} `}>
          <AiOutlineRight onClick={() => handleDirection("right")} />
        </div>
      </div>

      <h1>Animation</h1>
      <div className="wrapper">
        <div className={`slider-action left ${!showControls ? "none" : ""}`}>
          <AiOutlineLeft onClick={() => handleDirection("left")} />
        </div>
        <div className="slider" ref={listRef}>
          {animationMovies.map((movie) => {
            return <Card key={movie.id} animationMovieData={movie} />;
          })}
        </div>
        <div className={`slider-action right ${!showControls ? "none" : ""} `}>
          <AiOutlineRight onClick={() => handleDirection("right")} />
        </div>
      </div>

    </div>
  );
}
