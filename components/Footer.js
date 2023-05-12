import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white py-8">
      <div className="max-w-7xl px-6  container mx-auto ">
        <nav className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left">
            <p className="text-sm font-medium">
              &copy; 2023 SIBISA. All rights reserved.
            </p>
          </div>

          <div className="flex justify-center md:justify-end items-center mt-4 md:mt-0">
            <Link href="/about">
              <p className="text-gray-500 hover:text-green-500 mx-4">
                Tentang Kami
              </p>
            </Link>
          </div>
        </nav>
      </div>
    </footer>
  );
}
