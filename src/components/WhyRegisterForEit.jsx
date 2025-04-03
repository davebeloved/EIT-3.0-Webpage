import React from "react";
import {
  FaHands,
  FaChalkboardTeacher,
  FaNetworkWired,
  FaCertificate,
  FaRocket,
  FaTools,
} from "react-icons/fa";

const WhyRegister = () => {
  const features = [
    {
      icon: <FaHands className="text-4xl text-indigo-600" />,
      text: "Hands-On Learning: Practical, real-world projects to reinforce your skills.",
    },
    {
      icon: <FaChalkboardTeacher className="text-4xl text-indigo-600" />,
      text: "Expert Instructors: Learn from seasoned professionals with industry experience.",
    },
    {
      icon: <FaNetworkWired className="text-4xl text-indigo-600" />,
      text: "Networking Opportunities: Connect with fellow participants and industry leaders.",
    },
    {
      icon: <FaCertificate className="text-4xl text-indigo-600" />,
      text: "Certification: Get a professional certificate upon completion.",
    },
    {
      icon: <FaRocket className="text-4xl text-indigo-600" />,
      text: "Career Boost: Gain skills that employers are actively seeking.",
    },
    {
      icon: <FaTools className="text-4xl text-indigo-600" />,
      text: "Cutting-Edge Resources: Access advanced tools and state-of-the-art facilities.",
    },
  ];

  return (
    <section className="py-6 bg-gradient-to-r from-blue-50 via-white to-purple-50">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-[#0F3C9E] my-6 myheading2 font-poppings text-2xl font-semibold">
          {" "}
          Why Register for EIT 3.0?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-start bg-white p-6 rounded-lg shadow-lg transition transform hover:-translate-y-1 hover:shadow-2xl"
            >
              <div className="mr-4">{feature.icon}</div>
              <div className="flex-1">
                <p className="text-lg text-gray-700">{feature.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyRegister;
