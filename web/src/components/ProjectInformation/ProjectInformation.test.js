import { render, screen } from "@testing-library/react";

import { GET_PROJECT } from "@/graphql/projectQueries";
import { request } from "@/infra/cms/datocms";
import { ProjectInformation } from ".";

describe("Project page", () => {
  describe("Project information component", () => {
    it("should render a project name", async () => {
      const projectData = await request({
        query: GET_PROJECT,
        preview: false,
      });

      render(<ProjectInformation name={projectData?.project?.name} />);

      const projectName = screen.getByText("Cozinha Vista Alegre 1");
      expect(projectName).toBeInTheDocument();
    });

    it("should render the title of the section 'Interiores' and your content", async () => {
      const projectData = await request({
        query: GET_PROJECT,
        preview: false,
      });

      render(<ProjectInformation type={projectData?.project?.projectType} />);

      const sectionTitle = screen.getByText("Tipo");
      expect(sectionTitle).toBeInTheDocument();

      const projectType = screen.getByText("Interiores");
      expect(projectType).toBeInTheDocument();
    });

    it("should render the title of the section 'Descrição' and your content", async () => {
      const projectData = await request({
        query: GET_PROJECT,
        preview: false,
      });

      render(
        <ProjectInformation description={projectData?.project?.description} />
      );

      const sectionTitle = screen.getByText("Descrição");
      expect(sectionTitle).toBeInTheDocument();

      const projectDescription = screen.getByText("Cozinha");
      expect(projectDescription).toBeInTheDocument();
    });

    it("should render the title of the section 'Metragem' and your content", async () => {
      const projectData = await request({
        query: GET_PROJECT,
        preview: false,
      });

      const meterage = projectData?.project?.metreage;
      render(<ProjectInformation meterage={meterage} />);

      const sectionTitle = screen.getByText("Metragem");
      expect(sectionTitle).toBeInTheDocument();

      const projectMeterage = screen.getByText("5 m²");
      expect(projectMeterage).toBeInTheDocument();
    });

    it("should render the title of the section 'Etapa apresentada' and your content", async () => {
      const projectData = await request({
        query: GET_PROJECT,
        preview: false,
      });

      render(
        <ProjectInformation
          stepsPresented={projectData?.project?.stepPresented}
        />
      );

      const sectionTitle = screen.getByText("Etapa apresentada");
      expect(sectionTitle).toBeInTheDocument();

      const firstStepPresented = screen.getByText("Render");
      expect(firstStepPresented).toBeInTheDocument();

      const secondStepPresented = screen.getByText("Projeto Executivo");
      expect(secondStepPresented).toBeInTheDocument();
    });

    it("should render the title of the section 'Softwares usados' and your content", async () => {
      const projectData = await request({
        query: GET_PROJECT,
        preview: false,
      });

      render(
        <ProjectInformation
          usedSoftwares={projectData?.project?.usedSoftware}
        />
      );

      const sectionTitle = screen.getByText("Softwares usados");
      expect(sectionTitle).toBeInTheDocument();

      const firstStepUsedSoftware = screen.getByText("Sketchup");
      expect(firstStepUsedSoftware).toBeInTheDocument();
    });

    it("should render the title of the section 'Local' and your content", async () => {
      const projectData = await request({
        query: GET_PROJECT,
        preview: false,
      });

      render(<ProjectInformation place={projectData?.project?.place} />);

      const sectionTitle = screen.getByText("Local");
      expect(sectionTitle).toBeInTheDocument();

      const projectPlace = screen.getByText("Bauru/SP");
      expect(projectPlace).toBeInTheDocument();
    });

    it("should render the title of the section 'Ano' and your content", async () => {
      const projectData = await request({
        query: GET_PROJECT,
        preview: false,
      });

      render(<ProjectInformation year={projectData?.project?.year} />);

      const sectionTitle = screen.getByText("Ano");
      expect(sectionTitle).toBeInTheDocument();

      const projectYear = screen.getByText("2023");
      expect(projectYear).toBeInTheDocument();
    });

    it("should render the title of the section 'Programa de Necessidades' and your content", async () => {
      const projectData = await request({
        query: GET_PROJECT,
        preview: false,
      });

      render(
        <ProjectInformation needsProgram={projectData?.project?.needsProgram} />
      );

      const sectionTitle = screen.getByText("Programa de Necessidades");
      expect(sectionTitle).toBeInTheDocument();

      const projectNeedsProgram = screen.getByText(
        "Projeto de interiores de uma cozinha pequena."
      );
      expect(projectNeedsProgram).toBeInTheDocument();
    });
  });
});
