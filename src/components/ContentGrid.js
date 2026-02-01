// src/components/ContentGrid.js

import React from 'react';
import MovieCard from './MovieCard';

const ContentGrid = ({ content }) => {
  return (
    <div className="content-grid">
      {content.map((item) => (
        <MovieCard key={item.id} item={item} />
      ))}
    </div>
  );
};

export default ContentGrid;
