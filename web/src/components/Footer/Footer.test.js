import { render, screen } from "@testing-library/react";

import { Footer } from ".";
import { Email } from "../icons/Email";
import { Instagram } from "../icons/Instagram";
import { Logo } from "../icons/Logo";
import { WhatsApp } from "../icons/WhatsApp";

describe("About component", () => {
  it("should render a link to the Home page", () => {
    render(<Footer />);

    const homeLink = screen.getByLabelText("Navegar para a página Home");
    expect(homeLink).toHaveAttribute("href", "/");
    expect(homeLink).toBeInTheDocument();
  });

  it("should render the site logo", () => {
    const { container } = render(<Logo />);

    const logoElement = container.querySelector("svg");
    expect(logoElement).toHaveAttribute("name", "logo");
    expect(logoElement).toBeVisible();
    expect(logoElement).toBeInTheDocument();
  });

  it("should render 3 social media nav links with their logos (Instagram, WhatsApp and E-mail)", () => {
    render(<Footer />);

    // Instagram
    const instagramLink = screen.getByLabelText("Navegar para o Instagram");
    expect(instagramLink).toHaveAttribute(
      "href",
      "https://www.instagram.com/studio.amandaborges"
    );

    const { container: instagramHtmlElement } = render(<Instagram />);
    const instagramLogo = instagramHtmlElement.querySelector("svg");
    expect(instagramLogo).toHaveAttribute("name", "instagram");
    expect(instagramLogo).toBeVisible();
    expect(instagramLogo).toBeInTheDocument();

    // WhatsApp
    const whatsappLink = screen.getByLabelText("Navegar para o WhatsApp");
    expect(whatsappLink).toHaveAttribute("href", "https://wa.me/5514998695347");

    const { container: whatsappHtmlElement } = render(<WhatsApp />);
    const whatsappLogo = whatsappHtmlElement.querySelector("svg");
    expect(whatsappLogo).toHaveAttribute("name", "whatsapp");
    expect(whatsappLogo).toBeVisible();
    expect(whatsappLogo).toBeInTheDocument();

    // E-mail
    const emailLink = screen.getByLabelText("Enviar um e-mail");
    expect(emailLink).toHaveAttribute(
      "href",
      "mailto:amanda_leticiah@hotmail.com"
    );

    const { container: emailHtmlElement } = render(<Email />);
    const emailLogo = emailHtmlElement.querySelector("svg");
    expect(emailLogo).toHaveAttribute("name", "email");
    expect(emailLogo).toBeVisible();
    expect(emailLogo).toBeInTheDocument();
  });
});
