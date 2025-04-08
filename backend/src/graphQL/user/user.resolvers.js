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
exports.userResolvers = void 0;
const client_1 = require("@prisma/client");
const auth_service_1 = require("../../services/auth.service");
const prisma = new client_1.PrismaClient();
exports.userResolvers = {
    Query: {
        getUser: (_, __, context) => __awaiter(void 0, void 0, void 0, function* () {
            const { session } = context.req;
            if (!session.user) {
                throw new Error("Not authenticated");
            }
            return session.user;
        }),
    },
    Mutation: {
        register: (_1, _a, context_1) => __awaiter(void 0, [_1, _a, context_1], void 0, function* (_, { input, }, context) {
            try {
                return yield (0, auth_service_1.register)(input);
            }
            catch (error) {
                throw new Error("Error registering user: " + error.message);
            }
        }),
        login: (_1, _a, context_1) => __awaiter(void 0, [_1, _a, context_1], void 0, function* (_, { input }, context) {
            try {
                return yield (0, auth_service_1.login)(input, context.res);
            }
            catch (error) {
                throw new Error("Error logging in: " + error.message);
            }
        }),
    },
};
