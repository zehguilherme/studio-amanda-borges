import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { GET_ALL_PROJECTS } from "@/graphql/projectQueries";
import { request } from "@/infra/cms/datocms";
import { Projects } from ".";

describe("Home page", () => {
  describe("Project component", () => {
    it("should render a h2 title", () => {
      render(<Projects projects={[]} />);

      const header2 = screen.getByText("Projetos");
      expect(header2).toBeInTheDocument();
    });

    it("should render 4 links (filters)", () => {
      render(<Projects projects={[]} />);

      const allLink = screen.getByText("Todos");
      expect(allLink).toBeInTheDocument();

      const residentialLink = screen.getByText("Residencial");
      expect(residentialLink).toBeInTheDocument();

      const commercialLink = screen.getByText("Comercial");
      expect(commercialLink).toBeInTheDocument();

      const interiorsLink = screen.getByText("Interiores");
      expect(interiorsLink).toBeInTheDocument();
    });

    it("should verify if the first filter is selected on the first component load", () => {
      render(<Projects projects={[]} />);

      const allLink = screen.getByText("Todos");
      expect(allLink).toHaveClass("font-bold");
    });

    it("should check that each link is selected correctly when it's clicked", async () => {
      const user = userEvent.setup();

      render(<Projects projects={[]} />);

      const allLink = screen.getByText("Todos");
      await user.click(allLink);
      waitFor(() => {
        expect(allLink).toHaveClass("font-bold");
      });

      const residentialLink = screen.getByText("Residencial");
      await user.click(residentialLink);
      waitFor(() => {
        expect(residentialLink).toHaveClass("font-bold");
      });

      const commercialLink = screen.getByText("Comercial");
      await user.click(commercialLink);
      waitFor(() => {
        expect(commercialLink).toHaveClass("font-bold");
      });

      const interiorsLink = screen.getByText("Interiores");
      await user.click(interiorsLink);
      waitFor(() => {
        expect(interiorsLink).toHaveClass("font-bold");
      });
    });

    it("should test the link that has projects", async () => {
      const projectsData = await request({
        query: GET_ALL_PROJECTS(""),
        variables: {
          projectsAmount: "all",
        },
      });

      const projectsList = projectsData.allProjects;

      render(<Projects projects={projectsList} noProjectsFound={false} />);

      expect(projectsList).not.toBe([]);
    });

    it("should test the link that does not have projects", async () => {
      const { rerender } = render(
        <Projects projects={[]} noProjectsFound={true} />
      );

      const user = userEvent.setup();

      const commercialLink = screen.getByText("Comercial");
      await user.click(commercialLink);

      const projectsData = await request({
        query: GET_ALL_PROJECTS('filter: {projectType: {eq: "Comercial"}}'),
        variables: {
          projectsAmount: 0,
        },
      });

      const projectsList = projectsData.allProjects;

      rerender(<Projects projects={projectsList} noProjectsFound={true} />);

      const noProjectsFoundHeader3 = screen.getByText(
        "Nenhum projeto encontrado nessa categoria!"
      );
      expect(noProjectsFoundHeader3).toBeVisible();
    });
  });
});
