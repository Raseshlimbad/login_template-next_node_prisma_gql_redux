import { Request, Response } from 'express';
import { User } from './user';
import { PrismaClient } from '@prisma/client';
import { Session } from 'express-session';

interface CustomSession extends Session {
  user?: User;
}

interface CustomRequest extends Request {
  session: CustomSession;
}

export interface GraphQLContext {
  req: CustomRequest;
  res: Response;
  prisma: PrismaClient;
  session: CustomSession;
}