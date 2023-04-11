import React from "react";
import background from "../assets/img/login.jpg";

export default function BackgroundImage() {
  return (
    <div className="background-container">
      <img src={background} alt="background" />
    </div>
  );
}
