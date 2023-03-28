import Link from "next/link";

export function ProjectCard({
  projectUrl,
  imgUrl,
  imgTitle,
  projectTitle,
  projectYear,
}) {
  return (
    <Link
      href={projectUrl}
      scroll={false}
      className="inline-block w-full h-full"
    >
      <div
        style={{ backgroundImage: `url(${imgUrl})` }}
        className={`aspect-square rounded-[5px] flex items-end bg-cover bg-center`}
        title={imgTitle}
      >
        <div className="flex flex-col items-start space-y-1 p-6 w-full bg-gradient-to-t from-gray-900">
          <h3 className="text-white-white1 text-xl font-bold break-all">
            {projectTitle}
          </h3>

          <span className="text-white-white1 text-base">{projectYear}</span>
        </div>
      </div>
    </Link>
  );
}