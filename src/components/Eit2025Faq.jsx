import React, { useState } from "react";
import FAQItems from "./FAQItems";
import { EitFaqData } from "../data";

const Eit2025Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <div className="  px-3 md:px-6 lg:px-10 my-20 ">
      <h2 className="text-center mb-14 myheading2 font-poppings text-2xl font-semibold">
        Frequently Asked Questions
      </h2>
      <div className="w-full max-w-4xl mx-auto">
        {EitFaqData.map((item, index) => (
          <FAQItems
            key={index}
            question={item.question}
            answer={item.answer}
            isOpen={openIndex === index}
            onToggle={() => handleToggle(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Eit2025Faq;
