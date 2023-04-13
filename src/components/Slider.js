import React from "react";
import CardSlider from "./CardSlider";

export default function Slider() {
  return (
    <div className="Slider-container">
      <CardSlider title="Action" genreId={28} />
      <CardSlider title="Comédie" genreId={35} />
      <CardSlider title="Crime" genreId={80} />
      <CardSlider title="Drame" genreId={18} />
      <CardSlider title="Historique" genreId={36} />
      <CardSlider title="Horreur" genreId={27} />
      <CardSlider title="Animation" genreId={16} />
    </div>
  );
}
