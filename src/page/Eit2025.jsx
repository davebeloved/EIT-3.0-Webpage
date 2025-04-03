import React from "react";
import Eit2025HeroSection from "../components/Eit2025HeroSection";
import AboutEit2025 from "../components/AboutEit2025";
import CoursesOffered from "../components/CourseOffered";
import WhyRegister from "../components/WhyRegisterForEit";
import TrainingDetails from "../components/TrainingDetails";
import HowToRegisterForEit from "../components/HowToRegisterForEit";
import AboutFacilitators from "../components/AboutFacilitators";
import Eit2025Faq from "../components/Eit2025Faq";

const Eit2025 = () => {
  return (
    <div className="overflow-hidden font-sans antialiased text-gray-800">
      {/* HERO SECTION */}
      <Eit2025HeroSection />

      <AboutEit2025 />

      {/* Courses Offered Card */}
      <CoursesOffered />

      {/* WHY CHOOSE US  */}
      <WhyRegister />

      {/* ABOUT OUR FACILITATORS SECTION */}
      <AboutFacilitators />

      {/* TRAINING DETAILS SECTION */}
      <TrainingDetails />

      {/* HOW TO REGISTER SECTION */}
      <HowToRegisterForEit />
      <Eit2025Faq />
    </div>
  );
};

export default Eit2025;
