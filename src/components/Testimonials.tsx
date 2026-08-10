"use client";

import { Star } from "lucide-react";
import { testimonials } from "../data/testimonials";
import { useState, useEffect } from "react";

export const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  // Auto-play carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(timer);
  }, []);

  // Handle touch swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 75) {
      // Swipe left
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }

    if (touchStart - touchEnd < -75) {
      // Swipe right
      setCurrentIndex((prev) =>
        prev === 0 ? testimonials.length - 1 : prev - 1
      );
    }
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-16 md:py-20 bg-black text-white">
      <div className="container mx-auto px-4">
        <div
          className="max-w-3xl mx-auto text-center"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div className="flex justify-center mb-4 gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={14}
                fill="#f6bc66"
                className="text-primary shrink-0"
              />
            ))}
          </div>
          <div className="transition-opacity duration-500">
            <p className="text-xl md:text-2xl mb-6">
              &ldquo;{currentTestimonial.text}&rdquo;
            </p>
            <p className="font-semibold uppercase tracking-wide text-sm">
              {currentTestimonial.name}
            </p>
            <p className="text-xs text-gray-400">
              FROM {currentTestimonial.location.toUpperCase()}
            </p>
          </div>

          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                  index === currentIndex ? "bg-[#f6bc66]" : "bg-gray-600"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
