import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

const faqs = [
  "How do I make an animated video for free?",
  "How long can videos created with Renderforest animation maker be?",
  "In what quality can I export my animations?",
  "What types of animated videos can I create with Renderforest?",
  "Where can I access more information on how to use Renderforest?",
  "How do I create animations on my phone?",
  "What is animation?",
  "How does an animation maker work?",
];

export default function Accordion() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-gray-50 py-16 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
        {/* Left Title */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Animation Maker FAQ</h2>
        </div>

        {/* Right FAQ List */}
        <div className="md:col-span-2 space-y-4">
          {faqs.map((question, index) => (
            <div
              key={index}
              className="border-b border-gray-300 pb-4 cursor-pointer"
              onClick={() => toggle(index)}
            >
              <div className="flex justify-between items-center">
                <p className="text-gray-800 font-medium text-lg">{question}</p>
                <ChevronDownIcon
                  className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </div>
              {openIndex === index && (
                <div className="mt-2 text-sm text-gray-600">
               
                  This is the answer to the question. You can replace it with the real answer content.
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
