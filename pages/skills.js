import Navbar from "../components/Navbar";
import s from "../styles/skills.module.css";
import { FaHtml5, FaCss3Alt, FaReact } from "react-icons/fa";
import { DiJavascript } from "react-icons/di";
import {
  SiNextdotjs,
  SiMysql,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

export default function skills() {
  return (
    <>
      {/* <div style={{ background: "rgb(19, 18, 18)", minHeight: "800px" }}> */}
      <div className="d" style={{ minHeight: "800px" }}>
        <Navbar />
        <h1 style={{ marginTop: "0px", color: "red" }}>Skills</h1>
        <div
          style={{
            background: "#1B2631",
            padding: "10px",
            marginLeft: "250px",
            marginRight: "250px",
            fontSize: "150px",
            color: "#424949 ",
            borderRadius: "20px",
          }}
        >
          <ul
            style={{
              margin: "0px",
              padding: "0px",
              marginTop: "3px",
              justifyContent: "space-between",
              display: "flex",
            }}
          >
            <FaHtml5 className={s.h} />
            <FaCss3Alt className={s.h} />
            <DiJavascript className={s.h} />
          </ul>
          <ul
            style={{
              margin: "0px",
              padding: "0px",
              marginTop: "10px",
              justifyContent: "space-between",
              display: "flex",
            }}
          >
            <FaReact className={s.h} />
            <SiNextdotjs className={s.h} />
            <SiMysql className={s.h} />
          </ul>
          <ul
            style={{
              margin: "0px",
              padding: "0px",
              marginTop: "50px",
              justifyContent: "space-between",
              display: "flex",
            }}
          >
            <SiTailwindcss className={s.h} />
            <SiTypescript className={s.h} />
            <span className={s.h}>c++</span>
          </ul>
        </div>
      </div>
    </>
  );
}
