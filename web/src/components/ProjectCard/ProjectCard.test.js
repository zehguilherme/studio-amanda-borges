import { render, screen } from "@testing-library/react";

import { GET_PROJECT } from "@/graphql/projectQueries";
import { request } from "@/infra/cms/datocms";
import { ProjectCard } from ".";

describe("Home page", () => {
  describe("Project card component", () => {
    it("should render the image from the project", async () => {
      const projectData = await request({
        query: GET_PROJECT,
        preview: false,
      });

      render(
        <ProjectCard
          projectUrl={`projeto/${projectData?.project?.id}`}
          imgUrl={projectData?.project?.images[0].url}
          imgAlt={projectData?.project?.images[0].alt}
          projectTitle={projectData?.project?.name}
          projectYear={projectData?.project?.year}
        />
      );

      const projectImage = await screen.findByRole("img");

      expect(projectImage).toBeInTheDocument();
      expect(projectImage).toHaveAttribute("src");
      expect(projectImage).toHaveAttribute("alt");
      expect(projectImage).toHaveAttribute("width", "351");
      expect(projectImage).toHaveAttribute("height", "351");
    });

    it("should render the project title", async () => {
      const projectData = await request({
        query: GET_PROJECT,
        preview: false,
      });

      render(
        <ProjectCard
          projectUrl={`projeto/${projectData?.project?.id}`}
          imgUrl={projectData?.project?.images[0].url}
          imgAlt={projectData?.project?.images[0].alt}
          projectTitle={projectData?.project?.name}
          projectYear={projectData?.project?.year}
        />
      );

      const projectTitle = screen.getByText("Cozinha Vista Alegre 1");
      expect(projectTitle).toBeInTheDocument();
    });

    it("should render the project year", async () => {
      const projectData = await request({
        query: GET_PROJECT,
        preview: false,
      });

      render(
        <ProjectCard
          projectUrl={`projeto/${projectData?.project?.id}`}
          imgUrl={projectData?.project?.images[0].url}
          imgAlt={projectData?.project?.images[0].alt}
          projectTitle={projectData?.project?.name}
          projectYear={projectData?.project?.year}
        />
      );

      const projectTitle = screen.getByText("2023");
      expect(projectTitle).toBeInTheDocument();
    });
  });
});
