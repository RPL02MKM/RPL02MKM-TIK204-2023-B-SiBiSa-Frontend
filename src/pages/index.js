import Head from 'next/head'
import Header from '../components/layouts/Header'
import Footer from '../components/layouts/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>SIBISA - Jual Beli Sampah Anorganik Online</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main>
        <section className="bg-white text-black py-16">
          <div className="container mx-auto">
            <h1 className="text-4xl font-bold mb-4">Jual Beli Sampah Anorganik Online dengan SIBISA (Si Bijak Sampah)</h1>
            <p className="text-lg">
            Selamat datang di website jual beli sampah anorganik online kami! Kami memudahkan Anda untuk menjual dan membeli berbagai jenis sampah anorganik dengan mudah dan efisien. 
            Dari plastik hingga logam, semua tersedia di sini. Dengan fitur pencarian dan filter, Anda dapat menemukan produk sampah anorganik yang sesuai dengan kebutuhan Anda. 
            Kami juga menyediakan informasi dan tips tentang pengelolaan sampah anorganik yang efektif. 
            Dengan sistem pembayaran yang aman dan mudah digunakan, Anda dapat membeli atau menjual sampah anorganik dengan percaya diri. 
            Jaga lingkungan dan kesehatan manusia dengan bergabung bersama kami sekarang!
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto">
            <h2 className="text-2xl font-medium mb-8">Produk Terbaru</h2>
            {/* list produk terbaru */}
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}

