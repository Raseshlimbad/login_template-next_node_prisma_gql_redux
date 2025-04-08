import jwt from 'jsonwebtoken';

interface DecodedToken {
  userId: string;
  iat: number;
  exp: number;
}

export function verifyToken(token: string): DecodedToken {
  if (!process.env.JWT_SECRET) {
    throw new Error('JWT_SECRET is not defined');
  }
  
  return jwt.verify(token, process.env.JWT_SECRET) as DecodedToken;
}
