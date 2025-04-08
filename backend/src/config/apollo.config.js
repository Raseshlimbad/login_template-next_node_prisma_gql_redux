"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createApolloServer = createApolloServer;
const apollo_server_express_1 = require("apollo-server-express");
const typeDefs_1 = require("../graphQL/typeDefs");
const resolvers_1 = require("../graphQL/resolvers");
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
function createApolloServer() {
    return new apollo_server_express_1.ApolloServer({
        typeDefs: typeDefs_1.typeDefs,
        resolvers: resolvers_1.resolvers,
        context: ({ req, res }) => ({
            req,
            res,
            prisma,
            session: req.session
        }),
        cache: 'bounded'
    });
}
