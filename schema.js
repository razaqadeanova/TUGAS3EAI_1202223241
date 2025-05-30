import { buildSchema } from 'graphql';

export const schema = buildSchema(`
  type Author {
    id: ID!
    name: String!
  }

  type Post {
    id: ID!
    title: String!
    content: String!
    author: Author
  }

  type Query {
    posts: [Post!]!
    post(id: ID!): Post
    authors: [Author!]!
    author(id: ID!): Author
  }
`); 