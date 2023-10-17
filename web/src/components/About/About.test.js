import { render, screen } from "@testing-library/react";

import { GET_ABOUT_DATA } from "@/graphql/aboutQuery";
import { request } from "@/infra/cms/datocms";
import { About } from ".";

describe("Home page", () => {
  describe("About component", () => {
    it("should render a h2 title", () => {
      render(<About />);

      const header2 = screen.getByText("Sobre");
      expect(header2).toBeInTheDocument();
      expect(header2).toHaveAttribute("id", "sobre");
      expect(header2).toBeInTheDocument();
    });

    it("should render a profile image with src, alt, width and height", async () => {
      const aboutData = await request({
        query: GET_ABOUT_DATA,
        preview: false,
      });

      render(
        <About
          imageUrl={aboutData?.about?.image?.url}
          imageAltText={aboutData?.about?.image?.alt}
        />
      );

      const profileImage = await screen.findByRole("img");

      expect(profileImage).toBeInTheDocument();
      expect(profileImage).toHaveAttribute("src");
      expect(profileImage).toHaveAttribute("alt");
      expect(profileImage).toHaveAttribute("width", "312");
      expect(profileImage).toHaveAttribute("height", "392");
    });

    it("should render a description text", async () => {
      const aboutData = await request({
        query: GET_ABOUT_DATA,
        preview: false,
      });

      render(<About description={aboutData?.about?.text} />);

      const getByTextContent = (text) => {
        return screen.getByText((content, element) => {
          const hasText = (element) => element.textContent === text;
          const elementHasText = hasText(element);
          const childrenDontHaveText = Array.from(
            element?.children || []
          ).every((child) => !hasText(child));
          return elementHasText && childrenDontHaveText;
        });
      };

      const descriptionText = getByTextContent(aboutData?.about?.text);

      expect(descriptionText).toBeInTheDocument();
    });
  });
});
