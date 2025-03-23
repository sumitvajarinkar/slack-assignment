import React from "react";
import "../App.css";

const FeatureSection = () => {
  return (
    <section className="feature">
      <div className="feature-image">
        <img src="https://via.placeholder.com/400x250" alt="Feature" />
      </div>
      <div className="feature-content">
        <h2>Now is your moment to build a <br/> better tomorrow</h2>
        <p>We've seen what the future can be. Now it's time to decide <br /> what it will be.</p>
        <button className="watch-video">Watch Video</button>
      </div>
    </section>
  );
};

export default FeatureSection;
