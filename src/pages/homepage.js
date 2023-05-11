import Layout from '@/components/layouts/Layouts'

export default function pickerorder () {
  return (
    <Layout>
      <main className="bg-white  ">
        <div className=" min-h-screen max-w-7xl mx-auto px-2 space-y-6 ">
          <h1 className="text-4xl text-center font-bold text-green-600">
            Si Bijak Sampah
          </h1>
          <h2 className="text-lg text-center">
            Manfaatkan sampahmu dengan bijak!
          </h2>
        <div class="grid grid-rows-3 grid-flow-col gap-4">
            <div class="row-span-3 p-8 rounded-xl shadow-md">Profile</div>
            <div class="col-span-2 p-8 rounded-xl shadow-md">Fitur Jual Barang / Sampah</div>
            <div class="row-span-2 col-span-2 p-8 rounded-xl shadow-md">Cari Barang Bekas</div>
        </div>
          <div class="p-8 rounded-xl shadow-md">
                <h4 class="mb-2 text-lg font-semibold"> Info Terbaru </h4>
                <p class="text-base"> Lorem ipsum dolor sit amet </p>
            </div>
        </div>

      </main>
    </Layout>
  )
}
