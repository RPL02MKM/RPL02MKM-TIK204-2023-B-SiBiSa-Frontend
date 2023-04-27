import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Profile() {
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [noTelp, setNoTelepon] = useState();
  const [jenisKelamin, setJenisKelamin] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Lakukan proses simpan data ke database atau kirim ke API
    console.log('Profil anda berhasil diubah!');
  };

  const jenisKelamin2 = ['Perempuan', 'Laki-laki', 'Lainnya'];

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-auto px-10">
        <form
          onSubmit={handleSubmit}
          className="bg-white p-10 rounded-lg shadow-none "
        >
          <h2 className="text-xl font-bold mb-0">Profil Saya</h2>
          <h1 className="text-lg font-normal mb-4">
            Kelola informasi profil Anda untuk mengontrol, melindungi dan
            mengamankan akun
          </h1>
          <hr></hr>

          <div className="relative w-48 h-48 rounded-full overflow-hidden mx-auto mb-4">
            <Image
              src="/profile.png"
              alt="Foto profil"
              layout="fill"
              objectFit="cover"
            />
          </div>

          <div className="flex justify-center">
            <div className="mb-4">
              <label
                htmlFor="username"
                className="block text-gray-700 font-bold mb-2"
              >
                Username
              </label>
              <input
                type="text"
                id="Username"
                placeholder="Nama Pengguna"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
                className="block w-80 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>
          </div>

          <div className="flex w-auto justify-center">
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 font-bold mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="NamaPengguna@gmail.com"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className="block w-80 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />

              <div className="mb-4">
                <label
                  htmlFor="noTelp"
                  className="mt-4 block text-gray-700 font-bold mb-2"
                >
                  Nomor Telepon
                </label>
                <input
                  type="text"
                  inputMode="numeric"
                  id="noTelp"
                  value={noTelp}
                  onChange={(event) => setNoTelepon(event.target.value)}
                  className="block w-80 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="jenisKelamin"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Jenis Kelamin
                </label>
                <input
                  type="text"
                  id="jenisKelamin"
                  onChange={(event) => setJenisKelamin(event.target.value)}
                  className="block w-80 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  list="jenisKelaminList"
                />
              </div>

              <datalist id="jenisKelaminList">
                {jenisKelamin2.map((kelamin) => (
                  <option key={kelamin} value={kelamin} />
                ))}
              </datalist>
            </div>
          </div>

          <div className="flex justify-center pr-20">
            <div className="flex pr-20 mt-0">
              <button
                type="submit"
                className="mx-auto px-4 py-2 rounded-md text-white font-bold bg-green-500 hover:bg-green-600"
              >
                Simpan
              </button>
              <Link href="/">
                <button
                  type="submit"
                  className="mx-auto px-4 py-2 rounded-md text-white font-bold bg-red-500 hover:bg-red-600 ml-1"
                >
                  Batal
                </button>
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
