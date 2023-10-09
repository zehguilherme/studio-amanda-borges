// src/mocks/handlers.js
import { graphql } from "msw";

export const handlers = [
  graphql.query("GET_ALL_PROJECTS", (request, response, context) => {
    const { projectsAmount } = request.variables;

    if (projectsAmount === "all") {
      return response(
        context.data({
          allProjects: [
            {
              id: "163975552",
              name: "Cozinha Vista Alegre 123",
              year: 2023,
              images: [
                {
                  url: "https://www.datocms-assets.com/85603/1687465166-20.jpg",
                  alt: "Render",
                },
                {
                  url: "https://www.datocms-assets.com/85603/1687262269-18.png",
                  alt: "Vistas internas",
                },
                {
                  url: "https://www.datocms-assets.com/85603/1686505515-19.png",
                  alt: "Vista A Técnica",
                },
                {
                  url: "https://www.datocms-assets.com/85603/1687261725-17.png",
                  alt: "Isométrica explodida",
                },
              ],
            },
            {
              id: "186134902",
              name: "Projeto Casa de condomínio 123",
              year: 2022,
              images: [
                {
                  url: "https://www.datocms-assets.com/85603/1692746232-teste-3.jpg",
                  alt: "Fachada",
                },
                {
                  url: "https://www.datocms-assets.com/85603/1692747140-projeto-revit.jpg",
                  alt: "Projeto executivo da residência",
                },
                {
                  url: "https://www.datocms-assets.com/85603/1692747247-teste2.jpg",
                  alt: "Fachada entardecer",
                },
              ],
            },
          ],
        })
      );
    } else {
      return response(
        context.data({
          allProjects: [],
        })
      );
    }
  }),
];
