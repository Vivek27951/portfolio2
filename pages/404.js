import Link from "next/link";
import Head from "next/head";
import Navbar from "../components/Navbar";
const Error = () => {
  return (
    <>
      <Head>
        <title>Error</title>
      </Head>
      <Navbar />
      <div id="notfound">
        <div className="notfound">
          <div className="notfound-404">
            <h1>404</h1>
          </div>
          <h2>We are sorry, Page not found!</h2>
          <p>
            The page you are looking for might have been removed had its name
            changed or is temporarily unavailable.
          </p>
        </div>
      </div>
    </>
  );
};

export default Error;
