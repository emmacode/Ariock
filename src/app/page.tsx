"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { products } from "@/src/data/products";
import { whyChooseUs } from "@/src/data/whyChooseUs";
import { Testimonials } from "../components/Testimonials";
import { ArrowRight } from "lucide-react";

export default function Home() {
  const whatsappNumber = "2349068909759";
  const heroImages = [
    "/furniture/2.png",
    "/furniture/3.png",
    "/furniture/4.png",
  ];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [heroImages.length]);

  const handleProductClick = (product: (typeof products)[0]) => {
    const message = encodeURIComponent(product.whatsappMessage);
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");
  };
  return (
    <div className="flex flex-col">
      {/* Hero Section - Large Image with Overlay */}
      <section className="relative h-[500px] md:h-[650px] bg-gray-900">
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10" />
        <div className="absolute inset-0 z-0">
          <Image
            key={currentImageIndex}
            src={heroImages[currentImageIndex]}
            alt="Hero"
            fill
            sizes="100vw"
            className="object-contain transition-opacity duration-1000"
            priority
          />
        </div>
        <div className="absolute inset-0 z-20 flex items-end justify-center px-4 pb-12 md:p-12 text-white">
          <div className="max-w-4xl space-y-4 md:space-y-6">
            <p className="text-xs md:text-sm tracking-widest uppercase">
              Curated For Every Space
            </p>
            <h1 className="text-3xl md:text-6xl font-bold">
              Furnish Smarter. Save More.
            </h1>
            <p className="text-sm md:text-lg mx-auto max-w-2xl">
              Source premium furniture directly from trusted global suppliers
              and save up to 50% compared to local market prices.
            </p>
            <div className="flex gap-4">
              <Link
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-dark px-8 h-10 flex items-center font-medium hover:bg-gray-100 transition text-xs md:text-sm"
              >
                SHOP NOW
              </Link>
              <Link
                href="/#products"
                className="border-2 border-white text-white px-8 h-10 flex items-center font-medium hover:bg-white hover:text-dark transition text-xs md:text-sm"
              >
                BROWSE
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Scrolling Categories Strip */}
      <div className="bg-transparent border-b border-[#d5d4d2] py-6 md:py-10 overflow-hidden">
        <div className="flex animate-scroll">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="flex items-center gap-9 md:gap-12 px-6 whitespace-nowrap"
            >
              <span className="text-base text-dark font-bold px-5 tracking-wide">
                Tables & Desks
              </span>
              <span className="text-base text-dark font-bold px-5 tracking-wide">
                Ergonomic Furniture
              </span>
              <span className="text-base text-dark font-bold px-5 tracking-wide">
                Ergonomic Furniture
              </span>
              <span className="text-base text-dark font-bold px-5 tracking-wide">
                Offices
              </span>
              <span className="text-base text-dark font-bold px-5 tracking-wide">
                Tech Accessories
              </span>
            </div>
          ))}
        </div>
      </div>

      <section className="grid grid-cols-1 md:grid-cols-2 pt-20">
        {/* Image 1 */}
        <div className="relative h-[400px] md:h-[500px] overflow-hidden order-1 md:order-2">
          <Image
            src="/furniture/8.png"
            alt="Outdoor Furniture"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-contain"
          />
        </div>

        {/* Why Choose Ariock Spaces */}
        <div className="bg-dark p-8 md:py-12 md:px-[100px] flex flex-col gap-5 justify-center h-[400px] md:h-[500px] order-2 md:order-1">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Why Choose Ariock Spaces?
          </h2>
          <ul className="pl-5 space-y-2">
            {/* {whyChooseUs.slice(0, 4).map((item) => ( */}
            <li className="text-white font-light text-sm">✓ Save up to 50%</li>
            <li className="text-white font-light text-sm">
              ✓ Trusted Global Suppliers
            </li>
            <li className="text-white font-light text-sm">
              ✓ Transparent Pricing
            </li>
            <li className="text-white font-light text-sm">
              ✓ Delivery Across Nigeria
            </li>
            {/* ))} */}
          </ul>
          <Link
            href="/faq"
            className="inline-block bg-white text-dark px-6 h-10 flex items-center text-sm font-medium w-fit btn-slide"
          >
            Learn More
          </Link>
        </div>

        {/* Image 2 */}
        <div className="relative h-[400px] md:h-[500px] overflow-hidden order-3">
          <Image
            src="/furniture/1.png"
            alt="Dining Space"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-contain"
          />
        </div>

        {/* Refresh Your Space */}
        <div className="bg-dark p-8 md:py-12 md:px-[100px] flex flex-col gap-5 justify-center h-[400px] md:h-[500px] order-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            From One Chair to Complete Spaces
          </h2>
          <p className="text-sm text-white/80 max-w-md">
            Whether you&apos;re furnishing your home, setting up an office,
            opening a café, or delivering a commercial project, Ariock Spaces
            sources quality furniture through our trusted global supplier
            network -&gt; from sourcing to delivery.
          </p>
          <Link
            href="/collection"
            className="inline-block bg-white text-dark px-6 h-10 flex items-center text-sm font-medium w-fit btn-slide"
          >
            Get Started
          </Link>
        </div>
      </section>

      {/* Ariock Offers */}
      <section id="products" className="py-16 md:py-20 bg-[#a9a39b08]">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-xl md:text-3xl font-light">
              Shop by Collection
            </h2>
            <Link
              href="/collection"
              className="text-xs gap-2 md:text-sm border border-dark h-10 px-6 flex items-center font-light"
            >
              <span>View all</span>
              <ArrowRight />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.slice(5, 9).map((product) => (
              <div key={product.id} className="group cursor-pointer">
                <div className="relative overflow-hidden">
                  <div className="aspect-square relative">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>

                  {/* Overlay on hover */}
                  <div className="absolute inset-0 rounded-md bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Button at bottom of image - shows on hover */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                    <button
                      onClick={() => handleProductClick(product)}
                      className="w-full bg-white btn-slide text-dark py-3 rounded-full text-xs font-medium transition-all duration-300 hover:bg-primary"
                    >
                      {/* Order on WhatsApp */}
                      Place Order
                    </button>
                  </div>
                </div>

                <div className="p-4">
                  <p className="text-xs text-gray-500 mb-1 uppercase tracking-wide">
                    ARIOCK
                  </p>
                  <h3 className="text-sm font-medium mb-2">{product.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />

      {/* Sticky Contact Us Button */}
      <Link
        href={`https://wa.me/${whatsappNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 bg-[#f6bc66] hover:bg-[#c4b59d] text-dark px-6 py-3 text-sm font-medium transition-all duration-300 shadow-lg z-50"
      >
        Contact Us
      </Link>
    </div>
  );
}
