import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import backgroundImage from "../assets/img/home.jpg";
import MovieLogo from "../assets/img/homeTitle.webp";
import axios from "axios";
import Slider from "../components/Slider";
import { FaPlay } from "react-icons/fa";
import { AiOutlineInfoCircle } from "react-icons/ai";

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="hero">
        <img
          src={backgroundImage}
          alt="background"
          className="background-image"
        />
        <div className="container">
          <div className="logo">
            <img src={MovieLogo} alt="Movie Logo" />
          </div>
          <div className="buttons">
            <button>
              <FaPlay /> Lecture
            </button>
            <button>
              <AiOutlineInfoCircle /> Plus d'infos
            </button>
          </div>
        </div>
      </div>
      <div className="home-slider">
        <Slider />
      </div>
    </div>
  );
};

export default Home;
