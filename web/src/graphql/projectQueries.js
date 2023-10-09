import { gql } from "graphql-request";

const GET_ALL_CAROUSEL_PROJECTS = gql`
  query GET_ALL_CAROUSEL_PROJECTS {
    carousel {
      images {
        id
        url
        alt
      }
    }
  }
`;

const GET_ALL_PROJECTS = (filter) => gql`
  query GET_ALL_PROJECTS {
    allProjects(orderBy: year_DESC, ${filter}) {
      id
      name
      year
      images {
        url
        alt
      }
    }
  }
`;

const GET_PROJECT = gql`
  query GET_PROJECT {
    project(filter: { id: { eq: $id } }) {
      id
      name
      images {
        id
        url
        alt
        width
        height
      }
      projectType
      description
      metreage
      stepPresented
      usedSoftware
      place
      year
      needsProgram
    }
  }
`;

export { GET_ALL_CAROUSEL_PROJECTS, GET_ALL_PROJECTS, GET_PROJECT };
// eslint-disable-next-line prettier/prettier

