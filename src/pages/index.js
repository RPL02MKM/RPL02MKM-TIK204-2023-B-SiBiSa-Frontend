import Head from 'next/head';
import Layout from '@/components/layouts/Layouts';
import Hero from '@/components/Hero';

export default function Home() {
  return (
    <>
      <Head>
        <title>SIBISA - Jual Beli Sampah Anorganik Online</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <Hero />
      </Layout>
    </>
  );
}
