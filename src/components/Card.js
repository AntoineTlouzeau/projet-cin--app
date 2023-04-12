import React from 'react'

export default function Card({movieData}) {


  return (
    <div className='card-container'>
        <img
        src={`https://image.tmdb.org/t/p/w500${movieData.backdrop_path}`}
        alt="movie"
      />
    </div>
  )
}




