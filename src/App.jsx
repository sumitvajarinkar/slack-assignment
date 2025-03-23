import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustedBy from "./components/TrustedBy";
import FeatureSection from "./components/FeatureSection";
import "./App.css";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <TrustedBy />
      <FeatureSection />
    </div>
  );
}

export default App;
