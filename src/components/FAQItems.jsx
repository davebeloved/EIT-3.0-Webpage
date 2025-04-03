import React, { useState } from "react";

const FAQItems = ({ question, answer, onToggle, isOpen }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg border border-gray-200 mb-4">
      <button
        className="w-full text-left px-6 py-4 flex items-center justify-between bg-blue-100 hover:bg-blue-200 transition duration-300"
        onClick={onToggle}
      >
        <h4 className="text-lg font-semibold text-blue-800 font-poppings text-justify">
          {question}
        </h4>
        <svg
          className={`w-6 h-6 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      {isOpen && (
        <div className="p-6 text-gray-700">
          <p className="font-poppings text-justify">{answer}</p>
        </div>
      )}
    </div>
  );
};

export default FAQItems;
