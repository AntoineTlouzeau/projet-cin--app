import React from "react";
import Slider from "./Slider";

export default function CardSlider() {
  return (
    <div className="cardSlider-container">
      <Slider title="Action" genreId={28} />
      <Slider title="Comédie" genreId={35} />
      <Slider title="Crime" genreId={80} />
      <Slider title="Drame" genreId={18} />
      <Slider title="Historique" genreId={36} />
      <Slider title="Horreur" genreId={27} />
      <Slider title="Animation" genreId={16} />
    </div>
  );
}
