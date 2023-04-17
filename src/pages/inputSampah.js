import { useState } from 'react';
import Link from 'next/link';

export default function InputSampah() {
  const [namaSampah, setNamaSampah] = useState('');
  const [jenisSampah, setJenisSampah] = useState('');
  const [beratSampah, setBeratSampah] = useState(0);
  const [fotoSampah, setFotoSampah] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Lakukan proses simpan data ke database atau kirim ke API
    console.log('Data sampah berhasil disimpan!');
  };

  const jenisSampahAnorganik = [
    'Plastik',
    'Kertas',
    'Kaleng',
    'Kaca',
    'Besi',
    'Aluminium',
    'Seng',
    'Tembaga',
    'Botol bekas',
    'Kardus bekas',
    'Gelas pecah',
    'Keramik',
    'Lembaran baja',
    'Baterai bekas',
    'Aki bekas',
    'Pipa PVC',
    'Kawat',
    'Tutup botol',
    'Tutup kaleng',
    'Tutup botol plastik',
  ];

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="max-w-md w-full mx-auto">
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-lg shadow-lg"
        >
          <h2 className="text-xl font-bold mb-4">Input Sampahmu</h2>

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
              className="block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
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
              className="block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
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
              className="block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
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
              className="block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
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
            <Link href="/">
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
  );
}
