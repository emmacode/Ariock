"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { products } from "@/src/data/products";

export default function CollectionPage() {
  const whatsappNumber = "2349068909759";
  const [gridCols, setGridCols] = useState(4);

  const handleProductClick = (product: (typeof products)[0]) => {
    const message = encodeURIComponent(product.whatsappMessage);
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");
  };

  const getGridClass = () => {
    switch (gridCols) {
      case 2:
        return "grid-cols-1 sm:grid-cols-2";
      case 3:
        return "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3";
      case 4:
        return "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4";
      default:
        return "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4";
    }
  };

  return (
    <div className="min-h-screen bg-[#edebe854]">
      <div className="container mx-auto px-6 py-4">
        <div className="text-[13px] text-gray-600">
          <Link href="/" className="hover:underline">
            Home
          </Link>
          <span className="mx-2">/</span>
          <span className="text-dark">Products</span>
        </div>
      </div>

      <div className="container mx-auto px-6 py-8 text-center">
        <h1 className="text-3xl md:text-[44px] font-bold mb-3">ALL PRODUCTS</h1>
        <p className="text-gray-600 text-xs">
          Source now, not later. Explore beautifully curated pieces...
        </p>
      </div>

      <div className="container mx-auto px-6 pb-20">
        <div className="flex items-center justify-between mb-6">
          <p className="text-sm text-gray-600">{products.length} Products</p>
          {/* Grid View Toggle */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setGridCols(2)}
              className={`w-10 h-10 border flex items-center justify-center rounded-md transition-colors border-[#E0E0E0] ${
                gridCols === 2 ? "bg-[#f4f4f4]" : "bg-transparent"
              }`}
              aria-label="2 columns"
            >
              <div className="flex gap-0.5">
                <div className={`w-0.5 h-4 ${gridCols === 2 ? "bg-dark" : "bg-[#d2d2d3]"}`}></div>
                <div className={`w-0.5 h-4 ${gridCols === 2 ? "bg-dark" : "bg-[#d2d2d3]"}`}></div>
              </div>
            </button>
            <button
              onClick={() => setGridCols(3)}
              className={`w-10 h-10 border flex items-center justify-center rounded-md transition-colors ${
                gridCols === 3 ? "bg-[#f4f4f4]" : "bg-transparent"
              }`}
              aria-label="3 columns"
            >
              <div className="flex gap-0.5">
                <div className={`w-0.5 h-4 ${gridCols === 3 ? "bg-dark" : "bg-[#d2d2d3]"}`}></div>
                <div className={`w-0.5 h-4 ${gridCols === 3 ? "bg-dark" : "bg-[#d2d2d3]"}`}></div>
                <div className={`w-0.5 h-4 ${gridCols === 3 ? "bg-dark" : "bg-[#d2d2d3]"}`}></div>
              </div>
            </button>
            <button
              onClick={() => setGridCols(4)}
              className={`w-10 h-10 border flex items-center justify-center rounded-md transition-colors ${
                gridCols === 4 ? "bg-[#f4f4f4]" : "bg-transparent"
              }`}
              aria-label="4 columns"
            >
              <div className="flex gap-0.5">
                <div className={`w-0.5 h-4 ${gridCols === 4 ? "bg-dark" : "bg-[#d2d2d3]"}`}></div>
                <div className={`w-0.5 h-4 ${gridCols === 4 ? "bg-dark" : "bg-[#d2d2d3]"}`}></div>
                <div className={`w-0.5 h-4 ${gridCols === 4 ? "bg-dark" : "bg-[#d2d2d3]"}`}></div>
                <div className={`w-0.5 h-4 ${gridCols === 4 ? "bg-dark" : "bg-[#d2d2d3]"}`}></div>
              </div>
            </button>
          </div>

          
        </div>

        <div className={`grid ${getGridClass()} gap-6`}>
          {products.map((product) => (
            <div key={product.id} className="group cursor-pointer">
              <div className="relative overflow-hidden">
                <div className="aspect-square relative">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                {/* Overlay on hover */}
                <div className="absolute rounded-md inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Button at bottom of image - shows on hover */}
                <div className="absolute bottom-0 left-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                  <button
                    onClick={() => handleProductClick(product)}
                    className="w-full bg-white btn-slide text-dark py-3 rounded-full text-xs font-medium transition-all duration-300"
                  >
                    Place Order
                  </button>
                </div>
              </div>

              <div className="py-4">
                <p className="text-xs text-gray-500 mb-1 uppercase tracking-wide">
                  ARIOCK
                </p>
                <h3 className="text-sm font-medium mb-2">{product.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
