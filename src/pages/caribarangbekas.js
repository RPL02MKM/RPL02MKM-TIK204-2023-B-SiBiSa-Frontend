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
            <div className="col-span-2 p-8 rounded-xl shadow-md space-y-4 space-x-4">
            <button type="button" class="inline-block rounded border-2 border-success px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-success transition duration-150 ease-in-out hover:border-success-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-success-600 focus:border-success-600 focus:text-success-600 focus:outline-none focus:ring-0 active:border-success-700 active:text-success-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
            data-te-ripple-init>Plastik</button>
            <button type="button" class="inline-block rounded border-2 border-success px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-success transition duration-150 ease-in-out hover:border-success-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-success-600 focus:border-success-600 focus:text-success-600 focus:outline-none focus:ring-0 active:border-success-700 active:text-success-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
            data-te-ripple-init>Kertas</button>
            <button type="button" class="inline-block rounded border-2 border-success px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-success transition duration-150 ease-in-out hover:border-success-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-success-600 focus:border-success-600 focus:text-success-600 focus:outline-none focus:ring-0 active:border-success-700 active:text-success-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
            data-te-ripple-init>Kaca</button>
            <button type="button" class="inline-block rounded border-2 border-success px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-success transition duration-150 ease-in-out hover:border-success-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-success-600 focus:border-success-600 focus:text-success-600 focus:outline-none focus:ring-0 active:border-success-700 active:text-success-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
            data-te-ripple-init>Logam</button>
            <button type="button" class="inline-block rounded border-2 border-success px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-success transition duration-150 ease-in-out hover:border-success-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-success-600 focus:border-success-600 focus:text-success-600 focus:outline-none focus:ring-0 active:border-success-700 active:text-success-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
            data-te-ripple-init>Minyak</button>
            <button type="button" class="inline-block rounded border-2 border-success px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-success transition duration-150 ease-in-out hover:border-success-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-success-600 focus:border-success-600 focus:text-success-600 focus:outline-none focus:ring-0 active:border-success-700 active:text-success-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
            data-te-ripple-init>Kardus</button>
            <div class="container mx-0 flex min-w-full flex-col items-center">
            </div>
              </div>
            
            <div className="row-span-2 col-span-2 p-8 rounded-xl shadow-md space-y-8">
              <h1 className='text-center text-lg font-semibold'>Daftar Barang</h1>
              <div className="container mx-0 flex min-w-full flex-col items-center">
              </div>
            </div>
            
        </div>
          <div className="p-8 rounded-xl shadow-md">
                <h4 className="mb-2 text-lg font-semibold"> Info Terbaru </h4>
                <p className="text-base"> </p>
            </div>
        </div>

      </main>
    </Layout>
  )
}
