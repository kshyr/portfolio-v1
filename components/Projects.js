import ProjectBlock from "./ProjectBlock";

export default function Projects({ setCursorColor, setCursotBorderColor }) {
  return (
    <div id="projects" className="component-block overflow-scroll">
      <div className="flex h-screen flex-col justify-center items-center gap-10">
        <h1 className="text-black text-xl md:text-2xl lg:text-3xl xl:text-4xl tracking-tight font-semibold">
          Projects
        </h1>

        <div className="flex flex-col md:flex-row lg:flex-row xl:flex-row items-center justify-evenly gap-3 md:gap-3 lg:gap-8 xl:gap-20">
          <ProjectBlock
            title="ToDooo"
            description="My new tab page. Simple todo app that uses local storage to store your tasks."
            image="/todo_screenshot.png"
            link="https://broadleaf-careful-responsibility.glitch.me/"
            setCursorColor={setCursorColor}
            setCursotBorderColor={setCursotBorderColor}
          />
          <ProjectBlock
            title="SpaceX clone"
            image="/spacex_screenshot.png"
            description="Clone of SpaceX website. Made with React using react-router."
            link="https://spacex-website-clone.netlify.app/"
            setCursorColor={setCursorColor}
            setCursotBorderColor={setCursotBorderColor}
          />
          <ProjectBlock
            title="Digital Garden"
            image="/digitalgarden_screenshot.png"
            description="Store your ideas and export their product. Made possible with GraphQL and AWS."
            link="https://develop.dia4dpi85gb2h.amplifyapp.com/"
            setCursorColor={setCursorColor}
            setCursotBorderColor={setCursotBorderColor}
          />
        </div>
      </div>
    </div>
  );
}
