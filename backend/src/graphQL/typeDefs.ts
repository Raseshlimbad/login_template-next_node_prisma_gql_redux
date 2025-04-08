import { gql } from 'graphql-tag'; 

const typeDefs = gql`
  type User {
    id: String!
    username: String!
    email: String!
    password: String
    createdAt: String!
    updatedAt: String!
  }

  type Mutation {
    register(email: String!, password: String!, username: String): AuthPayload!
    login(email: String!, password: String!): AuthPayload!
  }

  type AuthPayload {
    token: String!
    user: User!
  }

  type Query {
    users: [User!]!
  }
`;

export { typeDefs };
