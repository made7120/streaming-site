// src/components/MovieCard.js

import React from 'react';
import { useNavigate } from 'react-router-dom';

const MovieCard = ({ item }) => {
  const navigate = useNavigate();
  
  const handleClick = () => {
    navigate(`/movie/${item.id}`);
  };

  return (
    <div className="movie-card" onClick={handleClick}>
      <img src={item.poster} alt={item.title} />
      <div className="movie-title">{item.title}</div>
      <div className="movie-rating">{item.rating}</div>
    </div>
  );
};

export default MovieCard;
