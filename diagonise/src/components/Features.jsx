// Features.js
import React, { useState } from 'react';
import Carousel from 'react-multi-carousel';
import FeatureItem from './FeatureItem';
import daun from "../assets/daun1.png";
import 'react-multi-carousel/lib/styles.css';

export const Features = () => {
  const [activeItemIndex, setActiveItemIndex] = useState(0);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const totalItems = 4;

  const handleBeforeChange = (nextIndex) => {
    setActiveItemIndex(nextIndex);
  };

  return (
    <section className="feature" id="features">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="feature-bx wow zoomIn">
              <h2>Features</h2>
              <Carousel
                responsive={responsive}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={3000}
                arrows={false} // Hide arrows
                className="owl-carousel owl-theme feature-slider"
                beforeChange={handleBeforeChange}
              >
                <FeatureItem image={daun} alt="feature_1" title="Tomato Disease Detection using Leaf Images" />
                <FeatureItem image={daun} alt="feature_2" title="Classification of Tomato Diseases" />
                <FeatureItem image={daun} alt="feature_3" title="Explanation of Diseases" />
                <FeatureItem image={daun} alt="feature_4" title="Recommending the Right Treatment for Disease" />
              </Carousel>
              <div className="circle-container">
                {Array.from({ length: totalItems }, (_, index) => (
                  <div
                    key={index}
                    className={`circle ${index === activeItemIndex ? 'active' : ''}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
