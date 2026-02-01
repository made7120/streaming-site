// src/components/HeroBanner.js

import React, { useEffect, useState } from 'react';
import { fetchTrending } from '../services/api';

const HeroBanner = () => {
  const [trendingContent, setTrendingContent] = useState([]);

  useEffect(() => {
    const loadTrending = async () => {
      const trending = await fetchTrending();
      setTrendingContent(trending);
    };
    loadTrending();
  }, []);

  return (
    <div className="hero-banner">
      <h1>Trending Now</h1>
      <div className="banner-slider">
        {trendingContent.map((item) => (
          <div key={item.id} className="slider-item">
            <img src={item.poster} alt={item.title} />
            <div className="slider-title">{item.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroBanner;
