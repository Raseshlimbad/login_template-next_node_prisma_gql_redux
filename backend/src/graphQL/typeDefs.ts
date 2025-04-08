import { gql } from 'graphql-tag';
import { userTypeDefs } from './user/user.typeDefs';

const baseTypeDefs = gql`
  scalar Date

  type Query {
    _: Boolean
  }

  type Mutation {
    _: Boolean
  }
`;

export const typeDefs = [baseTypeDefs, userTypeDefs];
