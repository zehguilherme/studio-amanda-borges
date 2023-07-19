import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { Header } from ".";
import { Hamburguer } from "../icons/Hamburger";
import { Logo } from "../icons/Logo";
import { Xmark } from "../icons/Xmark";

describe("Header component", () => {
  it("should render a h1 title", () => {
    render(<Header />);

    const header1 = screen.getByText("Studio Amanda Borges");
    expect(header1).toHaveClass("sr-only");
    expect(header1).toBeInTheDocument();
  });

  it("should render a link to the Home page", () => {
    render(<Header />);

    const homeLink = screen.getByLabelText("Navegar para a página Home");
    expect(homeLink).toHaveAttribute("href", "/");
    expect(homeLink).toBeInTheDocument();
  });

  it("should render the site logo", () => {
    const { container: logoHtmlElement } = render(<Logo />);

    const logoElement = logoHtmlElement.querySelector("svg");
    expect(logoElement).toHaveAttribute("name", "logo");
    expect(logoElement).toBeVisible();
    expect(logoElement).toBeInTheDocument();
  });

  it("should render a button with a X mark icon or Hamburger icon", async () => {
    const user = userEvent.setup();

    render(<Header />);

    const navMenuButton = screen.getByRole("button");
    expect(navMenuButton).toHaveAttribute("name", "menu-button");
    expect(navMenuButton).toHaveAttribute("type", "button");
    expect(navMenuButton).toBeInTheDocument();

    await user.click(navMenuButton);

    const { container: hamburger } = render(<Hamburguer />);
    const hamburgerElement = hamburger.querySelector("svg");
    expect(hamburgerElement).toHaveAttribute("name", "hamburger");
    expect(hamburgerElement).toBeVisible();

    await user.click(navMenuButton);

    const { container: xMark } = render(<Xmark />);
    const xMarkElement = xMark.querySelector("svg");
    expect(xMarkElement).toHaveAttribute("name", "x-mark");
    expect(xMarkElement).toBeVisible();
  });

  it("should render 4 links with their correctly styles", () => {
    render(<Header />);

    const links = screen.getAllByRole("link");

    links.forEach((link) => {
      expect(link).toHaveAttribute("href");
      expect(link).toBeInTheDocument();
    });
  });
});
