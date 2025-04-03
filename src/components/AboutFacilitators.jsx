import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const AboutFacilitators = () => {
  return (
    <section className="py-16 bg-[#004875] my-10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-center mb-10 myheading3  font-poppings text-2xl font-semibold">
            {" "}
            About our Facilitators
          </h2>
        </div>
        <div className="max-w-4xl mx-auto text-center mb-6">
          <p className="text-lg text-white leading-relaxed">
            Our team of expert facilitators will provide you with the knowledge,
            tools, and support you need to excel in your chosen tech field. From
            interactive sessions to one-on-one guidance, you’ll receive
            top-notch training tailored to industry standards.
          </p>
          <p className="text-lg text-white mt-4 leading-relaxed">
            At EIT 3.0, you'll be learning from the best in the industry!
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          <ul className="space-y-4">
            <li className="text-white font-semibold font-poppings text-[16px]">
              Our facilitators are:
            </li>
            <li className="flex items-start">
              <FaCheckCircle
                className="text-yellow-300 mt-1 mr-3 flex-shrink-0"
                size={24}
              />
              <span className="text-lg text-white">
                Certified Professionals – Holding globally recognized
                certifications in their fields.
              </span>
            </li>
            <li className="flex items-start">
              <FaCheckCircle
                className="text-yellow-300 mt-1 mr-3 flex-shrink-0"
                size={24}
              />
              <span className="text-lg text-white">
                Industry Experts – With years of hands-on experience working on
                real-world projects.
              </span>
            </li>
            <li className="flex items-start">
              <FaCheckCircle
                className="text-yellow-300 mt-1 mr-3 flex-shrink-0"
                size={24}
              />
              <span className="text-lg text-white">
                Experienced Trainers – Skilled at simplifying complex concepts
                and guiding you through practical exercises.
              </span>
            </li>
            <li className="flex items-start">
              <FaCheckCircle
                className="text-yellow-300 mt-1 mr-3 flex-shrink-0"
                size={24}
              />
              <span className="text-lg text-white">
                Passionate Mentors – Committed to helping you achieve your
                career goals and succeed in the tech industry.
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutFacilitators;
