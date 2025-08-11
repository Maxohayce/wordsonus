import { request, gql } from "graphql-request";

const graphqlAPI = process.env.NEXT_PUBLIC_WORDPRESS_API_URL;

// Define the expected shape of a post
type Post = {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  slug: string;
  date: string;
  author: string;
  featuredImage: {
    node: {
      sourceUrl: string;
    };
  };
};

// Define the shape of the GraphQL response
type GetPostsResponse = {
  posts: {
    nodes: Post[];
  };
};

export async function getPosts(): Promise<Post[]> {
  const query = gql`
    query GetPosts {
      posts(first: 10) {
        nodes {
          id
          title
          excerpt
          content
          slug
          date
          author {
            node {
              name
            }
          }
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
    const response = await request<GetPostsResponse>(graphqlAPI, query);
    return response.posts.nodes;
  } catch (error) {
    console.error("Error fetching posts:", error);
    return [];
  }
}
