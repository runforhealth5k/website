import Head from 'next/head';
import Link from 'next/link';
import Layout, { siteTitle } from '../components/layout';

const p_donors = [
  {
    href: 'https://tesla.com',
    label: 'Tesla',
    iurl:
      'https://assert.com/wp-content/uploads/2020/12/Tesla_Inc.-Logo.wine_.png',
  },
  {
    href: 'https://google.com',
    label: 'Google',
    iurl:
      'https://voxytalksy.com/wp-content/uploads/2018/08/google-voxytalksy.png',
  },
  {
    href: 'https://google.com',
    label: 'Google',
    iurl:
      'https://voxytalksy.com/wp-content/uploads/2018/08/google-voxytalksy.png',
  },
  {
    href: 'https://google.com',
    label: 'Google',
    iurl:
      'https://voxytalksy.com/wp-content/uploads/2018/08/google-voxytalksy.png',
  },
  {
    href: 'https://google.com',
    label: 'Google',
    iurl:
      'https://voxytalksy.com/wp-content/uploads/2018/08/google-voxytalksy.png',
  },
  {
    href: 'https://google.com',
    label: 'Google',
    iurl:
      'https://voxytalksy.com/wp-content/uploads/2018/08/google-voxytalksy.png',
  },
  {
    href: 'https://google.com',
    label: 'Google',
    iurl:
      'https://voxytalksy.com/wp-content/uploads/2018/08/google-voxytalksy.png',
  },
  {
    href: 'https://google.com',
    label: 'Google',
    iurl:
      'https://voxytalksy.com/wp-content/uploads/2018/08/google-voxytalksy.png',
  },
];

const g_donors = [
  {
    href: 'https://tesla.com',
    label: 'Tesla',
    iurl:
      'https://assert.com/wp-content/uploads/2020/12/Tesla_Inc.-Logo.wine_.png',
  },
  {
    href: 'https://google.com',
    label: 'Google',
    iurl:
      'https://voxytalksy.com/wp-content/uploads/2018/08/google-voxytalksy.png',
  },
];

const s_donors = [
  {
    href: 'https://tesla.com',
    label: 'Tesla',
    iurl:
      'https://assert.com/wp-content/uploads/2020/12/Tesla_Inc.-Logo.wine_.png',
  },
  {
    href: 'https://google.com',
    label: 'Google',
    iurl:
      'https://voxytalksy.com/wp-content/uploads/2018/08/google-voxytalksy.png',
  },
];

const b_donors = [
  {
    href: 'https://tesla.com',
    label: 'Tesla',
    iurl:
      'https://assert.com/wp-content/uploads/2020/12/Tesla_Inc.-Logo.wine_.png',
  },
  {
    href: 'https://google.com',
    label: 'Google',
    iurl:
      'https://voxytalksy.com/wp-content/uploads/2018/08/google-voxytalksy.png',
  },
];

// { href: '', label: '', iurl: ''},

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

      <h1 className="font-extrabold text-4xl">Platinum Donors</h1>
      <ul className="flex flex-wrap items-center justify-evenly">
        {p_donors.map(({ href, label, iurl }) => (
          <li key={`${href}${label}`}>
            <div>
              <a href={href}>
                <img
                  className="w-60 h-60"
                  src={iurl}
                  alt={label}
                  width="400"
                  height="400"
                />
              </a>
            </div>
            <h2 className="font-extrabold text-2xl">{label}</h2>
          </li>
        ))}
      </ul>

      <h1 className="font-extrabold text-4xl">Golden Donors</h1>
      <ul className="flex flex-wrap items-center justify-evenly">
        {g_donors.map(({ href, label, iurl }) => (
          <li key={`${href}${label}`}>
            <div>
              <a href={href}>
                <img
                  className="w-60 h-60"
                  src={iurl}
                  alt={label}
                  width="400"
                  height="400"
                />
              </a>
            </div>
            <h2 className="font-extrabold text-2xl">{label}</h2>
          </li>
        ))}
      </ul>

      <h1 className="font-extrabold text-4xl">Silver Donors</h1>
      <ul className="flex flex-wrap items-center justify-evenly">
        {s_donors.map(({ href, label, iurl }) => (
          <li key={`${href}${label}`}>
            <div>
              <a href={href}>
                <img
                  className="w-60 h-60"
                  src={iurl}
                  alt={label}
                  width="400"
                  height="400"
                />
              </a>
            </div>
            <h2 className="font-extrabold text-2xl">{label}</h2>
          </li>
        ))}
      </ul>

      <h1 className="font-extrabold text-4xl">Bronze Donors</h1>
      <ul className="flex flex-wrap items-center justify-evenly">
        {b_donors.map(({ href, label, iurl }) => (
          <li key={`${href}${label}`}>
            <div>
              <a href={href}>
                <img
                  className="w-60 h-60"
                  src={iurl}
                  alt={label}
                  width="400"
                  height="400"
                />
              </a>
            </div>
            <h2 className="font-extrabold text-2xl">{label}</h2>
          </li>
        ))}
      </ul>
    </Layout>
  );
}
