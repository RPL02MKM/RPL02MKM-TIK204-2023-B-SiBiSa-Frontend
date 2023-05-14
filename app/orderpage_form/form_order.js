import Link from "next/link";

export default function Order_Form() {
  
  return (
    <main className="bg-white  ">
      <div className=" min-h-screen max-w-7xl mx-auto px-2 space-y-4 space-x-4">
        <h1 className="text-4xl text-center font-bold text-green-600">
          Checkout Order
        </h1>
        <div className="grid-flow-col gap-4 ">
          <div className="col-span-2 p-8 rounded-xl shadow-md space-y-8 space-x-4">
            <div class="relative py-3 sm:max-w-xl sm:mx-auto">
                <div class="max-w-md mx-auto">
                    <div class="flex items-center space-x-5">
                        <div class="h-8 w-8 bg-green-200 rounded-full flex flex-shrink-0 justify-center items-center text-green-500 text-2xl font-mono">!</div>
                        <div class="block pl-2 font-semibold text-xl self-start text-gray-700">
                            <h2 class="leading-relaxed">Lengkapi Formulir Berikut</h2>
                            <p class="text-sm text-gray-500 font-normal leading-relaxed">Pastikan alamat sudah benar!</p>
                        </div>
                    </div>
                    <div class="divide-y divide-gray-200">
                        <div class="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-l sm:leading-7">
                            <div class="flex flex-col">
                                <label class="leading-loose">Nama Tempat</label>
                                <input type="text" class="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" placeholder="Event title"/>
                            </div>
                            <div class="flex flex-col">
                                <label class="leading-loose">Alamat Pengiriman</label>
                                <input type="text" class="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" placeholder="Optional"/>
                            </div>
                            <div class="flex flex-col">
                                <label class="leading-loose">Catatan Tambahan</label>
                                <input type="text" class="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" placeholder="Optional"/>
                             </div>
                        </div>
                    </div>
                </div>
            </div>
            
          </div>

          <div className="row-span-2 col-span-2 p-8 rounded-xl shadow-md space-y-8">
            <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
              <Link href="/detailsampah">
                <img
                      className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                      src="https://images.unsplash.com/photo-1595278069441-2cf29f8005a4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
                      alt="image_barang"
                    />
              </Link>
                <div class="flex flex-col justify-between p-4 leading-normal">
                <h5 class="mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-white">Botol Plastik Bekas</h5>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Botol air kemasan plastik, tanpa tutup botol.</p>
                <span className="inline-flex px-2 py-1 mr-auto text-xs font-bold leading-none text-white bg-green-600 rounded">
                Total : 0 Kg
                </span>
                </div>
            </div>

            <div class="pt-4 flex items-center space-x-4">
                
                    <button class="flex justify-center items-center w-full text-gray-900 px-4 py-3 rounded-md focus:outline-none">
                    <Link href="/user"> 
                    Batalkan </Link>
                    </button>
                    <button class="bg-green-600 flex justify-center items-center w-full text-white px-4 py-3 rounded-md focus:outline-none">Pesan</button>
                </div>
          </div>
        </div>
      </div>
    </main>
  );
}
