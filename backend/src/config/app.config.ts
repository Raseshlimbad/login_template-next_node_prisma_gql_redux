import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import { sessionMiddleware } from "../middleware/auth.middleware";

export function configureApp() {
  const app = express();
  
  const corsOptions = {
    origin: "http://localhost:3000",
    credentials: true,
  };

  app.use(cookieParser());
  app.use(cors(corsOptions));
  app.use(sessionMiddleware);

  return app;
}