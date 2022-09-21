import Head from "next/head";
import dynamic from "next/dynamic";
import { useRef, useState } from "react";
import Navbar from "../components/Navbar";
import Welcome from "../components/Welcome";
import Projects from "../components/Projects";

const AnimatedCursor = dynamic(() => import("react-animated-cursor"), {
  ssr: false,
});
export default function Home() {
  const [cursorColor, setCursorColor] = useState("245, 239, 224");
  const [cursorBorderColor, setCursotBorderColor] = useState("36, 35, 49");
  const rgbCursorBorder = cursorBorderColor.split(", ");

  return (
    <div className="">
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="Frontend developer portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AnimatedCursor
        innerSize={12}
        outerSize={8}
        color={cursorColor}
        outerAlpha={0.1}
        innerScale={0.7}
        outerScale={5}
        innerStyle={{
          border: `1px solid rgb(${rgbCursorBorder[0]},${rgbCursorBorder[1]},${rgbCursorBorder[2]})`,
        }}
        outerStyle={{
          backgroundColor: `rgba(${rgbCursorBorder[0]},${rgbCursorBorder[1]},${rgbCursorBorder[2]},0.7)`,
        }}
      />
      <Navbar
        setCursorColor={setCursorColor}
        setCursotBorderColor={setCursotBorderColor}
      />
      <main>
        <Welcome />
        <Projects setCursorColor={setCursorColor}
        setCursotBorderColor={setCursotBorderColor}/>
      </main>
    </div>
  );
}
