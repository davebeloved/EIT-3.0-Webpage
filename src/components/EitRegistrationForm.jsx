import React, { useState } from "react";
import Head from "../Head";
import DiscountModal from "./DiscountModal";

const EitRegistrationForm = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [courseName, setCourseName] = useState("");
  const [discount, setDiscount] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Get the course name and set the discount based on the course
    const selectedCourse = event.target.course.value;
    let courseDiscount = 0;

    switch (selectedCourse) {
      case "ethicalHacking":
        courseDiscount = 20;
        break;
      case "mobileApp":
        courseDiscount = 15;
        break;
      case "softwareEngineering":
        courseDiscount = 25;
        break;
      case "programming":
        courseDiscount = 18;
        break;
      case "virtualAssistance":
        courseDiscount = 10;
        break;
      case "graphicDesign":
        courseDiscount = 12;
        break;
      case "uiuxDesign":
        courseDiscount = 22;
        break;
      default:
        courseDiscount = 0;
    }

    setCourseName(selectedCourse);
    setDiscount(courseDiscount);
    setIsModalOpen(true); // Open the modal after form submission
  };
  return (
    <section className="py-24 bg-gradient-to-r from-blue-100 to-purple-100">
      <Head title="EIT 3.0 Registration" path="/eit2025/register" />
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-center text-[#0F3C9E]   font-poppings text-2xl font-semibold">
          EIT 3.0 Registration Form
        </h2>
        <p className="text-center text-gray-500 mb-5 lg:w-[500px] mx-auto">
          To be part of the leading tech giants at EIT 3.0, please register by
          filling up the registration form below:
        </p>
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 lg:p-12 rounded-xl shadow-2xl space-y-6"
        >
          {/* Student's Details */}
          <div>
            <label className="block font-medium mb-1" htmlFor="name">
              Name:
            </label>
            <input
              id="name"
              type="text"
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-[#0F3C9E] transition"
              placeholder="Enter your full name"
            />
          </div>
          <div>
            <label className="block font-medium mb-1" htmlFor="address">
              Address:
            </label>
            <input
              id="address"
              type="text"
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-[#0F3C9E] transition"
              placeholder="Enter your address"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block font-medium mb-1" htmlFor="qualification">
                Educational Qualification:
              </label>
              <input
                id="qualification"
                type="text"
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-[#0F3C9E] transition"
                placeholder="Your qualification"
              />
            </div>
            <div>
              <label className="block font-medium mb-1" htmlFor="occupation">
                Occupation:
              </label>
              <input
                id="occupation"
                type="text"
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-[#0F3C9E] transition"
                placeholder="Your occupation"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block font-medium mb-1" htmlFor="mobile">
                Mobile No.:
              </label>
              <input
                id="mobile"
                type="text"
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-[#0F3C9E] transition"
                placeholder="e.g., +234 123 4567"
              />
            </div>
            <div>
              <label className="block font-medium mb-1" htmlFor="email">
                Email Address:
              </label>
              <input
                id="email"
                type="email"
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-[#0F3C9E] transition"
                placeholder="you@example.com"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="block font-medium mb-1" htmlFor="dob">
                Date of Birth:
              </label>
              <input
                id="dob"
                type="date"
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-[#0F3C9E] transition"
              />
            </div>
            <div>
              <label className="block font-medium mb-1" htmlFor="gender">
                Gender:
              </label>
              <select
                id="gender"
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-[#0F3C9E] transition"
              >
                <option value="">Select Gender</option>
                <option value="female">Female</option>
                <option value="male">Male</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <label className="block font-medium mb-1" htmlFor="marital">
                Marital Status:
              </label>
              <select
                id="marital"
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-[#0F3C9E] transition"
              >
                <option value="">Select Status</option>
                <option value="single">Single</option>
                <option value="married">Married</option>
              </select>
            </div>
          </div>
          {/* Training Details */}
          <div>
            <label className="block font-medium mb-1" htmlFor="course">
              Course Name:
            </label>
            <select
              id="course"
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-[#0F3C9E] transition"
            >
              <option value="">Select a Course</option>
              <option value="ethicalHacking">Ethical Hacking</option>
              <option value="mobileApp">Mobile App Development</option>
              <option value="softwareEngineering">Software Engineering</option>
              <option value="programming">Programming</option>
              <option value="virtualAssistance">Virtual Assistance</option>
              <option value="graphicDesign">Graphic Design</option>
              <option value="uiuxDesign">UI/UX Design</option>
            </select>
          </div>
          <div>
            <label className="block font-medium mb-1" htmlFor="knowledge">
              Previous Knowledge of the Course:
            </label>
            <select
              id="knowledge"
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-[#0F3C9E] transition"
            >
              <option value="">Select your level</option>
              <option value="below10">Below 10%</option>
              <option value="below50">Below 50%</option>
              <option value="above70">Greater than 70%</option>
            </select>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="mt-4 px-10 py-3 bg-[#0F3C9E] text-white font-semibold rounded-full shadow-lg hover:bg-[#0C3680] transition"
            >
              Submit
            </button>
          </div>
        </form>
      </div>

      <DiscountModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        courseName={courseName}
        discount={discount}
      />
    </section>
  );
};

export default EitRegistrationForm;
