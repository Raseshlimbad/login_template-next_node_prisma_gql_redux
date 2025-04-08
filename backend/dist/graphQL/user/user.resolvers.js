"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userResolvers = void 0;
const auth_service_1 = require("../../services/auth.service");
exports.userResolvers = {
    Query: {
        getUser: async (_, __, context) => {
            const { session } = context.req;
            if (!session.user) {
                throw new Error("Not authenticated");
            }
            return session.user;
        },
    },
    Mutation: {
        register: async (_, { input, }) => {
            try {
                return await (0, auth_service_1.register)(input);
            }
            catch (error) {
                throw new Error("Error registering user: " + error.message);
            }
        },
        login: async (_, { input }, context) => {
            try {
                return await (0, auth_service_1.login)(input, context.res);
            }
            catch (error) {
                throw new Error("Error logging in: " + error.message);
            }
        },
    },
};
//# sourceMappingURL=user.resolvers.js.map