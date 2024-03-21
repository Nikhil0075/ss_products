// src/Card.js
import React from 'react';

const Card = ({ product }) => {
  return (
    <div className="card">
      <h2>{product.title}</h2>
      <p>Subcategory: {product.subcategory}</p>
      <p>Price: ${product.price}</p>
      <p>Popularity: {product.popularity}</p>
    </div>
  );
};

export default Card;
