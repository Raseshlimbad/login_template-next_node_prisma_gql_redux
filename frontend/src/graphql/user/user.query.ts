import { gql } from "@apollo/client";

export const GET_USER = gql`
  query GetUser($id: String!) {
    user(id: $id) {
      id
      email
      username
      isAdmin
    }
  }
`;