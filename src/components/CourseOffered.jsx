import React from "react";
import { coursesOffered } from "../data";

const CoursesOffered = () => {
  return (
    <div className="px-3 md:px-6 lg:px-10 mb-20 mt-20 lg:mt-28">
      <div>
        <h2 className="text-center text-[#0F3C9E] myheading2 font-poppings text-2xl font-semibold">
          Courses Offered
        </h2>
      </div>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {coursesOffered.map((course, i) => {
          const { name, desc, icon, bgcol, path } = course;
          return (
            <a
              target="_blank"
              href={path}
              key={i}
              className=" flex flex-col gap-y-2  shadow-lg py-4 px-2 rounded-lg bg-white transition transform hover:scale-105 hover:shadow-2xl"
            >
              <div
                style={{ backgroundColor: bgcol }}
                className="p-2 rounded-lg flex items-center justify-center text-2xl"
              >
                {icon}
              </div>
              <div className="px-2">
                <h3 className="font-poppings font-medium text-xl">{name}</h3>
                <p className="text-sm text-gray-600">{desc}</p>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default CoursesOffered;
