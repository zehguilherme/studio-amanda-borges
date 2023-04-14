import Image from "next/image";
import Link from "next/link";

export function ProjectCard({
  projectUrl,
  imgUrl,
  imgAlt,
  projectTitle,
  projectYear,
}) {
  return (
    <Link href={projectUrl} className="relative">
      <Image
        src={imgUrl}
        alt={imgAlt}
        width={351}
        height={351}
        placeholder="blur"
        blurDataURL={imgUrl}
        className="aspect-square rounded-[5px] object-center object-cover"
      />

      <div className="flex flex-col items-start space-y-1 p-6 w-full bg-gradient-to-t from-gray-900 absolute bottom-0">
        <h3 className="text-white-white1 text-xl font-bold break-all">
          {projectTitle}
        </h3>

        <span className="text-white-white1 text-base">{projectYear}</span>
      </div>
    </Link>
  );
}
