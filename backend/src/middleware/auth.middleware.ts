import { Request, Response, NextFunction } from 'express';
import { PrismaClient } from "@prisma/client";
import { verifyToken } from '../utils/tokenUtils';

const prisma = new PrismaClient();

export const sessionMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.cookies.login_token;
  
  (req as any).session = { user: null };
  
  if (token) {
    try {
      const decoded = verifyToken(token);
      if (decoded.userId) {
        const user = await prisma.user.findUnique({
          where: { id: decoded.userId }
        });
        if (user) {
          (req as any).session.user = user;
        }
      }
    } catch (error) {
      console.error('Token verification failed:', error);
    }
  }
  next();
};