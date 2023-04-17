import React from "react";
import Navbar from "../components/Navbar";
import backgroundImage from "../assets/img/home.jpg";
import CardSlider from "../components/Slider";

const Home = () => {
  const token = localStorage.getItem("token");
  if (!token) {
    alert("pas de token");
  }
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
      <CardSlider />
    </div>
  );
};

export default Home;
