// src/components/BeerCard.js

import React from 'react';

const BeerCard = ({ beer }) => {

  return (
    <div className="beer-card">
      <div className="beer-image">
        <img src={beer.image_url} alt={beer.name} />
      </div>
      <div className="beer-info">
        <h5 className="beer-name">{beer.name}</h5>
        <p className="beer-tagline">{beer.tagline}</p>
        <p className="beer-description">{beer.description}</p>
        <p className="beer-abv">ABV: {beer.abv}%</p>
        <p className="beer-ibu">IBU: {beer.ibu}</p>
      </div>
    </div>
  );
};

export default BeerCard;
