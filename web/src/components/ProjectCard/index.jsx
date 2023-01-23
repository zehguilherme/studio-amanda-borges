import { Link } from "react-router-dom";

export function ProjectCard({
  projectUrl,
  imgUrl,
  imgTitle,
  projectTitle,
  projectYear,
}) {
  return (
    <Link to={`${projectUrl}`}>
      <div
        className={`aspect-square rounded-[5px] flex items-end bg-[url('${imgUrl}')]`}
        title={`${imgTitle}`}
      >
        <div className="flex flex-col items-start space-y-1 p-6 w-full bg-gradient-to-t from-gray-900">
          <h4 className="text-white-white1 text-xl font-bold break-all">
            {projectTitle}
          </h4>

          <span className="text-white-white1 text-base">{projectYear}</span>
        </div>
      </div>
    </Link>
  );
}