import Image from "next/image";

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
        <div className="relative project-img">
          <Image
            src={image}
            layout="fill"
            objectFit="cover"
            alt="project"
            className="rounded-lg"
          />
        </div>
      </a>
      <h4 className="text-l-wheat text-description text-center mt-4 ml-2 mr-2 line-clamp-2 md:line-clamp-3 lg:line-clamp-4                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        ">
        {description}
      </h4>
    </div>
  );
}
