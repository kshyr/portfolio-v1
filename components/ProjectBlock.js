export default function ProjectBlock({ title, description, image, link }) {
  return (
    <div className="project-block">
      <h1 className="text-l-wheat text-lg text-center mt-1">{title}</h1>
      <a href={link}>
        <img src={image} alt="project" className="rounded-lg" />
      </a>
      <h4 className="text-l-wheat text-center mt-4 ml-2 mr-2">{description}</h4>
    </div>
  );
}
