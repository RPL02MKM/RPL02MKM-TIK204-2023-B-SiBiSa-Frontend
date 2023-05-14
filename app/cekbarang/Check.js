
export default function Check() {
  
  return (
    <main className="bg-white  ">
      <div className=" min-h-screen max-w-7xl mx-auto px-2 space-y-6 space-x-4">
        <h1 className="text-4xl text-center font-bold text-green-600">
          Si Bijak Sampah
        </h1>
        <h2 className="text-lg text-center">
          Manfaatkan sampahmu dengan bijak!
        </h2>
        <div className="grid grid-rows-3 grid-flow-col gap-4">
          <div className="col-span-2 p-8 rounded-xl shadow-md space-y-4 space-x-4">
            <button
              type="button"
              class="inline-block rounded border-2 border-success px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-success transition duration-150 ease-in-out hover:border-success-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-success-600 focus:border-success-600 focus:text-success-600 focus:outline-none focus:ring-0 active:border-success-700 active:text-success-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
              data-te-ripple-init
            >
              Plastik
            </button>
            <button
              type="button"
              class="inline-block rounded border-2 border-success px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-success transition duration-150 ease-in-out hover:border-success-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-success-600 focus:border-success-600 focus:text-success-600 focus:outline-none focus:ring-0 active:border-success-700 active:text-success-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
              data-te-ripple-init
            >
              Kertas
            </button>
            <button
              type="button"
              class="inline-block rounded border-2 border-success px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-success transition duration-150 ease-in-out hover:border-success-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-success-600 focus:border-success-600 focus:text-success-600 focus:outline-none focus:ring-0 active:border-success-700 active:text-success-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
              data-te-ripple-init
            >
              Kaca
            </button>
            <button
              type="button"
              class="inline-block rounded border-2 border-success px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-success transition duration-150 ease-in-out hover:border-success-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-success-600 focus:border-success-600 focus:text-success-600 focus:outline-none focus:ring-0 active:border-success-700 active:text-success-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
              data-te-ripple-init
            >
              Logam
            </button>
            <button
              type="button"
              class="inline-block rounded border-2 border-success px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-success transition duration-150 ease-in-out hover:border-success-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-success-600 focus:border-success-600 focus:text-success-600 focus:outline-none focus:ring-0 active:border-success-700 active:text-success-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
              data-te-ripple-init
            >
              Minyak
            </button>
            <button
              type="button"
              class="inline-block rounded border-2 border-success px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-success transition duration-150 ease-in-out hover:border-success-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-success-600 focus:border-success-600 focus:text-success-600 focus:outline-none focus:ring-0 active:border-success-700 active:text-success-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
              data-te-ripple-init
            >
              Kardus
            </button>
            
            <div className="items-center px-4 flex justify-center" >
            <div className="relative mr-3">
                <div className="absolute top-3 left-3 items-center">
                    <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                </div>
                <input
                    type="text"
                    className="block p-2 pl-10 w-70 text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:pl-3"
                    placeholder="Search Here..."
                />
            </div>
</div>

            <div class="container mx-0 flex min-w-full flex-col items-center"></div>
          </div>

          <div className="row-span-2 col-span-2 p-8 rounded-xl shadow-md space-y-8">
            <h1 className="text-center text-lg font-semibold">Daftar Barang</h1>
            <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
              <img
                      className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                      src="https://unsplash.com/photos/-4bD2p5zbdA"
                      alt="image_barang"
                    />
            <div class="flex flex-col justify-between p-4 leading-normal">
            <h5 class="mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-white">Botol Plastik Bekas</h5>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Botol air kemasan plastik, tanpa tutup botol.</p>
            <span className="inline-flex px-2 py-1 mr-auto text-xs font-bold leading-none text-white bg-green-600 rounded">
                Total : 0 Kg
                </span>
            </div>
            </div>

            <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
              <img
                      className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                      src="https://unsplash.com/photos/-4bD2p5zbdA"
                      alt="image_barang"
                    />
            <div class="flex flex-col justify-between p-4 leading-normal">
            <h5 class="mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-white">Botol Plastik Bekas</h5>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Botol air kemasan plastik, tanpa tutup botol.</p>
            <span className="inline-flex px-2 py-1 mr-auto text-xs font-bold leading-none text-white bg-green-600 rounded">
                Total : 0 Kg
                </span>
            </div>
            </div>
            <div className="container mx-0 flex min-w-full flex-col items-center"></div>
          </div>
        </div>
        <div className="p-8 rounded-xl shadow-md">
          <h4 className="mb-2 text-lg font-semibold"> Info Terbaru </h4>
          <p className="text-base"> </p>
        </div>
      </div>
    </main>
  );
}
