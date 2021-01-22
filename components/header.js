import Head from 'next/head';
import { siteTitle } from '../components/layout';

export default function Header() {
  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Run for health 5K." />
        {/* <meta property="og:image" content="https://ik.imagekit.io/ge9j1auwro/tr:w-200%2ch-200/avatar.png" /> */}
        <meta property="og:title" content={siteTitle} />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
    </div>
  );
}
