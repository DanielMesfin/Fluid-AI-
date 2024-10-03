"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "Does Fluid AI increase wellbeing and meaning in life?",
    answer:
      "Fluid AI is designed to enhance curiosity, wonder, and awe, which research shows can positively impact wellbeing and provide a greater sense of meaning in life.",
  },
  {
    question: "What can curiosity, wonder, and awe do for you?",
    answer:
      "Curiosity, wonder, and awe can immensely benefit your mental, physical, and professional health. They can lead to increased creativity, improved problem-solving skills, and a greater sense of connection to the world around you.",
  },
  {
    question: "Does Fluid AI increase wellbeing and meaning in life?",
    answer:
      "Yes, Fluid AI is specifically designed to foster experiences of curiosity, wonder, and awe, which have been shown to contribute significantly to overall wellbeing and a sense of purpose in life.",
  },
  {
    question: "What can curiosity, wonder, and awe do for you?",
    answer:
      "These experiences can enhance your cognitive flexibility, boost your creativity, reduce stress, and improve your overall mental and physical health. They can also lead to more meaningful relationships and a deeper appreciation for life.",
  },
  {
    question: "Does Fluid AI increase wellbeing and meaning in life?",
    answer:
      "Absolutely. By regularly engaging with Fluid AI, users report increased feelings of wonder and curiosity in their daily lives, which correlates with higher levels of life satisfaction and a stronger sense of purpose.",
  },
  {
    question: "What can curiosity, wonder, and awe do for you?",
    answer:
      "These powerful emotions can expand your perspective, increase your empathy, boost your learning capacity, and even improve your physical health by reducing inflammation and lowering stress levels.",
  },
];

export default function FAQPage() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems((prev) =>
      prev.includes(index)
        ? prev.filter((item) => item !== index)
        : [...prev, index]
    );
  };

  return (
    <div className="min-h-screen  text-white p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="md:flex md:space-x-8">
          <div className="md:w-1/3 mb-8 md:mb-0">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              What can curiosity, wonder, and awe do for you?
            </h1>
            <p className="text-gray-400 mb-8">
              Research shows that experiencing curiosity and awe can immensely
              benefit our mental, physical, and professional health. Here's a
              brief overview of what curiosity and awe can do for you.
            </p>
          </div>
          <div className="md:w-2/3">
            <div className="space-y-4">
              {faqData.map((item, index) => (
                <div key={index} className="border-b border-gray-700 pb-4">
                  <button
                    className="flex justify-between items-center w-full text-left transition-all delay-300 ease-in-out"
                    onClick={() => toggleItem(index)}
                  >
                    <span className="text-lg">{item.question}</span>
                    {openItems.includes(index) ? (
                      <Minus className="flex-shrink-0" />
                    ) : (
                      <Plus className="flex-shrink-0" />
                    )}
                  </button>
                  {openItems.includes(index) && (
                    <p className="mt-2  transition-all delay-300 ease-in-out text-gray-400">{item.answer}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
