import { GraphQLClient } from "graphql-request";

export function request ({ query, variables }) {
    const headers = {
        authorization: `Bearer ${process.env.DATOCMS_TOKEN}`,
        'X-Include-Drafts': 'true'
    };

    const client = new GraphQLClient('https://graphql.datocms.com', { headers });

    return client.request(query, variables);
}
