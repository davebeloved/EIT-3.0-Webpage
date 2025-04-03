import React from "react";

const Eit2025HeroSection = () => {
  return (
    <div>
      <section className="relative w-full lg:h-screen h-[70vh] mt-16">
        {/* Background Image with Overlay */}
        <img
          src="/eit2025/eitbannar.jpg"
          alt="Hero Background"
          className="absolute inset-0 object-cover object-top w-full "
        />
      </section>
    </div>
  );
};

export default Eit2025HeroSection;
