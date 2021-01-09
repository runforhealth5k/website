import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';

export default function Registration() {
  return (
    <Layout>
      <Head>
        <title>Registration - {siteTitle}</title>
      </Head>
      This is the Registration page!
    </Layout>
  );
}
