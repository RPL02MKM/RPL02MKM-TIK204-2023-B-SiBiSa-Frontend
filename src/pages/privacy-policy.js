import Head from 'next/head';
import Layout from '../components/layouts/Layouts';

export default function PrivacyPolicy() {
  return (
    <Layout>
      <Head>
        <title>Kebijakan Privasi - Website Jual Beli Sampah Anorganik</title>
      </Head>
      <section className="bg-white py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-8 text-center">
            Kebijakan Privasi
          </h1>
          <p className="mb-8">
            Kami menghargai privasi Anda dan berkomitmen untuk melindungi
            informasi pribadi Anda. Kebijakan privasi ini menjelaskan bagaimana
            kami mengumpulkan, menggunakan, dan melindungi informasi pribadi
            Anda ketika Anda menggunakan situs web kami.
          </p>
          <h2 className="text-lg font-bold mb-2">
            Informasi yang Kami Kumpulkan
          </h2>
          <p className="mb-8">
            Kami dapat mengumpulkan informasi pribadi dari Anda, termasuk nama,
            alamat email, alamat rumah, nomor telepon, dan informasi pembayaran
            ketika Anda melakukan pembelian di situs web kami.
          </p>
          <h2 className="text-lg font-bold mb-2">
            Bagaimana Kami Menggunakan Informasi Anda
          </h2>
          <p className="mb-2">
            Kami dapat menggunakan informasi pribadi Anda untuk:
          </p>
          <div className="pl-8 mb-8">
            <ul className="list-disc pl-8">
              <li>
                Memproses pembelian Anda dan mengirimkan produk yang Anda beli
              </li>
              <li>Mengirimkan informasi tentang produk dan layanan kami</li>
              <li>
                Mengirimkan pemberitahuan tentang perubahan kebijakan privasi
              </li>
              <li>Menjawab pertanyaan dan permintaan dukungan pelanggan</li>
            </ul>
          </div>
          <h2 className="text-lg font-bold mb-2">
            Bagaimana Kami Melindungi Informasi Anda
          </h2>
          <p className="mb-8">
            Kami mengambil langkah-langkah yang sesuai untuk melindungi
            informasi pribadi Anda dari akses yang tidak sah, penggunaan, atau
            pengungkapan. Kami menggunakan sistem keamanan yang terbaru dan
            update secara berkala untuk melindungi informasi pribadi Anda.
          </p>
          <h2 className="text-lg font-bold mb-2">Tautan ke Situs Web Lain</h2>
          <p className="mb-8">
            Situs web kami mungkin berisi tautan ke situs web lain yang tidak
            dioperasikan oleh kami. Jika Anda mengklik tautan dari pihak ketiga,
            Anda akan diarahkan ke situs web pihak ketiga tersebut. Kami sangat
            menyarankan Anda untuk meninjau kebijakan privasi setiap situs web
            yang Anda kunjungi.
          </p>
          <h2 className="text-lg font-bold mb-2">
            Perubahan pada Kebijakan Privasi
          </h2>
          <p className="mb-8">
            Kami dapat mengubah kebijakan privasi ini dari waktu ke waktu. Jika
            kami melakukan perubahan materi pada kebijakan privasi ini, kami
            akan memberi tahu Anda dengan memposting kebijakan privasi yang
            diperbarui di situs web kami. Kami mendorong Anda untuk memeriksa
            kebijakan privasi secara berkala agar tetap up-to-date tentang
            bagaimana kami melindungi informasi pribadi Anda.
          </p>
          <h2 className="text-lg font-bold mb-2">Hubungi Kami</h2>
          <p className="mb-8">
            Jika Anda memiliki pertanyaan atau masalah tentang kebijakan privasi
            kami, jangan ragu untuk menghubungi kami melalui email atau telepon
            yang tercantum di situs web kami.
          </p>
          <p className="mb-8">
            Terima kasih telah mempercayakan informasi pribadi Anda kepada kami.
            Kami menghargai kepercayaan Anda dan berkomitmen untuk melindungi
            privasi Anda.
          </p>
        </div>
      </section>
    </Layout>
  );
}