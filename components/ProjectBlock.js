export default function ProjectBlock({
  title,
  description,
  image,
  link,
  setCursorColor,
  setCursotBorderColor,
}) {
  return (
    <div
      className="project-block"
      onMouseEnter={() => {
        setCursorColor("36, 35, 49");
        setCursotBorderColor("245, 239, 224");
      }}
      onMouseLeave={() => {
        setCursorColor("245, 239, 224");
        setCursotBorderColor("36, 35, 49");
      }}
    >
      <h1 className="text-l-wheat text-lg text-center mt-1">{title}</h1>
      <a href={link}>
        <img src={image} alt="project" className="rounded-lg" />
      </a>
      <h4 className="text-l-wheat text-center mt-4 ml-2 mr-2">{description}</h4>
    </div>
  );
}
