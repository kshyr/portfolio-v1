import { Link } from "react-scroll";

export default function Navbar({ setCursorColor, setCursotBorderColor }) {
  return (
    <aside
      className="fixed h-screen bg-black text-l-wheat text-base md:text-xl lg:text-2xl xl:text-3xl top-0 flex flex-col justify-center items-center space-y-8 w-24 sm:w-32 md:w-44 lg:w-60 xl:w-80 [&>*]:navbar-links"
      onMouseEnter={() => {
        setCursorColor("36, 35, 49");
        setCursotBorderColor("245, 239, 224");
      }}
      onMouseLeave={() => {
        setCursorColor("245, 239, 224");
        setCursotBorderColor("36, 35, 49");
      }}
    >
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
    </aside>
  );
}
