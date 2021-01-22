import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import Link from 'next/link';
import Iframe from 'react-iframe';

export default function About() {
  return (
    <Layout>
      <Head>
        <title> About - {siteTitle}</title>
        <br />
      </Head>
      <div className="shadow p-4 bg-white py-8">
        <div className="text-center px-40">
          <h1 className="mb-2 text-gray-700">About</h1>
          <p className="text-grey-600 text-md px-8">
            <b>
              <u>Run for Health:</u>
            </b>
            <br />
            The opportunities that the Shalom Free Clinic has given to
            innumerable students interested in careers related to healthcare run
            unparalleled in Chico’s community. For the better part of two
            decades, the clinic has provided care to the underinsured and
            underserved in the area, while allowing students to gain insight
            about the humanitarian side of medical care. For these reasons, the
            Run for Health 5k was established to raise funds for the clinic, the
            associations related to its practice, and the countless individuals
            who benefit from its mission.
            <br />
            <br />
            <b>
              <u>Shalom’s Mission:</u>
            </b>
            <br />
            “To provide underinsured and uninsured children, teens, and adults
            with primary care interventions, health service, and education.”
            This includes physical, mental, and behavioral services. All
            services are provided free of charge. We welcome and accept people
            of all sexual orientations, races, genders, nationalities, ages,
            economic standings, marital status, religions or no religions,
            mental and or physical abilities, and family configurations.
            <br />
            <br />
            <b>
              <u>The Vision</u>
            </b>
            <br />
            It was the dream of a few key people who thought they could do more
            for those with physical, mental, and spiritual health issues in our
            community. They decided that there had to be an alternative to help
            the sick and needy. As they gathered others, their dream became a
            reality. This dream of hope has brought forth the creation of the
            Shalom Free Clinic. The Shalom Free Clinic is supported by many
            wonderful organizations and individuals in our community. We wish to
            help others in a vibrant atmosphere that conveys our attitude of
            compassion, warmth, acceptance, and respect for all people. The
            Clinic is entirely staffed by volunteers, both medical and
            non-medical, from Chico and the surrounding communities. Volunteers
            are our foundation and we cannot function without them. If you are
            interested in making a difference in your community by donating your
            time, knowledge, money, or items to the Shalom Free Clinic, please
            see our{' '}
            <a
              href="https://shalomfreeclinic.org/volunteer/"
              className="text-blue-500 hover:text-blue-400 font-bold">
              volunteer page{' '}
            </a>
            or consider making a donation.
          </p>
        </div>
        <div className="text-center">
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
          <a
            href="https://www.facebook.com/shalomfreeclinic/"
            className="fa fa-facebook"></a>
          <a
            href="https://www.facebook.com/shalomfreeclinic/"
            className="r-4 text-blue-500 hover:text-blue-400">
            <b> Connect with us on Facebook!</b>
          </a>
          <br />

          <br />
          <div className="flex justify-center">
            <Iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3067.996579869783!2d-121.83877518462455!3d39.73972767944955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808327ec3aa1a78f%3A0xcc8622eb4999192f!2sShalom%20Free%20Clinic!5e0!3m2!1sen!2sus!4v1611117285743!5m2!1sen!2sus"
              width="600"
              height="450"
              frameborder="0"
              style="border:0;"
              allowfullscreen=""
              aria-hidden="false"
              tabindex="0"
            />
          </div>
          <Link href="https://maps.google.com/maps?z=16&q=1010%2Bmangrove%2Bavenue%2C%2Bsuite%2Bd%2C%2Bchico%2C%2Bca%2B95928">
            <a className="text-blue-500 font-bold text-xl">
              1010 Mangrove Avenue, Suite D, Chico, CA 95928
            </a>
          </Link>
          <p>
            530-342-2445 / FAX 530-342-2002
            <br />
            General healthcare every Sunday from 1:00 - 4:00 PM
            <br />
            Mental healthcare every Sunday from 1:00 PM - 4:00 PM
            <br />
            Alternative healthcare Wednesday 5:00-7:00 PM
            <br />
          </p>
        </div>
      </div>
    </Layout>
  );
}
