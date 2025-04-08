import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation Login($input: LoginInput!) {
    login(input: $input) {
      token
      user {
        id
        email
        username
      }
    }
  }
`;

export const REGISTER_USER = `
  mutation Register($input: RegisterInput!) {
    register(input: $input) {
      token
      user {
        id
        email
        username
      }
    }
  }
`;

export const GET_USER = gql`
  query GetUser($id: String!) {  # Changed from Int! to String!
    user(id: $id) {
      id
      email
      username
      isAdmin
    }
  }
`;
