import { GraphQLClient } from "graphql-request";

const BASE_ENDPOINT = "https://graphql.datocms.com";
const PREVIEW_ENDPOINT = "https://graphql.datocms.com/preview";

// eslint-disable-next-line prettier/prettier
export function request ({ query, variables, preview }) {
  const headers = {
    authorization: `Bearer ${process.env.DATOCMS_TOKEN}`,
  };

  const ENDPOINT = preview ? PREVIEW_ENDPOINT : BASE_ENDPOINT;

  const client = new GraphQLClient(ENDPOINT, { headers });

  return client.request(query, variables);
}
