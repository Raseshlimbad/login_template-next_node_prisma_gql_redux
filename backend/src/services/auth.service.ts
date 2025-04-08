import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { Response } from "express";

const prisma = new PrismaClient();

export interface RegisterInput {
  email: string;
  password: string;
  username: string;
}

export interface LoginInput {
  email: string;
  password: string;
}

export async function register(input: RegisterInput) {
  const existingUser = await prisma.user.findUnique({ where: { email: input.email } });

  if (existingUser) {
    throw new Error("User already exists with this email");
  }

  const hashedPassword = await bcrypt.hash(input.password, 10);

  const user = await prisma.user.create({
    data: {
      email: input.email,
      username: input.username,
      password: hashedPassword,
    },
  });

  const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET!, {
    expiresIn: "7d",
  });

  return {
    token,
    user,
  };
}

export async function login(input: LoginInput, res: Response) {
  const user = await prisma.user.findUnique({ where: { email: input.email } });
  if (!user) throw new Error("User not found");

  const validPassword = await bcrypt.compare(input.password, user.password);
  if (!validPassword) throw new Error("Invalid password");

  if (!process.env.JWT_SECRET) {
    throw new Error("JWT_SECRET is not defined in environment variables");
  }

  const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });

  res.cookie("login_token", token, {
    httpOnly: true,
    secure: false,
    sameSite: "none",
    maxAge: 24 * 60 * 60 * 1000,
  });

  return {
    token,
    user,
  };
}