import Link from "next/link";

export default function Detail_Sampah() {

    return (
        <main className="bg-white  ">
            <div className=" min-h-screen max-w-7xl mx-auto px-2 space-y-6 space-x-4">
                <div className="grid grid-rows-3 grid-flow-col gap-4">

                    <div className="row-span-2 col-span-2 p-8 rounded-xl shadow-md space-y-8">
                        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <img
                                className="w-full rounded-t-lg"
                                src="https://images.unsplash.com/photo-1595278069441-2cf29f8005a4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
                                alt="image_barang" />
                            <div class="p-5">
                                <h5 class="mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-white">Botol Plastik Bekas</h5>
                                <p class="mb-3 font-normal text-xs text-gray-700 dark:text-gray-400">Jenis Sampah : Plastik </p>
                                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Botol air minuman kemasan plastik bekas. Tanpa tutup botol.</p>
                                <span className="inline-flex px-2 py-1 mr-auto text-xs font-bold leading-none text-white bg-green-500 rounded">
                                    Total : 0 Kg
                                </span>
                            </div>
                        </div>
                        <div className="flex justify-center py-8">
                            <Link href="/orderpage_form">
                            <button className="px-4 py-2 rounded-xl font-semibold text-white bg-green-700 hover:bg-green-900">
                                Beli Sampah
                            </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
