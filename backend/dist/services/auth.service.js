"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.register = register;
exports.login = login;
const client_1 = require("@prisma/client");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const prisma = new client_1.PrismaClient();
async function register(input) {
    const existingUser = await prisma.user.findUnique({ where: { email: input.email } });
    if (existingUser) {
        throw new Error("User already exists with this email");
    }
    const hashedPassword = await bcryptjs_1.default.hash(input.password, 10);
    const user = await prisma.user.create({
        data: {
            email: input.email,
            username: input.username,
            password: hashedPassword,
        },
    });
    const token = jsonwebtoken_1.default.sign({ userId: user.id }, process.env.JWT_SECRET, {
        expiresIn: "7d",
    });
    return {
        token,
        user,
    };
}
async function login(input, res) {
    const user = await prisma.user.findUnique({ where: { email: input.email } });
    if (!user)
        throw new Error("User not found");
    const validPassword = await bcryptjs_1.default.compare(input.password, user.password);
    if (!validPassword)
        throw new Error("Invalid password");
    if (!process.env.JWT_SECRET) {
        throw new Error("JWT_SECRET is not defined in environment variables");
    }
    const token = jsonwebtoken_1.default.sign({ userId: user.id }, process.env.JWT_SECRET, {
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
//# sourceMappingURL=auth.service.js.map