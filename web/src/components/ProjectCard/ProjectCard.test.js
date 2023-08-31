import { render, screen } from "@testing-library/react";

import { ProjectCard } from ".";

describe("Home page", () => {
  describe("Project card component", () => {
    it("should render the image from the project", async () => {
      render(
        <ProjectCard
          projectUrl="projeto/186134902"
          imgUrl="https://www.datocms-assets.com/85603/1692746232-teste-3.jpg"
          imgAlt="Render"
          projectTitle="Cozinha Vista Alegre"
          projectYear="2023"
        />
      );

      const projectImage = await screen.findByRole("img");

      expect(projectImage).toBeInTheDocument();
      expect(projectImage).toHaveAttribute("src");
      expect(projectImage).toHaveAttribute("alt");
      expect(projectImage).toHaveAttribute("width", "351");
      expect(projectImage).toHaveAttribute("height", "351");
    });

    it("should render the project title", () => {
      render(
        <ProjectCard
          projectUrl="projeto/186134902"
          imgUrl="https://www.datocms-assets.com/85603/1692746232-teste-3.jpg"
          imgAlt="Render"
          projectTitle="Cozinha Vista Alegre"
          projectYear="2023"
        />
      );

      const projectTitle = screen.getByText("Cozinha Vista Alegre");
      expect(projectTitle).toBeInTheDocument();
    });

    it("should render the project year", () => {
      render(
        <ProjectCard
          projectUrl="projeto/186134902"
          imgUrl="https://www.datocms-assets.com/85603/1692746232-teste-3.jpg"
          imgAlt="Render"
          projectTitle="Cozinha Vista Alegre"
          projectYear="2023"
        />
      );

      const projectTitle = screen.getByText("2023");
      expect(projectTitle).toBeInTheDocument();
    });
  });
});
