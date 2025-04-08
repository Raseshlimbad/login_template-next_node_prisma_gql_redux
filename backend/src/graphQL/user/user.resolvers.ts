import { PrismaClient } from "@prisma/client";
import { GraphQLContext } from "../../types/context";
import { register, login } from "../../services/auth.service";

const prisma: PrismaClient = new PrismaClient();

export const userResolvers = {
  Query: {
    getUser: async (_: any, __: any, context: GraphQLContext) => {
      const { session } = context.req;
      if (!session.user) {
        throw new Error("Not authenticated");
      }
      return session.user;
    },
  },
  Mutation: {
    register: async (
      _: unknown,
      {
        input,
      }: { input: { email: string; password: string; username: string } },
      context: GraphQLContext
    ) => {
      try {
        return await register(input);
      } catch (error: any) {
        throw new Error("Error registering user: " + error.message);
      }
    },

    login: async (
      _: unknown,
      { input }: { input: { email: string; password: string } },
      context: GraphQLContext
    ) => {
      try {
        return await login(input, context.res);
      } catch (error: any) {
        throw new Error("Error logging in: " + error.message);
      }
    },
  },
};
