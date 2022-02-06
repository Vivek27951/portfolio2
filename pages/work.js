import Navbar from "../components/Navbar";
import Head from "next/head";
import s from "../styles/work.module.css";
import Image from "next/image";

export default function work() {
  return (
    <>
      <Head>
        <title>Work page</title>
      </Head>
      <div className="d">
        <Navbar />
        <div style={{ color: "white", minHeight: "700px" }}>
          <h1>Work Experience</h1>
          <ul style={{ listStyle: "none" }}>
            <li style={{ margin: "50px" }}>
              <h1>
                <span style={{ padding: "30px" }}>
//                   <Image src="/../public/m.png" height="30" width="30"></Image>
                  <img
                    src="/m.png"
                    style={{ height: "35px", width: "35px" }}
                  ></img>
                </span>
                <span className={s.company}>Microland</span> as Technology
                Intern - Automation
              </h1>
              <li>
                I am a part of TCOE department, under Vishnu Rajkumar – Assoc.
                Director - CDCP- Microland.
              </li>
              <li>
                Working as a Frontend Develop on Zues / Zeus Defenter using
                Technology like Next.js, TypeScript , Tailwind CSS and Redux.
              </li>
            </li>
            <li>
              <h1>
                <span style={{ marginRight: "20px" }}>
//                   <Image src="/../public/a.png" height="30" width="30"></Image>
                  <img
                    src="/a.png"
                    style={{ height: "40px", width: "40px" }}
                  ></img>
                </span>
                <span className={s.company}>Axis Bank</span> as Data Analyst
                Intern
              </h1>
              <li>
                I worked under Business Intelligence Unit to provide analytical
                services to various functions of the Bank.
              </li>
              <li>
                Contributed to Develop the dynamic data exception framework for
                identifying data anomalies related to ABR master and various new
                data sets.
              </li>
              <li>
                Implemented scalable and robust web scraping app to extract all
                the potential company to invest on.
              </li>
            </li>
            <li>
              <h1>
                <span style={{ marginRight: "20px" }}>
//                   <Image src="/../public/w.png" height="40" width="40"></Image>
                  <img
                    src="/w.png"
                    style={{ height: "40px", width: "40px" }}
                  ></img>
                </span>
                <span className={s.company}>Widhya</span> as SDE Intern
              </h1>
              <li>
                We work together to Improve a real-time customer review system
                that takes a review from the customers and show all existing
                reviews too.
              </li>
              <li>
                Collaborated with other developers to identify and alleviate
                number of bugs and errors in software.
              </li>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
