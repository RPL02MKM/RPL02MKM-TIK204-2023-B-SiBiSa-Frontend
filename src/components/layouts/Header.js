import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`bg-white shadow-md py-4 ${
        isScrolled ? "fixed top-0 left-0 w-full" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/">
              <p className="text-3xl font-bold bg-gradient-to-r from-green-900 to-green-500 text-transparent bg-clip-text">
                SIBISA
              </p>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center py-3">
              <Link href="/">
                <p className="ml-2 px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-green-600">
                  Beranda
                </p>
              </Link>
              <Link href="/market">
                <p className="ml-2 px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-green-600">
                  Market Sampah
                </p>
              </Link>
              <Link href="/tentang">
                <p className="ml-2 px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-green-600">
                  Tentang
                </p>
              </Link>
              <Link href="/faq">
                <p className="ml-2 px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-green-600">
                  FAQ
                </p>
              </Link>
              <Link href="/login">
                <button className="ml-6 px-4 py-2 rounded-2xl text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:bg-green-700 transition duration-150 ease-in-out">
                  Masuk
                </button>
              </Link>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
            >
              <svg
                className={`${isMenuOpen ? "hidden" : "block"} h-6 w-6`}
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className={`${isMenuOpen ? "block" : "hidden"} h-6 w-6`}
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className={`${isMenuOpen ? "block" : "hidden"} md:hidden`}>
        <div className="px-2 pt-2 pb-3 sm:px-3">
          <Link href="/market">
            <p className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-green-600">
              Market Sampah
            </p>
          </Link>
          <Link href="/tentang">
            <p className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-green-600">
              Tentang
            </p>
          </Link>
          <Link href="/faq">
            <p className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-green-600">
              Kontak
            </p>
          </Link>
          <Link href="/login">
            <button className="ml-3 mt-4 px-4 py-2 rounded-2xl text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:bg-green-700 transition duration-150 ease-in-out">
              Masuk
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
