import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/layouts/Layouts';

export default function AboutUs() {
  return (
    <>
      <Layout>
        <Head>
          <title>Tentang Kami - Jual Beli Sampah Anorganik</title>
          <meta
            name="description"
            content="Informasi tentang kami di Jual Beli Sampah Anorganik"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className="min-h-screen bg-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:text-center">
              <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Tentang Kami
              </h2>
              <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                SIBISA merupakan platform online yang memungkinkan masyarakat
                untuk membeli dan menjual sampah anorganik dengan mudah.
              </p>
            </div>

            <div className="mt-20 flex flex-wrap">
              <div className="p-6 w-full md:w-1/2">
                <h3 className="text-lg font-medium text-gray-900">Misi Kami</h3>
                <p className="mt-2 text-gray-500">
                  Kami didedikasikan untuk membantu mengurangi jumlah sampah
                  yang terbuang sia-sia di lingkungan kita dan mempromosikan
                  gaya hidup berkelanjutan.
                </p>
              </div>

              <div className="p-6 w-full md:w-1/2">
                <h3 className="text-lg font-medium text-gray-900">
                  Jenis Sampah yang Kami Terima
                </h3>
                <ul className="mt-2 text-gray-500">
                  <li>Plastik</li>
                  <li>Kertas</li>
                  <li>Logam</li>
                  <li>dan lain sebagainya</li>
                </ul>
              </div>
            </div>

            <div className="mt-10 prose prose-lg text-gray-500">
              <p>
                Setelah dikumpulkan, sampah anorganik akan diolah dan didaur
                ulang agar dapat digunakan kembali. Untuk memulai menggunakan
                layanan kami, Anda dapat membuat akun dan memilih jenis sampah
                yang ingin dijual atau dibeli. Kami juga menyediakan sistem
                pembayaran yang aman dan mudah, serta pengiriman sampah yang
                terjamin.
              </p>
              <p>
                Terima kasih telah memilih Jual Beli Sampah Anorganik sebagai
                platform jual beli sampah Anda. Bersama-sama, kita dapat menjaga
                lingkungan dan menciptakan masa depan yang lebih baik.
              </p>
            </div>

            <div className="mt-10">
              <Link href="/contact">
                <span className="text-base font-medium text-green-600 hover:text-green-700 cursor-pointer transition duration-150 ease-in-out">
                  Hubungi Kami &rarr;
                </span>
              </Link>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
