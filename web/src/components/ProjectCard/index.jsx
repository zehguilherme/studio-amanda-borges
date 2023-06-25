/* eslint-disable react/prop-types */
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
        className="aspect-square rounded-[5px] object-cover object-center"
      />

      <div className="absolute bottom-0 flex w-full flex-col items-start space-y-1 bg-gradient-to-t from-gray-900 p-6">
        <h3 className="break-all text-xl font-bold text-white-white1">
          {projectTitle}
        </h3>

        <span className="text-base text-white-white1">{projectYear}</span>
      </div>
    </Link>
  );
}
