import Navbar from "./Navbar";
import s from "../styles/index.module.css";
import styles from "../styles/contact.module.css";
import Link from "next/link";
import {
  FaGithub,
  FaEnvelope,
  FaLinkedinIn,
  FaInstagramSquare,
  FaFacebookSquare,
} from "react-icons/fa";
export default function icons() {
  return (
    <>
      {/* <div style={{ background: "rgb(19, 18, 18)", minHeight: "800px" }}> */}
      <div className="d" style={{ minHeight: "800px" }}>
        <Navbar />
        <h1 style={{ color: "red", textAlign: "center" }}>Contact page</h1>
        <div>
          <h1 style={{ color: "white" }}>
            Get in touch with me to keep the ball rolling
          </h1>
          <h3>
            <ul
              style={{
                listStyle: "none",
                color: "gray",
              }}
            >
              <li className={styles.g}>
                <div style={{ fontSize: "60px" }}>
                  <FaGithub className={styles.sz} />
                </div>
                <Link href="https://github.com/Vivek27951">
                  <a style={{ fontSize: "20px" }}>
                    https://github.com/Vivek27951
                  </a>
                </Link>
              </li>
              <li className={styles.e}>
                <div style={{ fontSize: "60px" }}>
                  <FaEnvelope className={styles.sz} />
                </div>
                <Link href="kumarsinghvivek27951@gmail.com">
                  <a style={{ fontSize: "20px" }}>
                    kumarsinghvivek27951@gmail.com
                  </a>
                </Link>
              </li>
              <li className={styles.i}>
                <div style={{ fontSize: "60px" }}>
                  <FaInstagramSquare className={styles.sz} />
                </div>
                <Link href="https://www.instagram.com/vivek27951/?hl=en">
                  <a style={{ fontSize: "20px" }}>
                    https://www.instagram.com/vivek27951/?hl=en
                  </a>
                </Link>
              </li>
              <li className={styles.l}>
                <div style={{ fontSize: "60px" }}>
                  <FaLinkedinIn className={styles.sz} />
                </div>
                <Link href="https://www.linkedin.com/in/vivek-kumar-singh-098846171/">
                  <a style={{ fontSize: "20px" }}>
                    https://www.linkedin.com/in/vivek-kumar-singh-098846171/
                  </a>
                </Link>
              </li>
              <li className={styles.f}>
                <div style={{ fontSize: "60px" }}>
                  <FaFacebookSquare className={styles.sz} />
                </div>
                <Link href="https://www.facebook.com/profile.php?id=100027852804043">
                  <a style={{ fontSize: "20px" }}>
                    https://www.facebook.com/profile.php?id=100027852804043
                  </a>
                </Link>
              </li>
            </ul>
          </h3>
        </div>
      </div>
    </>
  );
}
