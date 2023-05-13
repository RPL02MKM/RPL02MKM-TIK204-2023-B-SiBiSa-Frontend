"use client";

import Link from "next/link";
import { useAuth } from "@/context/AuthContext";

export default function Home() {
  const { currentUser } = useAuth();

  return (
    <main className="bg-white">
      <div className="min-h-screen bg-white max-w-7xl mx-auto px-8 py-20">
        <section className="bg-white py-16">
          <div className="container mx-auto">
            <h1 className="text-4xl font-bold mb-4">
              Jual Beli Sampah Anorganik Online dengan <br />
              <span className="bg-gradient-to-r from-green-900 to-green-500 text-transparent bg-clip-text">
                SIBISA (Si Bijak Sampah)
              </span>
            </h1>
            <p className="text-lg max-w-[70ch] text-justify">
              Selamat datang di website jual beli sampah anorganik online kami!
              Kami memudahkan Anda untuk menjual dan membeli berbagai jenis
              sampah anorganik dengan mudah dan efisien. Dari plastik hingga
              logam, semua tersedia di sini. Dengan fitur pencarian dan filter,
              Anda dapat menemukan produk sampah anorganik yang sesuai dengan
              kebutuhan Anda. Kami juga menyediakan informasi dan tips tentang
              pengelolaan sampah anorganik yang efektif.
            </p>
          </div>
          <div className="max-w-7xl mx-auto px-8 py-10">
            <Link href={currentUser ? "/user" : "/login"}>
              <button className="px-8 py-3 text-2xl rounded-2xl text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:bg-green-700 transition duration-150 ease-in-out">
                {currentUser ? "Dashboard" : "Get Stated"}
              </button>
            </Link>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto">
            <h2 className="text-2xl font-medium mb-8">Postingan Terbaru</h2>
          </div>
        </section>
      </div>
    </main>
  );
}
