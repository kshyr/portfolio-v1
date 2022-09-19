import Head from "next/head";
import Navbar from "../components/Navbar";
import Welcome from "../components/Welcome";
import Projects from "../components/Projects";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="Frontend developer portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main>
        <Welcome />
        <Projects />
      </main>
    </div>
  );
}
