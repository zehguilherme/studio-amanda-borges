import { render, screen } from "@testing-library/react";

import { About } from ".";

describe("About component", () => {
  it("should render a h2 title", () => {
    render(<About />);

    const header2 = screen.getByText("Sobre");
    expect(header2).toBeInTheDocument();
    expect(header2).toHaveAttribute("id", "sobre");
    expect(header2).toBeInTheDocument();
  });

  it("should render a profile image with src, alt, width and height", async () => {
    render(
      <About
        imageUrl={
          "https://studioamandaborges.vercel.app/_next/image?url=https%3A%2F%2Fwww.datocms-assets.com%2F85603%2F1687226908-profile.png&w=384&q=75"
        }
        imageAltText={"Imagem em formato retrato de Amanda Borges"}
      />
    );

    const profileImage = await screen.findByRole("img");

    expect(profileImage).toBeInTheDocument();
    expect(profileImage).toHaveAttribute("src");
    expect(profileImage).toHaveAttribute("alt");
    expect(profileImage).toHaveAttribute("width", "312");
    expect(profileImage).toHaveAttribute("height", "392");
  });

  it("should render a description text", () => {
    render(
      <About
        description={
          "Do mollit veniam Lorem enim exercitation esse aliquip qui nisi. Elit in ullamco fugiat consectetur exercitation eu aute labore. Reprehenderit dolor ea excepteur exercitation culpa ad elit consectetur nisi duis exercitation exercitation nulla. Magna quis sint anim commodo esse sunt do adipisicing. Dolor mollit elit dolore aliqua culpa dolore."
        }
      />
    );

    const descriptionText = screen.getByText(
      "Do mollit veniam Lorem enim exercitation esse aliquip qui nisi. Elit in ullamco fugiat consectetur exercitation eu aute labore. Reprehenderit dolor ea excepteur exercitation culpa ad elit consectetur nisi duis exercitation exercitation nulla. Magna quis sint anim commodo esse sunt do adipisicing. Dolor mollit elit dolore aliqua culpa dolore."
    );

    expect(descriptionText).toBeInTheDocument();
    expect(descriptionText).toHaveAttribute("name", "description");
  });
});
