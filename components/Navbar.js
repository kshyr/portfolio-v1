import { Link } from "react-scroll";

export default function Navbar() {
  return (
    <aside className="fixed h-screen bg-black text-l-wheat text-2xl top-0 flex flex-col justify-center items-center space-y-8 w-24 sm:w-32 md:w-44 lg:w-60 xl:w-80 [&>*]:cursor-pointer">
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
      <div>Contact</div>
    </aside>
  );
}
