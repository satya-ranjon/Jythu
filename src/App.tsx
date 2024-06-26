import React from "react";
import HeroSection from "./components/home/HeroSection";
import Navbar from "./components/home/Navbar";

const App: React.FC = () => {
  return (
    <div className=" font-inter">
      <Navbar />
      <HeroSection />
    </div>
  );
};

export default App;
