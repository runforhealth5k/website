import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';

export default function About() {
  return (
    <Layout>
      <Head>
        <title>About - {siteTitle}</title><br />
      </Head>
      <div className="shadow p-4 bg-white">
        <div className="text-left">
          <h1 className="mb-2 text-gray-700">About</h1>
          <p className="text-grey-600 text-sm"><b><u>Run for Health:</u></b><br />
The opportunities that the Shalom Free Clinic has given to innumerable students interested in careers related to
healthcare run unparalleled in Chico’s community. For the better part of two decades, the clinic has provided
care to the underinsured and underserved in the area, while allowing students to gain insight about the humanitarian
side of medical care. For these reasons, the Run for Health 5k was established to raise funds for the clinic,
the associations related to its practice, and the countless individuals who benefit from its mission.
<br /><b><u>Shalom’s Mission:</u></b><br />
“To provide underinsured and uninsured children, teens, and adults with primary care interventions, health service,
and education.” This includes physical, mental, and behavioral services. All services are provided free of charge.
We welcome and accept people of all sexual orientations, races, genders, nationalities, ages, economic standings,
marital status, religions or no religions, mental and or physical abilities, and family configurations.
<br /><b><u>The Vision</u></b><br />
It was the dream of a few key people who thought they could do more for those with physical, mental, and spiritual
health issues in our community. They decided that there had to be an alternative to help the sick and needy. As they
gathered others, their dream became a reality. This dream of hope has brought forth the creation of the Shalom Free Clinic.
The Shalom Free Clinic is supported by many wonderful organizations and individuals in our community.
We wish to help others in a vibrant atmosphere that conveys our attitude of compassion, warmth, acceptance, and respect for all people.
The Clinic is entirely staffed by volunteers, both medical and non-medical, from Chico and the surrounding communities. Volunteers are our
foundation and we cannot function without them. If you are interested in making a difference in your community by donating your time,
knowledge, money, or items to the Shalom Free Clinic, please see our <a href="https://shalomfreeclinic.org/volunteer/" className="underline mr-4 text-blue-500 hover:text-blue-400">volunteer page</a>or consider making a donation. </p>
        </div>
        <div className="mt-4">
          <a href="https://www.facebook.com/shalomfreeclinic/" className="underline mr-4 text-blue-500 hover:text-blue-400">Connect with us on Facebook!</a>
          <img src="images/clinic.png" alt="clinic info" width="350" height="450" />
        </div>
      </div>
    </Layout>
  );
}
