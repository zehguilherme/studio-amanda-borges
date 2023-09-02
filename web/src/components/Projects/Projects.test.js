import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

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

    // it("should check whether there are projects or not for existing type (link)", () => {

    // });
  });
});
