/* eslint-disable @next/next/no-img-element */
import { useAuth } from "@/context/AuthContext";
import { collection, query, getDocs, onSnapshot } from "firebase/firestore";
import { useState, useEffect } from "react";
import { db } from "@/firebase/config";
import Link from "next/link";

export default function UserDashboard() {
  const [totalBeratSampah, setTotalBeratSampah] = useState(0);
  const { currentUser } = useAuth();

  useEffect(() => {
    const unsubscribe = onSnapshot(
      query(collection(db, `users/${currentUser.uid}/sampah`)),
      (snapshot) => {
        let totalBerat = 0;
        snapshot.forEach((doc) => {
          totalBerat += doc.data().beratSampah;
        });
        setTotalBeratSampah(totalBerat);
      }
    );

    return () => unsubscribe();
  }, [currentUser.uid]);

  return (
    <div>
      <h1 className="text-2xl font-bold uppercase text-center mb-20">
        Welcome, &nbsp;
        <span className="text-green-700">
          {currentUser.email.split("@")[0]}
        </span>
      </h1>
      <main className="bg-white">
        <div className="min-h-screen max-w-7xl mx-auto px-4 py-8 space-y-8 md:px-8 lg:px-16">
          <h1 className="text-4xl font-bold text-center text-green-600">
            Si Bijak Sampah
          </h1>
          <h2 className="text-lg font-semibold text-center">
            Manfaatkan sampahmu dengan bijak!
          </h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            <div className="p-8 rounded-xl shadow-md space-y-4 bg-gray-100 md:col-span-1">
              <h1 className="text-lg font-semibold text-center">
                Hai,&nbsp;
                <Link
                  href="/profile"
                  className="text-blue-500 select-none duration-300 hover:pl-2 cursor-pointer"
                >
                  {currentUser.email.split("@")[0]}
                </Link>
              </h1>
              <div className="flex flex-col items-center space-y-4">
                <div className="w-36 h-36 bg-gray-300 rounded-full overflow-hidden">
                  <Link href="/profile">
                    <img
                      className="object-cover w-full h-full"
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt="User profile"
                    />
                  </Link>
                </div>
                <h1 className="text-center">Total Daur Ulang kamu</h1>
                <span className="px-2 py-1 text-xs font-bold leading-none text-white bg-green-600 rounded">
                  {totalBeratSampah} Kg
                </span>
              </div>
            </div>
            <div className="p-10 rounded-xl shadow-md md:col-span-2">
              <h1 className="text-lg font-semibold">
                Sampah Bagi kamu, bermanfaat bagi orang lain.
              </h1>
              <h1 className="text-lg font-semibold">
                Yuk manfaatkan sampah kamu!
              </h1>
              <div className="flex justify-center py-14">
                <Link href="/inputsampah">
                  <button className="px-8 py-4 rounded-xl font-semibold text-white bg-green-500 hover:bg-green-700">
                    Mulai Daur Ulang
                  </button>
                </Link>
              </div>
            </div>
            <div className="p-8 rounded-xl shadow-md space-y-4 md:col-span-3">
              <h1 className="text-lg font-semibold">
                Butuh barang bekas untuk produk daur ulang kamu?
                <br />
                Temukan berbagai pilihan bahan daur ulang terbaik hanya di sini!
              </h1>

              <div className="flex justify-center">
                <Link href="/cekbarang">
                  <button className="px-8 py-4 rounded-xl font-semibold text-white bg-green-500  hover:bg-green-700">
                    Cari Barang Bekas
                  </button>
                </Link>
              </div>
            </div>
            <div className="p-8 rounded-xl shadow-md space-y-4 md:col-span-3">
              <h1 className="text-lg font-semibold">
                Cek Riwayat Daur Ulang Kamu disini
              </h1>
              <div className="flex justify-center">
                <button className="px-8 py-4 rounded-xl font-semibold text-white bg-gray-500  hover:bg-gray-700">
                  Riwayat Daur Ulang
                </button>
              </div>
            </div>
          </div>
          <div className="p-8 rounded-xl shadow-md">
            <h4 className="mb-2 text-lg font-semibold"> Info Terbaru </h4>
            <p className="text-base">
              {" "}
              Berikut rekomendasi cara daur ulang sampah kamu jadi benda yang
              menarik{" "}
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
