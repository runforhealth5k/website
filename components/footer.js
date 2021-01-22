import { siteTitle } from '../components/layout';

export default function Footer() {
  return (
    <div>
      <footer className="mt-32 text-gray-700 bg-white border-t body-font">
        <div className="bg-blueGray-900">
          <div className="container flex flex-col flex-wrap px-5 py-6 lg:px-20 sm:flex-row">
            <div className="flex flex-wrap items-center justify-center text-base ">
              <p className="mr-5 text-sm text-center">© {siteTitle} — 2021</p>
            </div>
            <span className=" mt-2 sm:ml-auto sm:mt-0 sm:justify-end">
              <p className="mr-3 text-sm text-center">
                Running Remote Since 2021
              </p>
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
