import Layout from '@/components/layouts/Layouts'

export default function pickerorder () {
  return (
    <Layout>
      <main className="bg-white  ">
        <div className=" min-h-screen max-w-7xl mx-auto px-2 space-y-6 ">
          <h1 className="text-4xl text-center font-bold text-green-600">
            Pickup Order
          </h1>
          <h2 className="text-lg text-center">
            Picker akan menjemput sampah kamu, pastikan alamat sudah benar !
          </h2>

          <h1 className="text-xl text-Justitfy font-bold text-green-600">
            Picker
          </h1>
          <h2 className="text-lg text-justify">
            <strong>Doni Pangestu</strong> <br></br>
            ID : 123456789 <br></br>
          </h2>

          <div className="flex justify-center">
          <iframe src="https://maps.google.com/maps?q=Universitas syiah kuala&t=&z=15&ie=UTF8&iwloc=&output=embed" width="800" height="450" frameBorder="0" style={{ border: 0 }} allowfullscreen="" aria-hidden="false" tabIndex="0"></iframe>
          </div>

          <h1 className="text-xl text-Justitfy font-bold text-green-600">
            Informasi Penjemputan
          </h1>
          <h2 className="text-lg text-left">
          Jalan Syech Abdurrauf No. 4, Darussalam, Kopelma Darussalam, Kec. Syiah Kuala, Kabupaten Aceh Besar, Aceh 23111
          </h2>
          <h1 className="text-xl text-Justitfy font-bold text-green-600">
            Informasi Sampah
          </h1>
          <h2 className="text-lg text-left">
          <strong>Sampah Plastik</strong> <br></br>
          &emsp; Gelas Plastik dan botol Plastik <strong> &emsp; &emsp;  &emsp;  &emsp; 4 Kg</strong> <br></br>
          </h2>
          <div class="h-56 grid grid-cols-3 gap-4 content-center">
          <button type="button" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Batalkan</button>
          <button type="button" className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Penjemputan Selesai</button>
          </div>

        </div>

      </main>
    </Layout>
  )
}
