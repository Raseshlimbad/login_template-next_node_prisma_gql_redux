"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeDefs = void 0;
const graphql_tag_1 = require("graphql-tag");
const user_typeDefs_1 = require("./user/user.typeDefs");
const baseTypeDefs = (0, graphql_tag_1.gql) `
  scalar Date

  type Query {
    _: Boolean
  }

  type Mutation {
    _: Boolean
  }
`;
exports.typeDefs = [baseTypeDefs, user_typeDefs_1.userTypeDefs];
//# sourceMappingURL=typeDefs.js.map