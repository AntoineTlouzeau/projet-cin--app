import React from "react";
import Navbar from "../components/Navbar";
import backgroundImage from "../assets/img/home.jpg";

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
      </div>
    </div>
  );
};

export default Home;
