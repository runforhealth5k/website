import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <div className="relative bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <svg
              className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
              fill="currentColor"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true">
              <polygon points="50,0 100,0 50,100 0,100" />
            </svg>

            <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
              {/* Whitespace for the full image lol*/}
            </div>

            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block xl:inline">A virtual 5k for a </span>
                  <span className="block text-indigo-600 xl:inline">
                    virtual world!
                  </span>
                </h1>
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  Clicking the registration button below will take you to a safe
                  3rd party website.
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <a
                      href="https://endurancecui.active.com/event-reg/select-race?e=73465434"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
                      Registration
                    </a>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img
            className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
            src="/images/banner.jpg"
            alt=""
          />
        </div>
      </div>

      <section>
        <br />
        <br />
        <h2 className="text-center uppercase text-black underline text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-5xl">
          How it works:
        </h2>
        <br />
        <ol className="list-decimal list-inside text-center text-lg text-gray-600 md:text-xl">
          <li className="leading-loose">
            Register through Active.com by clicking the ‘Registration’ button
            above.
          </li>
          <li className="leading-loose">
            Check your inbox for a verification email confirming that you were
            successfully registered.
          </li>
          <li className="leading-loose">
            Download ‘Strava,’ an app that allows your phone to track the time
            and speed of your run.
          </li>
          <li className="leading-loose">
            Create an account using the same name and email that you used to
            register for Run for Health.
          </li>
          <li className="leading-loose">
            Keep an eye out for announcements and updates via email (this is how
            you’ll know when your race bib and commemorative mask will be coming
            in).
          </li>
          <li className="leading-loose">
            Run the race <span className="font-bold">(05/29/21)</span> anytime
            from dawn til dusk.
          </li>
          <li className="leading-loose">
            Submit your results from Strava on the day of the race to:
            <a
              href="mailto:runforhealth5k@gmail.com"
              className="text-black hover:text-indigo-600">
              {' '}
              RunForHealth5k@gmail.com
            </a>
          </li>
        </ol>
      </section>
      <br />
      <br />
      <h3 className="text-indigo-600 text-center tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-3xl">
        Thanks to our sponsors!
      </h3>
      <section className="p-10 flex md:flex-row items-center justify-around bg-gray-100 flex-wrap sm:flex-col">
        <div className="h-52 w-52 relative cursor-pointer mb-5">
          <div className="absolute inset-0 bg-white opacity-25 rounded-lg shadow-2xl"></div>
          <div className="absolute inset-0 transform hover:scale-75 transition duration-300">
            <a href="https://www.instagram.com/thenitrobike/?hl=en">
              <img src="images/Nitrobike.png" alt="Nitro Bike Logo" />
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
