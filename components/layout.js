import Link from 'next/link';
import Image from 'next/image';
import Nav from '../components/nav';
import Header from '../components/header';
import Footer from '../components/footer';

export const siteTitle = 'Run for Health 5K';

export default function Layout({ children, home }) {
  return (
    <div>
      <Header />
      <Nav />
      <div className="container mx-auto p-4 text-center">
        {home ? (
          <>
            {/* This layout is for the home page */}
          </>
        ) : (
          <>
            {/* This is a top layout for pages other than home */}
          </>
        )}
        {/* This is a bottom layout for pages other than home */}
        <main>{children}</main>
        {!home && (
          <div>
            {/* Content from other pages will be render here */}
          </div>
        )}
      </div>
      {/* Everything after here will be at the bottom ALL pages */}
      <Footer />
    </div>
  );
}
