import { ApolloServer } from "apollo-server-express";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import express from "express";
import { verifyToken } from './utils/tokenUtils';
import { userResolvers } from "./graphQL/resolvers/userResolvers";
import { typeDefs } from "./graphQL/typeDefs";
import { PrismaClient } from "@prisma/client";
import cors from "cors";

dotenv.config();

const prisma = new PrismaClient();
const app: express.Application = express();
const port = process.env.PORT || 8001;

app.use(cookieParser());

// CORS setup
const corsOptions = {
  origin: "http://localhost:3000",  // Your frontend URL
  credentials: true,  // Allow cookies
};

// Apply CORS middleware first, before Apollo Server
app.use(cors(corsOptions));

// Resolvers
const resolvers = {
  Query: {
    ...userResolvers.Query,
  },
  Mutation: {
    ...userResolvers.Mutation,
  },
};

// Apollo Server Setup
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req, res }) => ({ req, res }),
});

const serverStart = async () => {
  await server.start();
  server.applyMiddleware({
    app: app as any,
    path: "/graphql",
    cors: false,
  });
  

  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}${server.graphqlPath}`);
  });
};

// Start the server
serverStart().catch((err) => {
  console.error(`Server error: ${err}`);
});
