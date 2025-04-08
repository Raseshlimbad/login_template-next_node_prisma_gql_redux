"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sessionMiddleware = void 0;
const client_1 = require("@prisma/client");
const tokenUtils_1 = require("../utils/tokenUtils");
const prisma = new client_1.PrismaClient();
const sessionMiddleware = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const token = req.cookies.login_token;
    req.session = { user: null };
    if (token) {
        try {
            const decoded = (0, tokenUtils_1.verifyToken)(token);
            if (decoded.userId) {
                const user = yield prisma.user.findUnique({
                    where: { id: decoded.userId }
                });
                if (user) {
                    req.session.user = user;
                }
            }
        }
        catch (error) {
            console.error('Token verification failed:', error);
        }
    }
    next();
});
exports.sessionMiddleware = sessionMiddleware;
