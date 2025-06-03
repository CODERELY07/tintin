import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

const faqs = [
  {
    question: "Lorem ipsum dolor sit amet?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec ipsum at magna porta tincidunt.",
  },
  {
    question: "Sed do eiusmod tempor incididunt?",
    answer: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
  },
  {
    question: "Ut enim ad minim veniam?",
    answer: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    question: "Duis aute irure dolor in reprehenderit?",
    answer: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    question: "Excepteur sint occaecat cupidatat non proident?",
    answer: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    question: "Curabitur pretium tincidunt lacus?",
    answer: "Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra.",
  },
  {
    question: "Praesent blandit laoreet nibh?",
    answer: "Praesent blandit laoreet nibh. Fusce convallis metus id felis luctus adipiscing. Pellentesque habitant morbi tristique senectus.",
  },
  {
    question: "Maecenas malesuada elit lectus felis?",
    answer: "Maecenas malesuada elit lectus felis, malesuada ultricies. Curabitur et ligula. Ut molestie a, ultricies porta urna.",
  },
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
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Lorem Ipsum FAQ</h2>
        </div>

        {/* Right FAQ List */}
        <div className="md:col-span-2 space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-b border-gray-300 pb-4 cursor-pointer"
              onClick={() => toggle(index)}
            >
              <div className="flex justify-between items-center">
                <p className="text-gray-800 font-medium text-lg">{faq.question}</p>
                <ChevronDownIcon
                  className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </div>
              {openIndex === index && (
                <div className="mt-2 text-sm text-gray-600">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
