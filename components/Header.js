import Navbar from "../components/Navbar";
import styles from "../styles/index.module.css";
import Image from "next/image";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.brand_box}>
        <Navbar />
      </div>

      <div className={styles.text_box} style={{ display: "flex" }}>
        <div style={{ alignItems: "start", marginTop: "300px" }}>
          <Image src="/../public/p3.png" width="350" height="350"></Image>
        </div>
        <div
          style={{ alignItems: "end", marginLeft: "230px", marginTop: "150px" }}
        >
          <h1 className={styles.heading_primary}>
            <span className={styles.heading_primary_main}>
              Hi There, This is
            </span>
            <span className={styles.thapatext}>Vivek Kumar Singh</span>,
            <span className={styles.heading_primary_main}>Web Devloper</span>
            <h6
              style={{
                margin: "0",
                fontSize: "15px",
                fontWeight: "normal",
                color: "gray",
              }}
            >
              ( Next.js / TypeScript / Tailwind CSS )
            </h6>
          </h1>
        </div>
      </div>
    </header>
  );
};

export default Header;
