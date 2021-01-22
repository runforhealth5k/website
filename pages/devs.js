import Layout from '../components/layout';
import Link from 'next/link';

const dev = [
  {
    name: 'Marco Garcia',
    github: 'https://github.com/magarcia0/',
    website: 'https://marcoagarcia.com',
  },
  {
    name: 'Kyle Kirk',
    github: 'https://github.com/capktkirk/',
    website: 'https://capktkirk.github.io',
  },
  {
    name: 'Roberto Pacheco',
    github: 'https://github.com/repacheco1/',
    website: 'https://repacheco.com/',
  },
];

export default function Devs() {
  return (
    <Layout>
      <p>
        <h2 className="font-bold">Developers:</h2>
        <ul className="list-none">
          {dev.map(({ name, github, website }) => (
            <li key={`${website}${name}`}>
              <div className="no-underline font-bold text-black">
                <h3>
                  {name}

                  <Link href={github}>
                    <a className="fa fa-github text-indigo-600 hover:text-indigo-700"></a>
                  </Link>

                  <Link href={website}>
                    <a className="fa fa-users text-indigo-600 hover:text-indigo-700"></a>
                  </Link>
                </h3>
              </div>
            </li>
          ))}
        </ul>
      </p>
      <h3 className="font-bold text-center pt-8">
        Built with{' '}
        <Link href="https://nextjs.org/">
          <a className=" font-bold text-indigo-600 hover:text-indigo-700">
            Next.js{' '}
          </a>
        </Link>
        and{' '}
        <Link href="https://tailwindcss.com/">
          <a className=" font-bold text-indigo-600 hover:text-indigo-700">
            Tailwind
          </a>
        </Link>
      </h3>
    </Layout>
  );
}
