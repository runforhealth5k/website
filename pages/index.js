import Head from 'next/head';
import Link from 'next/link';
import Layout, { siteTitle } from '../components/layout';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className="pb-8">
        <h2 className="text-2xl">
          The donation button will take you to a safe 3rd party provider.
        </h2>
        {/* <p>This is a work in progress!</p> */}
      </section>
      <button className="text-2xl font-extrabold text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 p-4 rounded-2xl mb-8">
        Donation
      </button>

    </Layout>
  );
}
