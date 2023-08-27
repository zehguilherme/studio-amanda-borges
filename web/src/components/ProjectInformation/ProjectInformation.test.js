import { render, screen } from "@testing-library/react";

import { ProjectInformation } from ".";

describe("Project page", () => {
  describe("Project information component", () => {
    it("should render a project name", () => {
      render(<ProjectInformation name={"Cozinha Vista Alegre"} />);

      const projectName = screen.getByText("Cozinha Vista Alegre");
      expect(projectName).toBeInTheDocument();
    });

    it("should render the title of the section 'Interiores' and your content", () => {
      render(<ProjectInformation type={"Interiores"} />);

      const sectionTitle = screen.getByText("Tipo");
      expect(sectionTitle).toBeInTheDocument();

      const projectType = screen.getByText("Interiores");
      expect(projectType).toBeInTheDocument();
    });

    it("should render the title of the section 'Descrição' and your content", () => {
      render(<ProjectInformation description={"Cozinha"} />);

      const sectionTitle = screen.getByText("Descrição");
      expect(sectionTitle).toBeInTheDocument();

      const projectDescription = screen.getByText("Cozinha");
      expect(projectDescription).toBeInTheDocument();
    });

    it("should render the title of the section 'Metragem' and your content", () => {
      const meterage = 5;
      render(<ProjectInformation meterage={meterage} />);

      const sectionTitle = screen.getByText("Metragem");
      expect(sectionTitle).toBeInTheDocument();

      const renderedMeterageText =
        meterage?.toString().replace(".", ",") + " m²";
      const projectMeterage = screen.getByText(renderedMeterageText);
      expect(projectMeterage).toBeInTheDocument();
    });

    it("should render the title of the section 'Etapa apresentada' and your content", () => {
      render(
        <ProjectInformation stepsPresented={["Render", "Projeto Executivo"]} />
      );

      const sectionTitle = screen.getByText("Etapa apresentada");
      expect(sectionTitle).toBeInTheDocument();

      const firstStepPresented = screen.getByText("Render");
      expect(firstStepPresented).toBeInTheDocument();

      const secondStepPresented = screen.getByText("Projeto Executivo");
      expect(secondStepPresented).toBeInTheDocument();
    });

    it("should render the title of the section 'Softwares usados' and your content", () => {
      render(<ProjectInformation usedSoftwares={["Sketchup"]} />);

      const sectionTitle = screen.getByText("Softwares usados");
      expect(sectionTitle).toBeInTheDocument();

      const firstStepUsedSoftware = screen.getByText("Sketchup");
      expect(firstStepUsedSoftware).toBeInTheDocument();
    });

    it("should render the title of the section 'Local' and your content", () => {
      render(<ProjectInformation place={"Bauru/SP"} />);

      const sectionTitle = screen.getByText("Local");
      expect(sectionTitle).toBeInTheDocument();

      const projectPlace = screen.getByText("Bauru/SP");
      expect(projectPlace).toBeInTheDocument();
    });

    it("should render the title of the section 'Ano' and your content", () => {
      render(<ProjectInformation year={"2023"} />);

      const sectionTitle = screen.getByText("Ano");
      expect(sectionTitle).toBeInTheDocument();

      const projectYear = screen.getByText("2023");
      expect(projectYear).toBeInTheDocument();
    });

    it("should render the title of the section 'Programa de Necessidades' and your content", () => {
      render(
        <ProjectInformation
          needsProgram={"Projeto de interiores de uma cozinha pequena."}
        />
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
