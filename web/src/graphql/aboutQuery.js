import { gql } from "graphql-request";

export const GET_ABOUT_DATA = gql`
  query GET_ABOUT_DATA {
    about {
      image {
        url
        alt
      }
      text
    }
  }
`;
