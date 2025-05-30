import pkg from './EAI 1202223241/server/db.js';
const { authors, posts } = pkg;

export const root = {
  posts: () => posts,
  post: ({ id }) => posts.find(post => post.id === id),
  authors: () => authors,
  author: ({ id }) => authors.find(author => author.id === id)
}; 