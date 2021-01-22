import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Nav from '../components/nav';
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
                  [insert fancy latin].
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <a
                      href="/registration"
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
        <h2 className="text-justify uppercase text-purple-900 underline">How it works:</h2><br />
        <ol className="list-decimal list-inside text-justify text-purple-900">
          <li>Register through Active.com by clicking the ‘register’ button above</li>
          <li>Check your inbox for a verification email confirming that you were
          successfully registered</li>
          <li>Download ‘Strava,’ an app that allows your
          phone to track the time and speed of your run</li>
          <li>Create an account using the same name and email that you used to register for Run for Health</li>
          <li>Keep an eye out for announcements and updates via email (this is how
          you’ll know when your race bib and commemorative mask will be coming
          in.)</li>
          <li>Run the race (05/29/21) anytime from dawn til dusk</li>
          <li>Submit your results from Strava on the day of the race to:
          <a href= "mailto:runforhealth5k@gmail.com" className="text-black hover:text-purple-700"> RunForHealth5k@gmail.com</a></li>
        </ol>
      </section>
    </Layout>
  );
}
