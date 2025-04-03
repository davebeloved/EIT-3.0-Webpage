import React from "react";
import { FaCheckCircle } from "react-icons/fa";
// import { useNavigate } from "react-router-dom";

const HowToRegisterForEit = () => {
  // const navigate = useNavigate();

  return (
    <section className="py-1 mb-20 flex justify-">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="  bg-white shadow-xl rounded-xl p-8 lg:p-5 text-center">
          <h2 className="text-center text-[#0F3C9E] my-6 myheading2 font-poppings text-2xl font-semibold">
            How to Register
          </h2>

          <ul className="space-y-5 text-lg text-gray-700 text-left">
            <li className="flex items-start gap-3">
              <FaCheckCircle className="text-[#0F3C9E] mt-1 flex-shrink-0" />
              Click the <strong>"Register Now"</strong> button below.
            </li>
            <li className="flex items-start gap-3">
              <FaCheckCircle className="text-[#0F3C9E] mt-1 flex-shrink-0" />
              Fill out the registration form with your details.
            </li>
            <li className="flex  items-start gap-3">
              <FaCheckCircle className="text-[#0F3C9E] mt-1 flex-shrink-0" />
              Secure your slot by visiting our head office to claim your
              discount and make your course payment at:
            </li>
          </ul>
          <p className="text-justify ml-4 md:ml-8">
            {" "}
            <strong>
              181 Dr. Peter Odili Road, Port Harcourt, Rivers State, Nigeria.
            </strong>
          </p>

          <div className="mt-6">
            <p className="text-lg text-gray-700">
              For inquiries, contact us via:
            </p>
            <p className="text-lg font-semibold text-[#0F3C9E] mt-2">
              📞 +234 0 813 718 9820 <br />
              ✉️ eit@emblictech.com
            </p>
          </div>

          {/* CTA Button */}
          <div className="mt-8">
            <a
              href="https://eit-registration-form-5bn7s6zgg-davebeloveds-projects.vercel.app/"
              target='_blank'
              className="px-12 py-4 bg-[#004875] hover:bg-[#213768]  text-white text-xl font-bold inline-block rounded-full shadow-lg hover:scale-105 transition-all"
            >
              REGISTER NOW
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowToRegisterForEit;
