import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import { Response } from "express";
import jwt from "jsonwebtoken";

const prisma: PrismaClient = new PrismaClient();

interface RegisterArgs {
  email: string;
  password: string;
  username: string;
}

interface LoginArgs {
  email: string;
  password: string;
}

const userResolvers = {
  Query: {},

  Mutation: {
    register: async (
      _: unknown,
      { email, password, username }: RegisterArgs
    ): Promise<any> => {
      try {
        const existingUser = await prisma.user.findUnique({ where: { email } });

        if (existingUser) {
          throw new Error("User already exists with this email");
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await prisma.user.create({
          data: {
            email,
            username,
            password: hashedPassword,
          },
        });

        // ✅ Generate JWT token
        const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET!, {
          expiresIn: "7d",
        });

        // ✅ Return token and user
        return {
          token,
          user,
        };
      } catch (error: any) {
        throw new Error("Error registering user: " + error.message);
      }
    },

    login: async (
      _: unknown,
      { email, password }: LoginArgs,
      { res }: { res: Response }
    ): Promise<any> => {
      try {
        const user = await prisma.user.findUnique({ where: { email } });
        if (!user) throw new Error("User not found");

        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword) throw new Error("Invalid password");

        if (!process.env.JWT_SECRET) {
          throw new Error("JWT_SECRET is not defined in environment variables");
        }

        const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
          expiresIn: "1d",
        });

        res.cookie("login_token", token, {
          httpOnly: true,
          // secure: process.env.NODE_ENV === "production",
          secure: false,
          sameSite: "none",
          maxAge: 24 * 60 * 60 * 1000,
        });

        return {
          token,
          user,
        };
      } catch (error: any) {
        throw new Error("Error logging in: " + error.message);
      }
    },
  },
};

export { userResolvers };

