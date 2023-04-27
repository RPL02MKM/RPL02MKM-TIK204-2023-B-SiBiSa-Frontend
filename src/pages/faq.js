import Layout from "@/components/layouts/Layouts";

import React, { useState } from "react";

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const faqData = [
    {
      question: "Bagaimana cara menjual sampah anorganik?",
      answer:
        "Anda dapat menjual sampah anorganik dengan mendaftar sebagai pengguna di platform kami. Setelah itu, Anda dapat mengunggah informasi dan foto sampah anorganik yang ingin Anda jual. Pengguna lain yang tertarik dapat melihat dan membeli sampah tersebut.",
    },
    {
      question: "Apakah ada batasan jenis sampah anorganik yang bisa dijual?",
      answer:
        "Terdapat beberapa jenis sampah anorganik yang dapat dijual, seperti kertas, plastik, logam, kaca, dan lainnya. Namun, ada beberapa jenis sampah anorganik tertentu yang tidak dapat diterima. Pastikan untuk memeriksa panduan dan kebijakan kami terkait jenis sampah yang dapat dijual di platform kami.",
    },
    {
      question: "Bagaimana proses pembayaran ketika menjual sampah anorganik?",
      answer:
        "Proses pembayaran dilakukan melalui platform kami. Setelah sampah anorganik Anda terjual, pembeli akan melakukan pembayaran menggunakan metode yang tersedia di platform. Dana akan ditransfer ke akun Anda setelah transaksi selesai.",
    },
    {
      question:
        "Apakah ada biaya atau komisi yang dikenakan saat menjual sampah?",
      answer:
        "Ya, terdapat biaya atau komisi yang dikenakan sebagai pengguna untuk setiap transaksi penjualan sampah anorganik. Informasi lebih lanjut tentang biaya atau komisi ini dapat ditemukan di halaman kebijakan dan ketentuan kami.",
    },
  ];

  return (
    <Layout>
      <main className="bg-white">
        <div className="min-h-screen max-w-3xl px-4 mx-auto py-8">
          <h1 className="text-3xl font-bold mb-4 text-center">
            Frequently Asked Questions
          </h1>
          <div className="space-y-4">
            {faqData.map((item, index) => (
              <div
                key={index}
                className="border rounded-lg p-4 cursor-pointer"
                onClick={() => toggleAccordion(index)}
              >
                <h2 className="text-xl font-semibold">{item.question}</h2>
                <div
                  className={`mt-2 transition-max-height duration-300 ${
                    activeIndex === index
                      ? "max-h-[500px]"
                      : "max-h-0 overflow-hidden"
                  }`}
                >
                  <p className="animate-fade-in text-justify text-lg">
                    {item.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </Layout>
  );
}
