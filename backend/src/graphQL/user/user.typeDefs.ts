import { gql } from 'graphql-tag';

export const userTypeDefs = gql`
  type User {
    id: String!
    username: String!
    email: String!
    password: String
    createdAt: String!
    updatedAt: String!
  }

  type AuthPayload {
    token: String!
    user: User!
  }

  input LoginInput {
    email: String!
    password: String!
  }

  input RegisterInput {
    email: String!
    password: String!
    username: String!
  }

  extend type Query {
    getUser: User
    users: [User!]!
  }

  extend type Mutation {
    register(input: RegisterInput!): AuthPayload!
    login(input: LoginInput!): AuthPayload!
  }
`;