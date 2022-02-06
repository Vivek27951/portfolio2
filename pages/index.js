import Head from "next/head";
import Navbar from "../components/Navbar";
import Image from "next/image";
import Header from "../components/Header";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home Page</title>
      </Head>
      <Header />
    </>
  );
}
