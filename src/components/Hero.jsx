import React from "react";
import "../App.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <span>
          Slack is where the <br /> future works
        </span>
        <p>
          Transform the way you work with one place for <br/> everyone and everything
          you need to get stuff done.
        </p>
        <div className="hero-buttons">
          <button className="btn-primary">Try for Free</button>
          <button className="sign-up">Sign Up with Google</button>
        </div>
      </div>
      <div className="hero-image">
        <img src="https://via.placeholder.com/500x300" alt="Slack UI" />
      </div>
    </section>
  );
};

export default Hero;
