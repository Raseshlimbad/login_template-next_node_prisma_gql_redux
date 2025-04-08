"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sessionMiddleware = void 0;
const client_1 = require("@prisma/client");
const tokenUtils_1 = require("../utils/tokenUtils");
const prisma = new client_1.PrismaClient();
const sessionMiddleware = async (req, _res, next) => {
    const token = req.cookies.login_token;
    req.session = { user: null };
    if (token) {
        try {
            const decoded = (0, tokenUtils_1.verifyToken)(token);
            if (decoded.userId) {
                const user = await prisma.user.findUnique({
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
};
exports.sessionMiddleware = sessionMiddleware;
//# sourceMappingURL=auth.middleware.js.map