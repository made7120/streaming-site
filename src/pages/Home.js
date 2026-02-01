// src/pages/Home.js

import React, { useEffect, useState } from 'react';
import HeroBanner from '../components/HeroBanner';
import ContentGrid from '../components/ContentGrid';
import { fetchCategoryContent } from '../services/api';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [kdramas, setKdramas] = useState([]);

  useEffect(() => {
    const loadContent = async () => {
      const moviesData = await fetchCategoryContent('indonesian-movies');
      const kdramasData = await fetchCategoryContent('kdrama');
      setMovies(moviesData);
      setKdramas(kdramasData);
    };
    loadContent();
  }, []);

  return (
    <div className="home">
      <HeroBanner />
      <h2>Indonesian Movies</h2>
      <ContentGrid content={movies} />
      <h2>K-Drama</h2>
      <ContentGrid content={kdramas} />
    </div>
  );
};

export default Home;
