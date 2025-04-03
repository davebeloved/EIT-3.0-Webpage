import React from "react";
import {
  FaClock,
  FaMapMarkerAlt,
  FaUsers,
  FaCalendarAlt,
} from "react-icons/fa";

const TrainingDetails = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-gray-200">
      <div className="container mx-auto px-6 lg:px-12">
        <div className=" mx-auto bg-white shadow-lg rounded-2xl p-8">
          {/* Header */}
          <h2 className="text-center text-[#0F3C9E] my-6 myheading2 font-poppings text-2xl font-semibold">
            Training Details
          </h2>

          {/* Training Info */}
          <div className="space-y-4 text-gray-700">
            <p className="flex items-center text-lg">
              <FaCalendarAlt className="text-[#0F3C9E] mr-3" size={22} />
              <span>
                <strong>Days:</strong> Monday to Friday
              </span>
            </p>
            <p className="flex items-center text-lg">
              <FaClock className="text-[#0F3C9E] mr-3" size={22} />
              <span>
                <strong>Time:</strong> From 9:00 AM
              </span>
            </p>
            <p className="flex items-start text-lg">
              <FaMapMarkerAlt
                className="text-[#0F3C9E] mr-3 flex-shrink-0"
                size={22}
              />
              <span>
                <strong>Venue:</strong> Emblic Technologies Head Office, <br />
                181 Dr. Peter Odili Road, Port Harcourt, Rivers State, Nigeria.
              </span>
            </p>
          </div>

          {/* Target Audience Section */}
          <div className="mt-10">
            <h3 className="text-2xl font-semibold text-[#0F3C9E] text-center">
              Target Audience
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
              {[
                "Students",
                "Graduates",
                "Tech Enthusiasts",
                "Professionals",
                "Entrepreneurs",
                "Freelancers",
              ].map((audience, index) => (
                <li
                  key={index}
                  className="flex items-center bg-blue-100 rounded-lg p-3 text-gray-800 shadow-sm"
                >
                  <FaUsers className="text-[#0F3C9E] mr-3" size={20} />
                  {audience}
                </li>
              ))}
            </ul>
          </div>

          {/* Call to Action */}
          <div className="mt-10 text-center">
            <p className="text-lg text-gray-700 font-medium">
              Take advantage of this rare opportunity to acquire premium tech
              skills at a fraction of the original cost.
            </p>
            <p className="text-xl font-bold text-[#0F3C9E] mt-2">
              Don’t miss out — spaces are limited!
            </p>
            <p className="text-lg font-semibold text-gray-800 mt-1">
              Learn from the best — become the best!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrainingDetails;
