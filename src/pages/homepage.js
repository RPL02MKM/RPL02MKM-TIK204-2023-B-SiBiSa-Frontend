import Layout from '@/components/layouts/Layouts'
import Link from 'next/link';

export default function homepage () {
  return (
    <Layout>
      <main className="bg-white  ">
        <div className=" min-h-screen max-w-7xl mx-auto px-2 space-y-6 space-x-4">
          <h1 className="text-4xl text-center font-bold text-green-600">
            Si Bijak Sampah
          </h1>
          <h2 className="text-lg text-center">
            Manfaatkan sampahmu dengan bijak!
          </h2>
        <div className="grid grid-rows-3 grid-flow-col gap-4">
            <div className="row-span-4 p-8 rounded-xl shadow-md space-y-4 space-x-4">
              <h1 className='text-center font-semibold'>Hai, User</h1>
              <div className="container mx-0 flex min-w-full flex-col items-center space-y-4">
                <img className='inline object-cover w-36 h-36 rounded-lg shadow-lg antialiased' src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'></img>
                <h1 className='text-center'>Total Daur Ulang kamu</h1>
              <span class="col-span-2 px-2 py-1 text-xs font-bold leading-none text-indigo-100 bg-indigo-700 rounded"> 0 Kg
              </span>

              </div>
              
            </div>
            <div className="col-span-2 p-8 rounded-xl shadow-md space-y-4 ">
              <h1>Sampah Bagi kamu , bermanfaat bagi orang lain</h1>
              <h1>yuk manfaatkan sampah kamu !</h1>
              <div class="container mx-0 flex min-w-full flex-col items-center">
                <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-16 rounded ">Mulai Daur Ulang</button>
              </div>
            </div>
            <div className="col-span-2 p-8 rounded-xl shadow-md space-y-4">
              <h1>Butuh barang bekas untuk produk daur  ulang kamu ?</h1>
              <h1>Temukan berbagai pilihan bahan daur ulang terbaik hanya di sini!</h1>
            <div class="container mx-0 flex min-w-full flex-col items-center">
                <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-16 rounded ">Cari Barang Bekas</button>
              </div>
              </div>
            
            <div className="row-span-2 col-span-2 p-8 rounded-xl shadow-md space-y-8">
              <h1>Cek Riwayat Daur Ulang Kamu disini</h1>
              <div className="container mx-0 flex min-w-full flex-col items-center">
                <button className="bg-zinc-500 hover:bg-zinc-700 text-white font-bold py-2 px-16 rounded ">Riwayat Daur Ulang</button>
              </div>
            </div>
            
        </div>
          <div className="p-8 rounded-xl shadow-md">
                <h4 className="mb-2 text-lg font-semibold"> Info Terbaru </h4>
                <p className="text-base"> Berikut rekomendasi cara daur ulang sampah kamu jadi benda yang menarik </p>
            </div>
        </div>

      </main>
    </Layout>
  )
}
