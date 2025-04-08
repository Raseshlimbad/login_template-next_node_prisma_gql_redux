import { Request, Response } from 'express';
import { User } from './user';
import { PrismaClient } from '@prisma/client';

interface Session {
  user?: User;
}

interface CustomRequest extends Request {
  session: Session;
}

export interface GraphQLContext {
  req: CustomRequest;
  res: Response;
  prisma: PrismaClient;
  session: Session;
}