// src/pages/MoviePage.js

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieDetail } from '../services/api';

const MoviePage = () => {
  const { id } = useParams();
  const [movieDetail, setMovieDetail] = useState(null);

  useEffect(() => {
    const loadMovieDetail = async () => {
      const data = await fetchMovieDetail(id);
      setMovieDetail(data);
    };
    loadMovieDetail();
  }, [id]);

  if (!movieDetail) return <div>Loading...</div>;

  return (
    <div className="movie-detail">
      <img src={movieDetail.poster} alt={movieDetail.title} />
      <h1>{movieDetail.title}</h1>
      <p>{movieDetail.description}</p>
      <div>Rating: {movieDetail.rating}</div>
      <div>Genre: {movieDetail.genre}</div>
      <div>Year: {movieDetail.year}</div>
      {/* Embed Video Player */}
      <iframe src={movieDetail.videoUrl} title="Movie Player" />
    </div>
  );
};

export default MoviePage;
