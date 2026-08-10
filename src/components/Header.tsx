"use client";

import Link from "next/link";
import { useState } from "react";
import { Plus } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [isShopOpen, setIsShopOpen] = useState(false);

  const whatsappNumber = "2349068909759";
  const whatsappLink = `https://wa.me/${whatsappNumber}`;
  const email = "support@ariock.com";
  const phone = "+234-809-675-3355";

  const handleCloseMenu = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsMenuOpen(false);
      setIsClosing(false);
      setIsShopOpen(false);
    }, 300); // Match animation duration
  };

  return (
    <>
      <header className="bg-[#edebe8] border-b border-gray-100 sticky top-0 z-50">
        <nav className="container flex items-center mx-auto h-14 px-6 md:h-[72px]">
          <div className="flex items-center justify-between w-full">
            {/* Mobile: Hamburger + Logo */}
            <div className="flex items-center gap-4 md:hidden">
              <button
                onClick={() => isMenuOpen ? handleCloseMenu() : setIsMenuOpen(true)}
                className="text-gray-700"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
              <Link href="/" className="flex items-center">
                <span className="text-2xl font-bold tracking-tight">
                  Ariock
                </span>
              </Link>
            </div>

            {/* Desktop Logo */}
            <Link href="/" className="hidden md:flex items-center">
              <span className="text-3xl font-bold tracking-tight">Ariock</span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-10 text-sm font-medium">
              <Link
                href="/"
                className="text-gray-700 hover:text-dark transition"
              >
                Home
              </Link>
              <Link
                href="/#products"
                className="text-gray-700 hover:text-dark transition"
              >
                Shop
              </Link>
              <Link
                href="/faq"
                className="text-gray-700 hover:text-dark transition"
              >
                Faq
              </Link>
            </div>

            {/* Icons */}
            <div className="flex items-center gap-4">
              <Link href="/#products" className="hidden md:block">
                <svg
                  className="w-5 h-5 text-gray-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </Link>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="relative"
              >
                <svg
                  className="w-5 h-5 text-gray-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </a>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Drawer */}
      {isMenuOpen && (
        <>
          {/* Overlay */}
          <div
            className={`fixed inset-0 bg-black/50 z-[60] md:hidden ${
              isClosing ? "animate-fade-out" : "animate-fade-in"
            }`}
            onClick={handleCloseMenu}
          />

          {/* Drawer */}
          <div className={`fixed top-0 left-0 h-full w-80 bg-white z-[70] md:hidden overflow-y-auto ${
            isClosing ? "animate-slide-out-left" : "animate-slide-in-left"
          }`}>
            {/* Close Button */}
            <div className="flex justify-end p-6">
              <button
                onClick={handleCloseMenu}
                className="text-gray-700"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Menu Items */}
            <div className="px-6 space-y-1">
              <Link
                href="/"
                className="block py-3 text-dark hover:text-gray-600 transition font-light"
                onClick={handleCloseMenu}
              >
                Home
              </Link>

              {/* Shop with Dropdown */}
              <div className="border-b border-gray-200">
                <button
                  onClick={() => setIsShopOpen(!isShopOpen)}
                  className="flex items-center justify-between w-full py-3 text-dark hover:text-gray-600 transition font-light"
                >
                  <span>Shop</span>
                  <Plus
                    className={`w-5 h-5 transition-transform ${
                      isShopOpen ? "rotate-45" : ""
                    }`}
                  />
                </button>
                {isShopOpen && (
                  <div className="pl-4 pb-3 space-y-2">
                    <Link
                      href="/collection"
                      className="block py-2 text-sm text-gray-600 hover:text-dark transition"
                      onClick={handleCloseMenu}
                    >
                      All Products
                    </Link>
                  </div>
                )}
              </div>

              <Link
                href="/faq"
                className="block py-3 text-dark hover:text-gray-600 transition font-light"
                onClick={handleCloseMenu}
              >
                Faq
              </Link>
            </div>

            {/* Contact Info */}
            <div className="px-6 mt-6 space-y-3 border-t border-gray-200 pt-6">
              <a
                href={`tel:${phone}`}
                className="flex items-center gap-2 text-sm text-gray-600"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                {phone}
              </a>
              <a
                href={`mailto:${email}`}
                className="flex items-center gap-2 text-sm text-gray-600"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                {email}
              </a>
            </div>
          </div>
        </>
      )}
    </>
  );
}
