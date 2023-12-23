"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeDefs = void 0;
exports.typeDefs = `#graphql
  type Query {
        me: User
        users: [User]
        posts: [Post]
}

  type Mutation {
    signup(
      name: String!,
      email: String!,
      password: String!
      bio: String
      ): AuthPayload,

    signin(
      email: String!,
      password: String!
    ): AuthPayload  

    addpost(post: PostInput): PostPayload

    updatePost(
      postId: ID!
      post: PostInput
    ): PostPayload
}


 type AuthPayload {
       token: String
       userError: String
 }


  type PostPayload {
    userError: String
    post: Post
  }

input PostInput{
  title: String
  content: String
}

  type Post {
        id: ID!
        title: String!
        content: String!
        author: User
        createdAt: String!
        published: Boolean!
}

type User {
        id: ID!
        name: String!
        email: String!
        createdAt: String!
        posts: [Post]
}

type Profile {
        id: ID!
        bio: String!
        createdAt: String!
        user: User!
}
`;
