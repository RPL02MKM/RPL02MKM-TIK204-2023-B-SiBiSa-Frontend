/* eslint-disable @next/next/no-img-element */
import { useAuth } from "@/context/AuthContext";
import { collection, query, getDocs, onSnapshot } from "firebase/firestore";
import { useState, useEffect } from "react";
import { db } from "@/firebase/config";
import Link from "next/link";

export default function Riwayat() {
  const [riwayatSampah, setRiwayatSampah] = useState([]);
  const [totalBeratSampah, setTotalBeratSampah] = useState(0);
  const { currentUser } = useAuth();

  useEffect(() => {
    const unsubscribe = onSnapshot(
      query(collection(db, `users/${currentUser.uid}/sampah`)),
      (snapshot) => {
        const list = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setRiwayatSampah(list);

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
    <main className="bg-white  ">
      <div className=" min-h-screen max-w-7xl mx-auto px-2 space-y-6 space-x-4">
        <h1 className="text-4xl text-center font-bold text-green-600">
          Riwayat Daur Ulang
        </h1>
        <h2 className="text-lg text-center">Terus manfaatkan sampah kamu!</h2>
        <div className="grid grid-rows-3 grid-flow-col gap-4">
          <div className="row-span-2 col-span-2 p-8 rounded-xl shadow-md space-y-8">
            <div className="flex flex-col items-center space-y-2">
              <h1 className="text-center bg-gray-300 rounded px-2">
                Total Daur Ulang kamu
              </h1>
              <span className="px-2 py-1 text-xs font-bold leading-none text-white bg-green-600 rounded">
                {totalBeratSampah} Kg
              </span>
            </div>

            {riwayatSampah.map((sampah) => (
              <div
                key={sampah.id}
                className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
              >
                <Link href="/detailriwayat">
                  <img
                    className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                    src={sampah.fotoSampah}
                    alt="image_barang"
                  />
                </Link>
                <div class="flex flex-col justify-between p-4 leading-normal">
                  <h5 class="mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                    {sampah.jenisSampah}
                  </h5>
                  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {sampah.namaSampah}
                  </p>
                  <span className="inline-flex px-2 py-1 mr-auto text-xs font-bold leading-none text-white bg-green-600 rounded">
                    Berat : {sampah.beratSampah} Kg
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
