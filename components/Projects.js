import ProjectBlock from "./ProjectBlock";

export default function Projects({ setCursorColor, setCursotBorderColor }) {
  return (
    <div id="projects" className="component-block">
      <div className="flex h-screen flex-col justify-center items-center space-y-9">
        <h1 className="text-black text-xl md:text-2xl lg:text-3xl xl:text-4xl tracking-tight font-semibold">
          Projects
        </h1>

        <div className="flex flex-col md:flex-row lg:flex-row xl:flex-row items-center justify-evenly gap-10 xl:gap-20">
          <ProjectBlock
            title="ToDooo"
            description="My new tab page. Simple todo app that uses local storage to store your tasks."
            image="Screenshot 2022-09-20 at 02-37-20 TODO.png"
            link="https://broadleaf-careful-responsibility.glitch.me/"
            setCursorColor={setCursorColor}
            setCursotBorderColor={setCursotBorderColor}
          />
          <ProjectBlock
            title="SpaceX clone"
            image="Screenshot 2022-09-20 at 02-34-44 SpaceX.png"
            description="Clone of SpaceX website. Made with React using react-router."
            link="https://spacex-website-clone.netlify.app/"
            setCursorColor={setCursorColor}
            setCursotBorderColor={setCursotBorderColor}
          />
          <ProjectBlock
            title="Steam sales"
            image="Screenshot 2022-09-20 at 02-44-52 Screenshot.png"
            description="Steam sales tracker that uses Steam API to get the latest deals."
            setCursorColor={setCursorColor}
            setCursotBorderColor={setCursotBorderColor}
          />
        </div>
      </div>
    </div>
  );
}
