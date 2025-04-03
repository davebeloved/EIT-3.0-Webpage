import React from "react";
// import { useNavigate } from "react-router-dom";
import EITImage from '../assets/eit.jpg'

const AboutEit2025 = () => {
  // const navigate = useNavigate();

  return (
    <div className="lg::py-20 mb-12 px-3 md:px-6 lg:px-10 -mt-52 lg:mt-52">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div>
          <div className="mb-5">
            <div className="flex lg:flex-col lg:justify-start lg:items-start items-center myheading22 justify-center gap-x-3 mb-6">
              <h2 className="hidden md:block  font-poppings text-xl  md:text-2xl text-[#0F3C9E] lg:text-3xl text-center lg:text-justify   font-semibold">
                EIT 3.0
              </h2>
              <h2 className="hidden md:block  font-poppings text-xl  md:text-2xl text-[#0F3C9E] lg:text-3xl text-center lg:text-left  font-semibold">
                Preparing You for Global Opportunities
              </h2>
              <h2 className="block md:hidden  font-poppings text-xl  md:text-2xl text-[#0F3C9E] lg:text-3xl text-center lg:text-justify  font-semibold">
                EIT 3.0 Preparing You for Global Opportunities
              </h2>
            </div>
            <p className="text-justify font-poppings mb-4 text-[14px] md:text-[16px]">
              Emblic Technologies in collaboration with the Emblic Institute of
              Technology, proudly announces EIT 3.0 — an exclusive three-week
              intensive training program aimed at equipping tech lovers and
              enthusiasts with high-demand tech skills at a discounted rate!
            </p>
            <p className="text-justify font-poppings mb-4 text-[16px]">
              Whether you plan on kick-starting your tech career, upgrading your
              existing skills, or switching to explore a new path in technology,
              EIT 3.0 is your gateway to success.
            </p>
            <a
              href="https://eit-registration-form-5bn7s6zgg-davebeloveds-projects.vercel.app/"
              target='_blank'             
              className="mt-2 inline-block mx-auto lg:mx-0 px-10 py-4 bg-[#004875] text-white font-semibold rounded-full shadow-xl transform transition duration-300 hover:scale-110 hover:bg-[#213768] animate-fadeIn delay-450"
            >
              Register for EIT 3.0
            </a>
          </div>
        </div>
        <div className="rounded-xl overflow-hidden lg:h-[90%] lg:mt-4">
          <img
            src={EITImage}
            alt="about eit 3.0"
            className="w-full h-full "
          />
        </div>
      </div>
    </div>
  );
};

export default AboutEit2025;
