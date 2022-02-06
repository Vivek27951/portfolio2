import Head from "next/head";
import Navbar from "../components/Navbar";
import Image from "next/image";

export default function about() {
  return (
    <>
      <Head>
        <title>About page</title>
      </Head>
      {/* <div style={{ background: "rgb(19, 18, 18)", minHeight: "800px" }}> */}
      <div className="d">
        <Navbar />
        <h1 style={{ color: "red", textAlign: "center" }}>About Page</h1>
        <div style={{ display: "flex" }}>
          <div
            style={{
              paddingLeft: "200px",
              paddingRight: "200px",
              marginTop: "100px",
              color: "gray",
            }}
          >
            <h1>Competitive Programmer / Developer</h1>
            <p>
              Hi, I'm <span style={{ color: "red" }}>Vivek Kumar Singh. </span>
              2022 undergraduate student from Birla Institute of Technology,
              Mesra having proficiency in Data Structures and Algorithms and a
              keen interest to learn and work on impactful projects.
            </p>
          </div>
          <div style={{ marginTop: "280px" }}>
            <Image src="/../public/p4.png" width="600" height="600"></Image>
          </div>
        </div>
      </div>
    </>
  );
}
