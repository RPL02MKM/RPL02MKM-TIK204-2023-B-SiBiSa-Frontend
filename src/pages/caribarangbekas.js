import Layout from '@/components/layouts/Layouts'
import Link from 'next/link';

export default function homepage () {
  return (
    <Layout>
      <main className="bg-white  ">
        <div className=" min-h-screen max-w-7xl mx-auto px-2 space-y-6 space-x-4">
          <h1 className="text-4xl text-center font-bold text-green-600">
            Cari barang bekas kamu disini
          </h1>
        <div className="grid grid-rows-3 grid-flow-col gap-4">
            <div className="col-span-2 p-8 rounded-xl shadow-md space-y-4 space-x-4">
            <div class="mb-3">
                <div class="relative mb-4 flex w-full flex-wrap items-stretch">
                    <input
                    type="search"
                    class="relative m-0 block w-[1px] min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
                    placeholder="Search"
                    aria-label="Search"
                    aria-describedby="button-addon2" />
                    <span
                    class="input-group-text flex items-center whitespace-nowrap rounded px-3 py-1.5 text-center text-base font-normal text-neutral-700 dark:text-neutral-200"
                    id="basic-addon2">
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        class="h-5 w-5">
                            <path
                            fill-rule="evenodd"
                            d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                            clipRule="evenodd" />
                            </svg>
                            </span>
                            </div>
                </div>
                <button class="h-10 px-5 text-emerald-700 transition-colors duration-150 border border-emerald-500 rounded-lg focus:shadow-outline hover:bg-emerald-500 hover:text-emerald-100">
                Plastik</button>
                <button class="h-10 px-5 text-emerald-700 transition-colors duration-150 border border-emerald-500 rounded-lg focus:shadow-outline hover:bg-emerald-500 hover:text-emerald-100">
                Kertas</button>
                <button class="h-10 px-5 text-emerald-700 transition-colors duration-150 border border-emerald-500 rounded-lg focus:shadow-outline hover:bg-emerald-500 hover:text-emerald-100">
                Kaca</button>
                <button class="h-10 px-5 text-emerald-700 transition-colors duration-150 border border-emerald-500 rounded-lg focus:shadow-outline hover:bg-emerald-500 hover:text-emerald-100">
                Logam</button>
                <button class="h-10 px-5 text-emerald-700 transition-colors duration-150 border border-emerald-500 rounded-lg focus:shadow-outline hover:bg-emerald-500 hover:text-emerald-100">
                Elektronik</button>
                <button class="h-10 px-5 text-emerald-700 transition-colors duration-150 border border-emerald-500 rounded-lg focus:shadow-outline hover:bg-emerald-500 hover:text-emerald-100">
                Styrofoam</button>
                <button class="h-10 px-5 text-emerald-700 transition-colors duration-150 border border-emerald-500 rounded-lg focus:shadow-outline hover:bg-emerald-500 hover:text-emerald-100">
                Karet</button>

                <div class="w-full max-w-lg overflow-hidden rounded-lg shadow-lg sm:flex space-y-4">
                <div class="w-full sm:w-1/3">
                    <img class="object-cover w-full h-48" src="https://images.pexels.com/photos/853199/pexels-photo-853199.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="Flower and sky"/>
                    </div>
                    <div class="flex-1 px-6 py-4">
                        <h4 class="mb-3 text-xl font-semibold tracking-tight text-gray-800">This is the title</h4>
                        <p class="leading-normal text-gray-700">Lorem ipsum dolor, sit amet cons ectetur adipis icing elit.</p>
                        </div>
                    </div>
                    <div class="w-full max-w-lg overflow-hidden rounded-lg shadow-lg sm:flex">
                <div class="w-full sm:w-1/3">
                    <img class="object-cover w-full h-48" src="https://images.pexels.com/photos/853199/pexels-photo-853199.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="Flower and sky"/>
                    </div>
                    <div class="flex-1 px-6 py-4">
                        <h4 class="mb-3 text-xl font-semibold tracking-tight text-gray-800">This is the title</h4>
                        <p class="leading-normal text-gray-700">Lorem ipsum dolor, sit amet cons ectetur adipis icing elit.</p>
                        </div>
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