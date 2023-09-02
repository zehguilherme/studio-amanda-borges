/* eslint-disable react/prop-types */
import Link from "next/link";

import { ProjectCard } from "@/components/ProjectCard";

export function Projects({
  projectTypeSearchParam,
  noProjectsFound,
  projects,
}) {
  return (
    <div className="container mx-auto space-y-6 p-6 lg:space-y-5 lg:py-8">
      <h2 className="text-3xl font-bold" id="projetos">
        Projetos
      </h2>

      <ul className="justify-center lg:flex">
        <li>
          <Link
            href="/"
            scroll={false}
            className={`flex h-12 items-center justify-center text-2xl lg:lg:h-11 lg:p-[14px] ${
              projectTypeSearchParam === undefined
                ? "font-bold"
                : "hover:text-black/50"
            }`}
          >
            Todos
          </Link>
        </li>
        <li>
          <Link
            href={`/?q=${encodeURIComponent("residencial")}`}
            scroll={false}
            className={`flex h-12 items-center justify-center text-2xl lg:lg:h-11 lg:p-[14px] ${
              projectTypeSearchParam === "residencial"
                ? "font-bold"
                : "hover:text-black/50"
            }`}
          >
            Residencial
          </Link>
        </li>
        <li>
          <Link
            href={`/?q=${encodeURIComponent("comercial")}`}
            scroll={false}
            className={`flex h-12 items-center justify-center text-2xl lg:lg:h-11 lg:p-[14px] ${
              projectTypeSearchParam === "comercial"
                ? "font-bold"
                : "hover:text-black/50"
            }`}
          >
            Comercial
          </Link>
        </li>
        <li>
          <Link
            href={`/?q=${encodeURIComponent("interiores")}`}
            scroll={false}
            className={`flex h-12 items-center justify-center text-2xl lg:lg:h-11 lg:p-[14px] ${
              projectTypeSearchParam === "interiores"
                ? "font-bold"
                : "hover:text-black/50"
            }`}
          >
            Interiores
          </Link>
        </li>
      </ul>

      <div
        className={`flex flex-col items-center justify-center space-y-7 sm:space-y-0 ${
          noProjectsFound
            ? ""
            : "sm:grid sm:grid-cols-2 sm:gap-7 lg:grid-cols-3 xl:grid-cols-4"
        }`}
      >
        {noProjectsFound ? (
          <div className="flex h-full w-full flex-col items-center space-y-10">
            <h3 className="text-center text-xl font-bold text-black">
              Nenhum projeto encontrado nessa categoria!
            </h3>
          </div>
        ) : (
          projects.map((project) => (
            <ProjectCard
              key={project?.id}
              projectUrl={`projeto/${encodeURIComponent(project?.id)}`}
              imgUrl={project?.images[0]?.url}
              imgAlt={project?.images[0]?.alt}
              projectTitle={project?.name}
              projectYear={project?.year}
            />
          ))
        )}
      </div>
    </div>
  );
}
