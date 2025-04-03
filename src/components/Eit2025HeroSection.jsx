import React from "react";
import HeroBannar from '../assets/eitbannar.jpg'
const Eit2025HeroSection = () => {
  return (
    <div>
      <section className="relative w-full lg:h-screen h-[70vh] mt-20">
        {/* Background Image with Overlay */}
        <img
          src={HeroBannar}
          alt="Hero Background"
          className="absolute inset-0 object-cover object-top w-full "
        />
      </section>
    </div>
  );
};

export default Eit2025HeroSection;
