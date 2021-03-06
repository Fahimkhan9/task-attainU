import React from "react";
import HeroSection from "./components/HeroSection/HeroSection";
import HeroSectionCard from "./components/HeroSection/HeroSectionCard";
import NavigationBar from "./components/Navbar/NavigationBar";
import "./components/HeroSection/HeroSection.css";
import Batch from "./components/Batch/Batch";
import WhoIsItFor from "./components/WhoIsItFor/WhoIsItFor";
import Help from "./components/Help/Help";
import CourseHighlight from "./components/CourseHgihlight/CourseHighlight";
import StudentProjects from "./components/StudentProjects/StudentProjects";
import PaymentOptions from "./components/PaymentOptions/PaymentOptions";
import LookingFor from "./components/LookingFor/LookingFor";
import InThePress from "./components/InThePress/InThePress";
import GetStartedForm from "./components/GetStartedForm/GetStartedForm";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div className="">
      <div className="hero">
        <NavigationBar />
        <HeroSection />
      </div>

      <HeroSectionCard />
      <Batch />
      <WhoIsItFor />
      <Help />

      <CourseHighlight />
      <StudentProjects />
      <PaymentOptions />
      <LookingFor />
      <InThePress />
      <GetStartedForm />
      <Footer />
    </div>
  );
};

export default App;
