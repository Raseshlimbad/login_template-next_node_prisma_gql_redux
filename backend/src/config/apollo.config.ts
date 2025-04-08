import { ApolloServer } from "apollo-server-express";
import { typeDefs } from "../graphQL/typeDefs";
import { resolvers } from "../graphQL/resolvers";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export function createApolloServer() {
  return new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req, res }) => ({
      req,
      res,
      prisma,
      session: (req as any).session
    }),
    cache: 'bounded'
  });
}