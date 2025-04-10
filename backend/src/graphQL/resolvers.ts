import { userResolvers } from './user/user.resolvers';
import { GraphQLScalarType, Kind } from 'graphql';

const dateScalar = new GraphQLScalarType({
  name: 'Date',
  description: 'Date custom scalar type',
  serialize(value: unknown) {
    if (value instanceof Date) {
      return value.getTime();
    }
    throw new Error('GraphQL Date Scalar serializer expected a `Date` object');
  },
  parseValue(value: unknown) {
    if (typeof value === 'number') {
      return new Date(value);
    }
    throw new Error('GraphQL Date Scalar parser expected a `number`');
  },
  parseLiteral(ast) {
    if (ast.kind === Kind.INT) {
      return new Date(parseInt(ast.value, 10));
    }
    return null;
  },
});

const baseResolvers = {
  Date: dateScalar,
};

export const resolvers = [baseResolvers, userResolvers];