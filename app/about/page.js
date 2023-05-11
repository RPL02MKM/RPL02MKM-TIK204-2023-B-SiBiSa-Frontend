import Image from "next/image";

export default function Page() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Tentang SiBiSa</h1>
      <p className="text-lg text-justify">
        &nbsp; &nbsp; Sibisa adalah sebuah platform jual beli sampah anorganik
        secara online yang memudahkan pengguna untuk menjual sampah dan
        menghasilkan uang tambahan, sekaligus membantu mengurangi jumlah sampah
        di lingkungan. Sibisa menyediakan layanan yang mudah digunakan dan
        menyajikan informasi tentang jenis sampah yang dapat dijual dan harga
        yang ditawarkan. Selain itu, Sibisa juga memberikan edukasi tentang
        pentingnya daur ulang dan membuang sampah dengan benar. Sibisa
        memberikan manfaat bagi masyarakat dalam hal menjual dan membeli sampah
        anorganik secara online dan membantu menjaga kelestarian lingkungan.
      </p>
      <h1 className="text-4xl font-bold mb-8 text-center mt-20">SiBiSa Team</h1>
      <div className="flex flex-col md:flex-row overflow-x-auto mb-8 justify-start py-10">
        <div className="flex-none w-full md:w-72 p-4">
          <div className="rounded-lg overflow-hidden shadow-lg">
            <div className="relative h-60">
              <Image
                src="/member1.jpg"
                alt="Team Member 1"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="p-4">
              <h2 className="text-lg font-bold mb-2">Nur Ridho Rizki</h2>
              <p className="text-gray-500">Full-Stack Developer</p>
            </div>
          </div>
        </div>
        <div className="flex-none w-full md:w-72 p-4">
          <div className="rounded-lg overflow-hidden shadow-lg">
            <div className="relative h-60">
              <Image
                src="/member1.jpg"
                alt="Team Member 2"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="p-4">
              <h2 className="text-lg font-bold mb-2">M. Mustafa Kamal</h2>
              <p className="text-gray-500">Back-end Developer</p>
            </div>
          </div>
        </div>
        <div className="flex-none w-full md:w-72 p-4">
          <div className="rounded-lg overflow-hidden shadow-lg">
            <div className="relative h-60">
              <Image
                src="/member1.jpg"
                alt="Team Member 3"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="p-4">
              <h2 className="text-lg font-bold mb-2">Panca Wiguna S</h2>
              <p className="text-gray-500">Front-end Developer</p>
            </div>
          </div>
        </div>
        <div className="flex-none w-full md:w-72 p-4">
          <div className="rounded-lg overflow-hidden shadow-lg">
            <div className="relative h-60">
              <Image
                src="/member1.jpg"
                alt="Team Member 4"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="p-4">
              <h2 className="text-lg font-bold mb-2">Ahyar Maulana</h2>
              <p className="text-gray-500">UI/UX Designer</p>
            </div>
          </div>
        </div>
        <div className="flex-none w-full md:w-72 p-4">
          <div className="rounded-lg overflow-hidden shadow-lg">
            <div className="relative h-60">
              <Image
                src="/member1.jpg"
                alt="Team Member 5"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="p-4">
              <h2 className="text-lg font-bold mb-2">Hafiz Maulana</h2>
              <p className="text-gray-500">Project Management</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
