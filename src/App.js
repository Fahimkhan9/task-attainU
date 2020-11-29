import React from "react";
import HeroSection from "./components/HeroSection/HeroSection";
import HeroSectionCard from "./components/HeroSection/HeroSectionCard";
import NavigationBar from "./components/Navbar/NavigationBar";
import "./components/HeroSection/HeroSection.css";
import Batch from "./components/Batch/Batch";
import WhoIsItFor from "./components/WhoIsItFor/WhoIsItFor";
import Help from "./components/Help/Help";
import CourseHighlight from "./components/CourseHgihlight/CourseHighlight";

const App = () => {
  return (
    <div>
      <div className="hero">
        <NavigationBar />
        <HeroSection />
      </div>

      <HeroSectionCard />
      <Batch />
      <WhoIsItFor />
      <Help />
      <CourseHighlight />
    </div>
  );
};

export default App;