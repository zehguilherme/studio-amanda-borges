import { render, screen } from "@testing-library/react";

import { HeaderProject } from ".";
import { ArrowBack } from "../icons/ArrowBack";

describe("Project page", () => {
  describe("Header project component", () => {
    it("should render a anchor pointing to home page", () => {
      render(<HeaderProject />);

      const backLink = screen.getByLabelText("Navegar para a página Home");
      expect(backLink).toBeInTheDocument();
      expect(backLink).toHaveAttribute("href", "/");
    });

    it("should render a arrow back icon", () => {
      render(<HeaderProject />);

      const { container: arrowBackHtmlElement } = render(<ArrowBack />);

      const arrowBackElement = arrowBackHtmlElement.querySelector("svg");
      expect(arrowBackElement).toHaveAttribute("name", "arrow-back");
      expect(arrowBackElement).toBeVisible();
      expect(arrowBackElement).toBeInTheDocument();
    });
  });
});
