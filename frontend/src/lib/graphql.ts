import { gql } from "@apollo/client";

export const REGISTER_USER = gql`
  mutation RegisterUser(
    $email: String!
    $password: String!
    $username: String!
  ) {
    register(email: $email, password: $password, username: $username) {
      token
      user {
        id
        email
        username
      }
    }
  }
`;

export const LOGIN_USER = gql`
  mutation LoginUser($email: String!, $password: String!) {
    login(email: $email, password: $password) {
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
