/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import jenisSampahAnorganik from "./jenisSampah";
import SuccessModal from "./successModal";
import { collection, addDoc } from "firebase/firestore";
import { storage } from "@/firebase/config";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { db } from "@/firebase/config";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";

export default function Input() {
  const [namaSampah, setNamaSampah] = useState("");
  const [jenisSampah, setJenisSampah] = useState("");
  const [beratSampah, setBeratSampah] = useState(0);
  const [fotoSampah, setFotoSampah] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);
  const [error, setError] = useState(null);
  const { currentUser } = useAuth();
  const router = useRouter();

  async function handleSubmit(event) {
    event.preventDefault();
    if (!namaSampah || !jenisSampah || !beratSampah) {
      setError("Please enter email and password");
      return;
    }

    try {
      const userId = currentUser.uid;

      const imageRef = ref(
        storage,
        `users/${userId}/sampah/${fotoSampah.name}`
      );
      await uploadBytes(imageRef, fotoSampah);
      const imageDownloadUrl = await getDownloadURL(imageRef);

      await addDoc(collection(db, `users/${userId}/sampah`), {
        namaSampah: namaSampah,
        jenisSampah: jenisSampah,
        beratSampah: Number(beratSampah),
        fotoSampah: imageDownloadUrl,
      });
      console.log("Data berhasil ditambahkan");
      setShowSuccess(true);
    } catch (error) {
      setError("Error saat menambahkan data", error);
    }
  }

  return (
    <>
      {showSuccess && (
        <SuccessModal
          title="Sukses"
          message="Data berhasil ditambahkan"
          onClose={() => {
            router.push("/user");
            setShowSuccess(false);
          }}
        />
      )}
      <div className="flex justify-center items-center min-h-screen bg-white">
        <div className="max-w-md w-full mx-auto">
          <form
            onSubmit={handleSubmit}
            className="bg-white p-8 rounded-lg shadow-lg shadow-green-500"
          >
            <h2 className="text-xl font-bold mb-10">Input Sampahmu</h2>
            {error && (
              <div className="w-full max-w-[40ch] rounded-lg border-rose-400 border text-center border-solid text-rose-400 py-2 mb-10">
                {error}
              </div>
            )}
            <div className="mb-4">
              <label
                htmlFor="namaSampah"
                className="block text-gray-700 font-bold mb-2"
              >
                Nama Sampah
              </label>
              <input
                type="text"
                id="namaSampah"
                value={namaSampah}
                onChange={(event) => setNamaSampah(event.target.value)}
                className="outline-none duration-300 border-b-2 border-solid border-green-300 focus:border-green-600 text-slate-900 p-2 w-full max-w-[40ch]"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="jenisSampah"
                className="block text-gray-700 font-bold mb-2"
              >
                Jenis Sampah
              </label>
              <input
                type="text"
                id="jenisSampah"
                value={jenisSampah}
                onChange={(event) => setJenisSampah(event.target.value)}
                className="outline-none duration-300 border-b-2 border-solid border-green-300 focus:border-green-600 text-slate-900 p-2 w-full max-w-[40ch]"
                list="jenisSampahList"
              />
              <datalist id="jenisSampahList">
                {jenisSampahAnorganik.map((sampah) => (
                  <option key={sampah} value={sampah} />
                ))}
              </datalist>
            </div>

            <div className="mb-4">
              <label
                htmlFor="beratSampah"
                className="block text-gray-700 font-bold mb-2"
              >
                Berat Sampah (kg)
              </label>
              <input
                type="number"
                id="beratSampah"
                value={beratSampah}
                onChange={(event) => setBeratSampah(event.target.value)}
                className="outline-none duration-300 border-b-2 border-solid border-green-300 focus:border-green-600 text-slate-900 p-2 w-full max-w-[40ch]"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="fotoSampah"
                className="block text-gray-700 font-bold mb-2"
              >
                Foto Sampah
              </label>
              <input
                type="file"
                id="fotoSampah"
                onChange={(event) => setFotoSampah(event.target.files[0])}
                className="outline-none duration-300 border-b-2 border-solid border-green-300 focus:border-green-600 text-slate-900 p-2 w-full max-w-[40ch]"
              />
            </div>

            <div className="mt-8">
              <button
                type="submit"
                className="w-full px-4 py-2 rounded-md text-white font-bold bg-green-500 hover:bg-green-600"
              >
                Submit
              </button>
            </div>
            <div className="mt-2">
              <Link href="/user">
                <button
                  type="submit"
                  className="w-full px-4 py-2 rounded-md text-white font-bold bg-red-500 hover:bg-red-600"
                >
                  Batal
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
