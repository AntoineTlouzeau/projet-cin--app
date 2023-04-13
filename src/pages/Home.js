import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import backgroundImage from "../assets/img/home.jpg";
import axios from "axios";
import CardSlider from "../components/Slider";

const Home = () => {
  

  // useEffect(() => {
  //     axios
  //       .get(
  //         `https://api.themoviedb.org/3/search/movie?api_key=c33414545f69279dbdd28af3020ce178&query=${search}&language=fr-FR`
  //       )
  //       .then((res) => setMoviesData(res.data.results));
  //   }, [search]);

    

  return (
    <div className="home-container">
      <Navbar />
      <div className="hero">
        <img
          src={backgroundImage}
          alt="background"
          className="background-image"
        />
      </div>
      <CardSlider/>
    </div>
  );
};

export default Home;
