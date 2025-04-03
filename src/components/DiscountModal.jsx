import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import { FaRegSmile } from "react-icons/fa"; // For the congratulatory icon

const DiscountModal = ({ isOpen, onClose, courseName, discount }) => {
  return (
    <Transition
      show={isOpen}
      enter="transition ease-out duration-300 transform"
      enterFrom="opacity-0 translate-y-4"
      enterTo="opacity-100 translate-y-0"
      leave="transition ease-in duration-300 transform"
      leaveFrom="opacity-100 translate-y-0"
      leaveTo="opacity-0 translate-y-4"
    >
      <div
        className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50"
        onClick={onClose}
      >
        <div
          className="bg-white p-8 rounded-xl w-full max-w-lg shadow-xl"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="text-center">
            {/* Congratulation Icon */}
            <FaRegSmile className="mx-auto text-6xl text-yellow-500 animate-pulse" />
            <h2 className="text-2xl font-bold text-[#0F3C9E] mt-4">
              Congratulations!
            </h2>
            <p className="mt-2 text-lg text-gray-700">
              You've Unlocked an Exclusive Discount!
            </p>
            <p className="mt-4 text-xl font-semibold text-[#0F3C9E]">
              Thank you for registering for{" "}
              <span className="text-xl font-bold text-blue-600">
                {courseName}
              </span>
              !
            </p>
            <p className="mt-2 text-lg text-gray-700">
              You’ve received an incredible{" "}
              <span className="font-bold text-green-500">{discount}%</span>{" "}
              discount on your training fee.
            </p>

            <div className="mt-6 space-y-4 text-left text-gray-700">
              <h3 className="font-semibold text-lg">Next Steps:</h3>
              <p>1. Visit our Head Office at:</p>
              <p className="font-semibold">
                181 Dr. Peter Odili Road, Port Harcourt, Rivers State
              </p>
              <p>
                2. Present your unique code:{" "}
                <strong className="font-semibold">_________</strong> to make
                your payment and secure your spot.
              </p>
            </div>

            <div className="mt-6 text-sm text-red-600">
              <h3 className="font-semibold text-md">Important Notice:</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>🚫 We do NOT accept online payments.</li>
                <li>
                  🚫 Do NOT make payment to any account number or individual
                  claiming to represent us.
                </li>
                <li>
                  🚫 We are not responsible for any loss due to unauthorized
                  payments.
                </li>
              </ul>
            </div>

            <div className="mt-8">
              <button
                onClick={onClose}
                className="px-6 py-3 bg-[#0F3C9E] text-white font-semibold rounded-lg w-full shadow-lg hover:bg-[#0C3680] transition"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  );
};

export default DiscountModal;
