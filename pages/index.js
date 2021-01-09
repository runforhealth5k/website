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
          This is the home page for the{' '}
          <a className="font-bold">Run for Health 5K</a>
        </h2>
        {/* <p>This is a work in progress!</p> */}
      </section>


    </Layout>
  );
}
