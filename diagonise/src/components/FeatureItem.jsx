// FeatureItem.js
import React from 'react';

const FeatureItem = ({ image, alt, title }) => {
  return (
    <div className="item">
      <img src={image} alt={alt} />
      <h5>{title}</h5>
    </div>
  );
};

export default FeatureItem;
