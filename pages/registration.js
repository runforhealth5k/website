import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';

export default function Registration() {
  return (
    <Layout>
      <Head>
        <title>Registration - {siteTitle}</title>
      </Head>
      <section className="pb-8">
        <h2 className="text-2xl">
          The registration button will take you to a safe 3rd party provider.
        </h2>
        {/* <p>This is a work in progress!</p> */}
      </section>
      <button className="text-2xl font-extrabold text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 p-4 rounded-2xl mb-8">
        <a href="https://endurancecui.active.com/event-reg/select-race?e=73465434">
          Registrate
        </a>
      </button>
    </Layout>
  );
}
