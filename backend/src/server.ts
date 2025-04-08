import dotenv from "dotenv";
import { PrismaClient } from "@prisma/client";
import { configureApp } from "./config/app.config";
import { createApolloServer } from "./config/apollo.config";

dotenv.config();

// const prisma = new PrismaClient();
const port = process.env.PORT || 8001;
const app = configureApp();
const server = createApolloServer();

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

serverStart().catch((err) => {
  console.error(`Server error: ${err}`);
});
