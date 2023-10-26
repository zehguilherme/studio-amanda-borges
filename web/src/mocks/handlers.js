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

  graphql.query("GET_ABOUT_DATA", (request, response, context) => {
    return response(
      context.data({
        about: {
          image: {
            url: "https://www.datocms-assets.com/85603/1692387905-perfil.jpg",
            alt: "Imagem em formato retrato de Amanda Borges 1",
          },
          text: "Olá, sou Amanda Borges, arquiteta e urbanista formada pela Universidade Paulista. Com meus 25 anos de idade e 3 anos de experiência em projetos de interiores e móveis, encontrei minha verdadeira paixão pelo design de interiores.  Além da minha formação acadêmica, possuo conhecimentos sólidos em diversos softwares essenciais para a prática arquitetônica. Sou proficiente em AutoCAD, Revit, ArchiCad, SketchUp, Lumion, Layout Sketchup, Enscape, V-Ray para SketchUp e Pacote Office. Acredito na importância da comunicação clara e na atenção aos detalhes, para garantir que todas as etapas sejam executadas de maneira eficiente. 1",
        },
      })
    );
  }),

  graphql.query("GET_PROJECT", (request, response, context) => {
    return response(
      context.data({
        project: {
          id: "163975552",
          name: "Cozinha Vista Alegre 1",
          images: [
            {
              id: "61348244",
              url: "https://www.datocms-assets.com/85603/1687465166-20.jpg",
              alt: "Render",
              width: 1080,
              height: 1080,
            },
            {
              id: "61348245",
              url: "https://www.datocms-assets.com/85603/1687262269-18.png",
              alt: "Vistas internas",
              width: 1080,
              height: 1080,
            },
            {
              id: "61348246",
              url: "https://www.datocms-assets.com/85603/1686505515-19.png",
              alt: "Vista A Técnica",
              width: 1080,
              height: 1080,
            },
            {
              id: "61348247",
              url: "https://www.datocms-assets.com/85603/1687261725-17.png",
              alt: "Isométrica explodida",
              width: 1080,
              height: 1080,
            },
          ],
          projectType: "Interiores",
          description: "Cozinha",
          metreage: 5,
          stepPresented: ["Render", "Projeto Executivo"],
          usedSoftware: ["Sketchup"],
          place: "Bauru/SP",
          year: 2023,
          needsProgram: "Projeto de interiores de uma cozinha pequena.",
        },
      })
    );
  }),
];
