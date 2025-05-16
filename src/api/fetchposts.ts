import { request, gql } from "graphql-request";

const graphqlAPI = process.env.NEXT_PUBLIC_WORDPRESS_API_URL;

export async function getPosts() {
  const query = gql`
    query GetPosts {
      posts(first: 10) {
        nodes {
          id
          title
          excerpt
          slug
          date
          featuredImage {
            node {
              sourceUrl
            }
          }
        }
      }
    }
  `;

  try {
    const response = await request(graphqlAPI, query);
    return response?.posts?.nodes ?? []; // Ensure safe return
  } catch (error) {
    console.error("Error fetching posts:", error);
    return [];
  }
}
