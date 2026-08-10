"use client";

import { useState } from "react";
import Link from "next/link";
import { Plus, Minus } from "lucide-react";
import { faqs } from "@/src/data/faq";
import { whyChooseUs } from "@/src/data/whyChooseUs";

export default function FAQPage() {
  const [openCategory, setOpenCategory] = useState<string | null>(null);
  const [openFaqId, setOpenFaqId] = useState<number | null>(null);

  const toggleCategory = (category: string) => {
    setOpenCategory(openCategory === category ? null : category);
    setOpenFaqId(null); // Close any open FAQ when category changes
  };

  const toggleFAQ = (id: number) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  const whatsappNumber = "2349068909759";
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  // Group FAQs into categories
  const categories = [
    {
      name: "WHY CHOOSE ARIOCK SPACES",
      items: whyChooseUs.slice(0, 4).map((item, index) => ({
        id: 100 + index,
        question: item.title,
        answer: item.description,
      })),
    },
    {
      name: "GENERAL QUESTIONS",
      items: faqs.slice(0, 5),
    },
    {
      name: "DELIVERY & SHIPPING",
      items: faqs.slice(5, 9),
    },
    {
      name: "ORDERING & PAYMENT",
      items: faqs.slice(9),
    },
  ];

  return (
    <div className="bg-[#edebe854]">
      {/* Breadcrumb */}
      <div className="container mx-auto px-6 py-4">
        <div className="text-[13px] text-gray-600">
          <Link href="/" className="hover:underline">
            Home
          </Link>
          <span className="mx-2">/</span>
          <span className="text-dark">FAQs</span>
        </div>
      </div>

      {/* Header */}
      <div className="container mx-auto px-6 py-12 text-center">
        <p className="text-xs tracking-widest text-gray-500 mb-3 uppercase">
          Frequently Asked Questions
        </p>
        <h1 className="text-2xl md:text-5xl font-bold mb-4">GET ANSWERS</h1>
      </div>

      {/* FAQ Categories */}
      <div className="container mx-auto px-6 pb-20">
        <div className="max-w-4xl mx-auto space-y-2">
          {categories.map((category, index) => (
            <div key={index} className="bg-white border-b">
              {/* Category Header */}
              <button
                onClick={() => toggleCategory(category.name)}
                className="w-full px-6 py-5 flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <span className="text-[13px] md:text-base font-medium tracking-wide">
                  {category.name}
                </span>
                {openCategory === category.name ? (
                  <Minus className="w-5 h-5 text-dark" />
                ) : (
                  <Plus className="w-5 h-5 text-dark" />
                )}
              </button>

              {/* Category Content */}
              {openCategory === category.name && (
                <div className="px-6 pb-4">
                  <div className="space-y-3">
                    {category.items.map((item) => (
                      <div
                        key={item.id}
                        className="border-l-2 border-gray-200 pl-4"
                      >
                        <button
                          onClick={() => toggleFAQ(item.id)}
                          className="w-full text-left py-2 flex items-start justify-between group"
                        >
                          <span className="text-sm text-gray-700 group-hover:text-dark transition-colors pr-4">
                            {item.question}
                          </span>
                          <svg
                            className={`w-4 h-4 text-gray-400 transform transition-transform flex-shrink-0 mt-0.5 ${
                              openFaqId === item.id ? "rotate-180" : ""
                            }`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </button>
                        {openFaqId === item.id && (
                          <div className="pt-2 pb-3">
                            <p className="text-sm text-gray-600 leading-relaxed">
                              {item.answer}
                            </p>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* <div className="bg-dark text-white py-16 md:py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Still Have Questions?
            </h2>
            <p className="text-gray-300 mb-8">
              We&apos;re here to help! Get in touch with us via WhatsApp
            </p>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-primary hover:bg-primary-dark text-dark px-10 py-4 font-semibold transition"
            >
              Contact Us on WhatsApp
            </a>
          </div>
        </div>
      </div> */}
    </div>
  );
}
