import React from 'react';

const MovieCard = ({ title, image, rate, director }) => {
  return (
    <div className="movie-card">
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <p>Director: {director}</p>
      <p>Rate: {rate}</p>
    </div>
  );
};

export default MovieCard;
