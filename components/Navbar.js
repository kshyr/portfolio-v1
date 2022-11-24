import { Link } from "react-scroll";
import Image from "next/image";
export default function Navbar({ setCursorColor, setCursotBorderColor }) {
  return (
    <aside
      className="fixed h-screen bg-black w-24 sm:w-32 md:w-44 lg:w-60 xl:w-80"
      onMouseEnter={() => {
        setCursorColor("36, 35, 49");
        setCursotBorderColor("245, 239, 224");
      }}
      onMouseLeave={() => {
        setCursorColor("245, 239, 224");
        setCursotBorderColor("36, 35, 49");
      }}
    >
      <div className="h-full w-full [&>*]:navbar-links text-l-wheat text-base md:text-xl lg:text-2xl xl:text-3xl top-0 flex flex-col justify-center items-center space-y-8 relative">
        <div>
          <Link activeClass="active" smooth spy to="home">
            Home
          </Link>
        </div>
        <div>
          <Link activeClass="active" smooth spy to="projects">
            Projects
          </Link>
        </div>
        <a
          href="https://github.com/deko95"
          className="logo top-5"
        >
          <Image src="/logo.png" alt="logo" layout="fill" />
        </a>
      </div>

      <div className="absolute bottom-8 w-full flex flex-col md:flex-row items-center justify-center [&>*]:navbar-logo gap-6">
        <div>
          <a href="https://github.com/deko95">
            <Image
              src="/github.svg"
              layout="fill"
              objectFit="cover"
              alt="github-logo"
            />
          </a>
        </div>
        <div>
          <a href="https://www.linkedin.com/in/kostiantyn-shyrolapov/">
            <Image
              src="/linkedin.svg"
              layout="fill"
              objectFit="cover"
              alt="logo"
            />
          </a>
        </div>
      </div>
    </aside>
  );
}
