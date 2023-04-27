import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export default function Profile() {
  return (
    <>
      <Head>
        <title>Profil | Nama Anda</title>
        <meta name="description" content="Halaman profil Nama Anda" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-white min-h-screen flex items-center justify-center">
        <div className="max-w-5xl mx-auto px-6 py-8 md:py-16">
          <div className="bg-white grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-1">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="relative w-48 h-48 rounded-full overflow-hidden mx-auto mb-6">
                  <Image
                    src="/profile.png"
                    alt="Foto profil"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <h2 className="text-2xl font-semibold text-center mb-4">
                  Nama Anda
                </h2>
                <p className="text-gray-600 text-center mb-4">@nama_anda</p>
                <div className="flex justify-center mb-6">
                  <Link href="/editProfil">
                    <p className="text-blue-500 hover:underline">Edit Profil</p>
                  </Link>
                </div>
                <div className="border-t border-gray-300 pt-6">
                  <p className="text-gray-600 text-sm mb-2">
                    Email:{' '}
                    <span className="font-semibold">nama_anda@gmail.com</span>
                  </p>
                  <p className="text-gray-600 text-sm mb-2">
                    No Telp: <span className="font-semibold">08123456789</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="md:col-span-2">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold mb-4">Tentang Saya</h2>
                <p className="text-gray-600 leading-relaxed">
                  Saya memiliki keinginan untuk menjual sampah yang terkumpul di
                  rumah saya untuk mengurangi limbah dan membantu lingkungan
                  sekitar. Jika Anda tertarik untuk membeli sampah saya, silakan
                  hubungi saya melalui email atau nomor telepon yang telah
                  tertera.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
