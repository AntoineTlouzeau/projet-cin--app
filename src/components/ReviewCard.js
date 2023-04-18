import React from "react";

export default function ReviewCard({ reviewData }) {
  const dateFormater = (date) => {
    return new Date(date).toLocaleDateString("fr-FR", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    });
  };

  return (
    <div className="reviewCard-container">
      <div>
      {reviewData.author_details.avatar_path !== null && (
        <img
          src={`https://secure.gravatar.com/avatar${reviewData.author_details.avatar_path}`}
          alt=""
        />)}
        Auteur : {reviewData.author}, posté le :{" "}
        {dateFormater(reviewData.created_at)}
      </div>
      <div>{reviewData.content}</div>
      <div>-------------------------------------------------------------</div>
    </div>
  );
}
