import Head from "next/head";
import Navbar from "../components/Navbar";
import Welcome from "../components/Welcome";
import Projects from "../components/Projects";

export default function Home() {
  return (
    <div className="flex">
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="Frontend developer portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className="flex-1 ml-44">
        <Welcome />
        <Projects />
      </main>
    </div>
  );
}
